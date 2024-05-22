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
    console.log(error);
  }
};

const userController = {
  addBookToUserLibrary,
};

export default userController;
