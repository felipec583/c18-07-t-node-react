import bookService from "../services/book.service.js";

const createBook = async (req, res, next) => {
  try {
    const book = req.body;
    const newBook = await bookService.createBook(book);
    return res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const addNewAuthor = async (req, res, next) => {
  try {
    const author = req.body;
    const newAuthor = await bookService.addNewAuthor(author);
    return res.status(200).json(newAuthor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const addNewGenre = async (req, res, next) => {
  try {
    const genre = req.body;
    const newGenre = await bookService.addNewGenre(genre);
    return res.status(200).json(newGenre);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

const bookController = {
  createBook,
  addNewAuthor,
  addNewGenre,
  getAllBooks,
  getBookById,
};

export default bookController;
