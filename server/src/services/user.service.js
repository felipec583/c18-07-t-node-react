import db from "../models/index.js";

const addBookToUserLibrary = async (bookId, userId) => {
  const foundUser = db.User.findById(userId);
  if (!foundUser) throw new Error("user not found");

  const foundBook = db.Book.findById(bookId);
  if (!foundBook) throw new Error("book not found");

  const foundBookId = foundBook.select("_id");
  const existingBook = foundUser.select("library -_id").find({
    library: {
      bookId: foundBookId,
    },
  });

  return existingBook;
};

const userService = {
  addBookToUserLibrary,
};

export default userService;
