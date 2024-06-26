import { CURRENT_DATE } from "../config/constants.js";
import db from "../models/index.js";
import checkBookandUser from "../utils/checkBookandUser.js";
import checkPreviousUserComment from "../utils/checkPreviousUserComment.js";
import CustomError from "../helpers/customError.js";
const addUserReviewToBook = async (userId, bookId, content) => {
  const bookAndUserCheck = await checkBookandUser(bookId, userId);

  if (!bookAndUserCheck) {
    const newReview = await db.Review.create({
      userId,
      bookId,
      ...content,
    });

    return newReview;
  }
  throw new CustomError(400, "Ya has hecho una reseña a este libro");
};

const deleteUserReview = async (userId, bookId) => {
  const bookAndUserCheck = await checkBookandUser(bookId, userId);
  if (!bookAndUserCheck) throw new CustomError(400, "No existe esta reseña");
  const reviewToDeleteId = bookAndUserCheck.id;

  const result = await db.Review.findByIdAndDelete(reviewToDeleteId);
  return result;
};

const updateReview = async (userId, bookId, content) => {
  const foundBookandUser = await checkBookandUser(bookId, userId);
  if (!foundBookandUser) {
    throw new CustomError(400, "Este usuario no tiene reseñas de este libro");
  }

  foundBookandUser.text = content.text;
  foundBookandUser.rating = content.rating;
  foundBookandUser.date = CURRENT_DATE;
  await foundBookandUser.save();
  return content;
};

const getUserReviews = async (userId) => {
  const userReview = await db.Review.find({ userId: userId }).populate(
    "comments.commentId"
  );
  return userReview.map((element) => ({
    id: element.id,
    bookId: element.bookId,
    userId: element.userId,
    text: element.text,
    rating: element.rating,
    date: element.date,
    likes: element.likes.length,
    comments: element.comments.map(({ commentId }) => commentId),
  }));
};
const getBookReviews = async (bookId) => {
  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new CustomError(400, "Este libro no existe");
  const bookReviews = await db.Review.find({ bookId: bookId }).populate(
    "comments.commentId"
  );
  return bookReviews.map((element) => ({
    id: element.id,
    bookId: element.bookId,
    userId: element.userId,
    text: element.text,
    rating: element.rating,
    date: element.date,
    likes: element.likes.length,
    comments: element.comments.map(({ commentId }) => commentId),
  }));
};

const addLikeToReview = async (bookId, userId, userLikeId) => {
  const foundBookandUser = await checkBookandUser(bookId, userId);
  if (!foundBookandUser) {
    throw new CustomError(400, "Este usuario no tiene reseñas de este libro");
  }
  const userLikeInfo = await db.User.findById(userLikeId).select(
    "username -_id"
  );
  if (!userLikeInfo) throw new CustomError(400, "Este usuario no existe");
  const findUserLike = foundBookandUser.likes.some(
    (user) => user._id.toString() === userLikeId
  );
  if (findUserLike)
    throw new CustomError(400, "Ya le has dado like a esta reseña");
  foundBookandUser.likes.push(userLikeId);
  await foundBookandUser.save();
  return userLikeInfo;
};

const deleteLikeFromReview = async (bookId, userId, userLikeId) => {
  const foundBookandUserReview = await checkBookandUser(bookId, userId);
  if (!foundBookandUserReview) {
    throw new CustomError(400, "Este usuario no tiene reseñas de este libro");
  }

  const findUserLike = foundBookandUserReview.likes.some(
    (user) => user._id.toString() === userLikeId
  );
  if (!findUserLike)
    throw new CustomError(400, "No le has hecho like a esta reseña");

  foundBookandUserReview.likes = foundBookandUserReview.likes.filter(
    (user) => user._id.toString() !== userLikeId
  );
  await foundBookandUserReview.save();
};

//COMMENTS

const addCommentToReview = async (bookId, userId, userCommentId, comment) => {
  const foundBookandUserReview = await checkBookandUser(bookId, userId);
  if (!foundBookandUserReview) {
    throw new CustomError(400, "Este usuario no tiene reseñas de este libro");
  }
  const userLikeInfo = await db.User.findById(userCommentId);
  if (!userLikeInfo) throw new CustomError(400, "Este usuario no existe");

  const foundReviewId = foundBookandUserReview.id;
  const foundComment = await db.Comment.find({ reviewId: foundReviewId });

  //Si el último comentario pertenece al usuario que está intentando agregar otro.
  // La idea es para evitar que el usuario espere que otros usuarios comenten también y no se repita.

  //Otra idea puede ser que se le permite 2 comentarios y esperar por otro usuario
  const isPreviousUserComment = checkPreviousUserComment(
    foundComment,
    userCommentId
  );
  if (isPreviousUserComment)
    throw new CustomError(400, "Debes esperar que los otros usuarios comenten");
  const newComment = await db.Comment.create({
    reviewId: foundReviewId,
    createdBy: userCommentId,
    text: comment,
  });

  foundBookandUserReview.comments.push({
    commentId: newComment.id,
  });

  await foundBookandUserReview.save();
  return newComment;
};

const updateComment = async (
  reviewId,
  userCommentId,
  newComment,
  commentId
) => {
  const foundReview = await db.Review.findById(reviewId);
  if (!foundReview) {
    throw new CustomError(400, "Esta reseña no existe");
  }
  const userLikeInfo = await db.User.findById(userCommentId);
  if (!userLikeInfo) throw new CustomError(400, "Este usuario no existe");

  const findCommentCreator = await db.Comment.findOne({
    createdBy: userCommentId,
    reviewId: foundReview.id,
    _id: commentId,
  });
  if (!findCommentCreator)
    throw new CustomError(400, "Este usuario no tiene comentarios");

  findCommentCreator.text = newComment;
  await findCommentCreator.save();

  return { "nuevo comentario": newComment };
};

const deleteComment = async (reviewId, userCommentId, commentId) => {
  const userLikeInfo = await db.User.findById(userCommentId);
  if (!userLikeInfo) throw new CustomError(400, "Este usuario no existe");
  const foundReviewComment = await db.Comment.findOne({
    createdBy: userCommentId,
    reviewId: reviewId,
    _id: commentId,
  });
  const foundReview = await db.Review.findById(reviewId);
  foundReview.comments = foundReview.comments.filter(
    (comment) =>
      comment.commentId.toHexString() !== foundReviewComment._id.toString()
  );
  await foundReview.save();

  const comment = await db.Comment.find().deleteOne({
    createdBy: userCommentId,
    _id: commentId,
  });
  return;
};

const getUserReviewsComments = async (userCommentId) => {
  const userReviewComments = await db.Comment.find({
    createdBy: userCommentId,
  });
  return userReviewComments;
};

const reviewService = {
  addUserReviewToBook,
  getUserReviews,
  getBookReviews,
  updateReview,
  deleteUserReview,
  addLikeToReview,
  deleteLikeFromReview,
  addCommentToReview,
  updateComment,
  deleteComment,
  getUserReviewsComments,
};

export default reviewService;
