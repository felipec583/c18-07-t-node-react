import db from "../models/index.js";

const checkBookandUser = async (bookId, userId) => {
  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("book not found");

  const findUserAndBook = await db.Review.findOne({
    bookId: bookId,
    userId: userId,
  });

  return findUserAndBook;
};

export default checkBookandUser;
