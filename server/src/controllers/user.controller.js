import userService from "../services/user.service.js";

const addBookToUserLibrary = async (req, res, next) => {
  try {
    const { bookId, userId } = req.body;
    const addBookToLibrary = await userService.addBookToUserLibrary(
      bookId,
      userId
    );
    return res.status(200).json(addBookToLibrary);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBookFromUserLibrary = async (req, res, next) => {
  try {
    const { bookId, userId } = req.body;
    const deletedBook = await userService.deleteBookFromUserLibrary(
      bookId,
      userId
    );
    return res.status(200).json({ message: `${deletedBook}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const library = await userService.getUserLibrary(id);
    return res.status(200).json(library);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const userController = {
  addBookToUserLibrary,
  getUserLibrary,
  deleteBookFromUserLibrary,
};

export default userController;