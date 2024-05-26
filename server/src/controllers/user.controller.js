import userService from "../services/user.service.js";

const addBookToUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { bookId } = req.body;
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
    return res.status(201).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const addBookToUserList = async (req, res, next) => {
  try {
    const { listId, bookId } = req.params
    const { id } = req.credentials
    const response = await userService.addBookToUserList(id, listId, bookId)
    return res.status(200).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const deleteUserListFromListId = async (req, res, next) => {
  try {
    const { listId } = req.params
    const { id } = req.credentials
    const response = await userService.deleteUserListFromListId(id, listId)
    return res.status(200).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const deleteBookFromListId = async (req, res, next) => {
  try {
    const { listId, bookId } = req.params
    const { id } = req.credentials
    const response = await userService.deleteBookFromListId(id, listId, bookId)
    return res.status(200).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const changeListNameFromListId = async (req, res, next) => {
  try {
    const { listId, newName } = req.params
    const { id } = req.credentials
    const response = await userService.changeListNameFromListId(id, listId, newName)
    return res.status(200).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const getUserList = async (req, res, next) => {
  try {
    const { userId } = req.params
    const { listId } = req.query
    const response = await userService.getUserList(userId, listId)
    return res.status(200).json({ success: true, response })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

const userController = {
  addBookToUserLibrary,
  getUserLibrary,
  deleteBookFromUserLibrary,
  addBookToUserList,
  createUserList,
  deleteUserListFromListId,
  deleteBookFromListId,
  changeListNameFromListId,
  getUserList
};

export default userController;