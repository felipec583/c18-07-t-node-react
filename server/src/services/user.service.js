import db from "../models/index.js";
import CustomError from "../helpers/customError.js";

const addBookToUserLibrary = async (bookId, userId) => {
  const foundUser = await db.User.findById(userId);

  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new CustomError(400, "Este libro no existe");

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
    throw new CustomError(400, "Este libro ya existe en la biblioteca");
  }
};

const deleteBookFromUserLibrary = async (bookId, userId) => {
  const foundBook = await db.Book.findById(bookId);
  const foundUser = await db.User.findById(userId);
  if (!foundBook) throw new CustomError(400, "Este libro no existe");

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
    select: "publishDate description title image",
  });
  return userLibrary.library.map(({ book, addedDate }) => ({
    _id: book._id,
    title: book.title,
    publishDate: book.publishDate,
    author: book.author.name,
    genres: book.genres.map(({ genre }) => genre.genre),
    description: book.description,
    image: book.image,
    addedDate,
  }));
};

const createUserList = async (userId, name) => {
  const user = await db.User.findById(userId);
  const has = user.list.some((el) => el.listname == name);
  if (has) throw new CustomError(400, "Ya existe una lista con ese nombre");
  const newList = user.list.create({
    creationDate: Date.now(),
    listname: name,
    booklist: [],
  });
  user.list.push(newList);
  const newData = await user.save();
  return { added: newList, userList: newData.list };
};

const addBookToUserList = async (userId, listId, bookId) => {
  const user = await db.User.findById(userId);
  const index = user.list.findIndex((el) => el.id == listId);
  if (index < 0) throw new CustomError(400, "No se encontro esa lista");

  const targetList = user.list[index];
  const hasBook = targetList.booklist.some((el) => el.book == bookId);
  if (hasBook)
    throw new CustomError(400, "Ese libro ya se encuentra en la lista");

  const newBookListed = targetList.booklist.create({
    addedDate: Date.now(),
    book: bookId,
  });

  targetList.booklist.push(newBookListed);
  await user.save();
  return { list: targetList, totalList: user.list };
};

const deleteUserListFromListId = async (userId, listId) => {
  const user = await db.User.findById(userId);
  const deleted = user.list.find((el) => el.id == listId);
  const filterList = user.list.filter((el) => el.id != listId);
  user.list = filterList;

  await user.save();
  return { new: filterList, deleted: deleted };
};

const deleteBookFromListId = async (userId, listId, bookId) => {
  const user = await db.User.findById(userId);
  const index = user.list.findIndex((el) => el.id == listId);
  if (index < 0) throw new CustomError(400, "No se encontro la lista");

  const filter = user.list[index].booklist.filter((el) => el.id != bookId);
  user.list[index].booklist = filter;

  await user.save();
  return { new: filter, totalList: user.list };
};

const changeListNameFromListId = async (userId, listId, newName) => {
  const user = await db.User.findById(userId);
  const index = user.list.findIndex((el) => el.id == listId);
  if (index < 0) throw new CustomError(400, "No se encontro la lista");

  user.list[index].listname = newName;
  await user.save();

  return { new: user.list[index], totalList: user.list };
};

const getUserList = async (userId, listId) => {
  const user = await db.User.findById(userId);
  if (!listId) return { list: user.list };

  return { list: user.list.find((el) => el.id == listId) };
};

const userService = {
  addBookToUserLibrary,
  deleteBookFromUserLibrary,
  getUserLibrary,
  createUserList,
  addBookToUserList,
  deleteUserListFromListId,
  deleteBookFromListId,
  changeListNameFromListId,
  getUserList,
};

export default userService;
