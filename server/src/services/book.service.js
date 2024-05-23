import db from "../models/index.js";

const createBook = async (book) => {
  const newBook = await db.Book.create({
    ...book,
  });
  return newBook;
};

const getAllBooks = async () => {
  try {
    const getBooks = await db.Book.find()
      .populate({
        path: "author",
        select: "name",
      })
      .populate("genres.genre")
      .exec();
    return getBooks;
  } catch (error) {
    throw error.errmsg;
  }
};

const getBookById = async (id) => {
  const getBook = await db.Book.findById(id)
    .populate("author")
    .populate("genres.genre");
  if (!getBook) throw new Error("No existe");
  return getBook;
};

const addNewAuthor = async (author) => {
  try {
    const newAuthor = await db.Author.create({
      ...author,
    });
    return newAuthor;
  } catch (error) {
    throw error.errmsg;
  }
};

const addNewGenre = async (genre) => {
  try {
    const newGenre = await db.Genre.create({
      ...genre,
    });
    return newGenre;
  } catch (error) {
    throw error.errmsg;
  }
};

const bookService = {
  createBook,
  addNewAuthor,
  addNewGenre,
  getAllBooks,
  getBookById,
};

export default bookService;
