import db from "../models/index.js";
const addBookToUserLibrary = async (bookId, userId) => {
  const foundUser = await db.User.findById(userId);

  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("book not found");

  const existingBook = foundUser.library.some(
    (el) => el.book.toHexString() === bookId
  );

  if (!existingBook) {
    foundUser.library.push({
      book: bookId,
    });
    await foundUser.save();
    return { "nuevo libro": foundBook.title };
  } else {
    throw new Error("Este libro ya existe en la biblioteca");
  }
};

const deleteBookFromUserLibrary = async (bookId, userId) => {
  const foundBook = await db.Book.findById(bookId);
  const foundUser = await db.User.findById(userId);
  if (!foundBook) throw new Error("book not found");

  const existingBook = foundUser.library.some(
    (el) => el.book.toHexString() === bookId
  );
  if (existingBook) {
    foundUser.library = foundUser.library.filter(
      (el) => el.book.toHexString() !== bookId
    );
    await foundUser.save();
    return foundBook.title;
  } else {
    return "Este libro no existe en tu biblioteca";
  }
};

const getUserLibrary = async (userId) => {
  const user = db.User.findById(userId);
  const userLibrary = await user.select("library -_id").populate({
    path: "library.book",
    populate: {
      path: "author genres.genre",
      select: "name -_id genre",
    },
    select: "publishDate description title",
  });
  return userLibrary.library.map(({ book }) => ({
    _id: book._id,
    title: book.title,
    publishDate: book.publishDate,
    author: book.author.name,
    genres: book.genres.map(({ genre }) => genre),
    description: book.description,
  }));
};

const userService = {
  addBookToUserLibrary,
  deleteBookFromUserLibrary,
  getUserLibrary,
};

export default userService;