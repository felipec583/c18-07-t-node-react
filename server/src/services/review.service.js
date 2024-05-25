import { CURRENT_DATE } from "../config/constants.js";
import db from "../models/index.js";
import checkBookandUser from "../utils/checkBookandUser.js";
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
  throw new Error("Ya has hecho una reseña a este libro");
};

const deleteUserReview = async (userId, bookId) => {
  const bookAndUserCheck = await checkBookandUser(bookId, userId);
  if (!bookAndUserCheck) throw new Error("No existe esta reseña");
  const reviewToDeleteId = bookAndUserCheck.id;

  const result = await db.Review.findByIdAndDelete(reviewToDeleteId);
  return result;
};

const updateReview = async (userId, bookId, content) => {
  const foundBookandUser = await checkBookandUser(bookId, userId);
  if (!foundBookandUser) {
    throw new Error("Este usuario no tiene reseñas de este libro");
  }

  foundBookandUser.text = content.text;
  foundBookandUser.rating = content.rating;
  foundBookandUser.date = CURRENT_DATE;
  await foundBookandUser.save();
  return content;
};

const getUserReviews = async (userId) => {
  const userReview = await db.Review.find({ userId: userId });
  return userReview;
};

const getBookReviews = async (bookId) => {
  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("Este libro no existe");
  const bookReviews = await db.Review.find({ bookId: bookId });
  return bookReviews;
};

const addLikeToReview = async (bookId, userId, userLikeId) => {
  const foundBookandUser = await checkBookandUser(bookId, userId);
  if (!foundBookandUser) {
    throw new Error("Este usuario no tiene reseñas de este libro");
  }
  const findUserLike = foundBookandUser.likes.some(
    (user) => user._id.toString() === userLikeId
  );
  if (findUserLike) throw new Error("Ya le has dado like a esta reseña");
  const userLikeInfo = await db.User.findById(userLikeId).select(
    "username -_id"
  );
  if (!userLikeInfo) throw new Error("Este usuario no existe");
  foundBookandUser.likes.push(userLikeId);
  await foundBookandUser.save();
  return userLikeInfo;
};

const deleteLikeFromReview = async () => {};

const reviewService = {
  addUserReviewToBook,
  getUserReviews,
  getBookReviews,
  updateReview,
  deleteUserReview,
  addLikeToReview,
};

export default reviewService;
