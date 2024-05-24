import { CURRENT_DATE } from "../config/constants.js";
import db from "../models/index.js";

const addUserReviewToBook = async (userId, bookId, content) => {
  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("book not found");

  // verify that the book does not have a review from that user

  const findUserAndBook = await db.Review.findOne({
    bookId: bookId,
    userId: userId,
  });

  if (!findUserAndBook) {
    const newReview = await db.Review.create({
      userId,
      bookId,
      ...content,
    });

    return newReview;
  }
  throw new Error("Ya has hecho una reseña a este libro");
};

/* const deleteUserReview = async () => {}; */

const updateReview = async (userId, bookId, content) => {
  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("book not found");

  const findUserAndBook = await db.Review.findOne({
    bookId: bookId,
    userId: userId,
  });
  if (!findUserAndBook) {
    throw new Error("Este usuario no tiene reseñas de este libro");
  }

  findUserAndBook.text = content.text;
  findUserAndBook.rating = content.rating;
  findUserAndBook.date = CURRENT_DATE;
  await findUserAndBook.save();
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

const reviewService = {
  addUserReviewToBook,
  getUserReviews,
  getBookReviews,
  updateReview,
};

export default reviewService;
