import userService from "../services/user.service.js";

const addBookToUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { bookId } = req.body;

    if (!bookId) return res.status(400).json({
      success: false,
      message: "book is null"
    });

    const response = await userService.addBookToUserLibrary(
      bookId,
      id
    );

    return res.status(200).json({
      success: true,
      response: response
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBookFromUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const { bookId } = req.body;

    const response = await userService.deleteBookFromUserLibrary(
      bookId,
      id
    );
    return res.status(200).json({
      success: true,
      response: response
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserLibrary = async (req, res, next) => {
  try {
    const { id } = req.credentials;
    const response = await userService.getUserLibrary(id);
    return res.status(200).json({
      success: true,
      response: response
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const userController = {
  addBookToUserLibrary,
  getUserLibrary,
  deleteBookFromUserLibrary,
};

export default userController;
