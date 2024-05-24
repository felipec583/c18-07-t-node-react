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
const reviewService = {
  addUserReviewToBook,
};

export default reviewService;
