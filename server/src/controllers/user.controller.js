import userService from "../services/user.service.js";

const addBookToUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { bookId, userId } = req.body;
    const addBookToLibrary = await userService.addBookToUserLibrary(
      bookId,
      id
    );
    return res.status(200).json(addBookToLibrary);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBookFromUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { bookId } = req.body;
    const deletedBook = await userService.deleteBookFromUserLibrary(
      bookId,
      id
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

const createUserList = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { listname } = req.body;
    const response = await userService.createUserList(id, listname)
    if (response) {
      return res.status(201).json({ success: true, response })
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const userController = {
  addBookToUserLibrary,
  getUserLibrary,
  deleteBookFromUserLibrary,
  createUserList
};

export default userController;