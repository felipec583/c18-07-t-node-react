import db from "../models/index.js";
const addBookToUserLibrary = async (bookId, userId) => {
  const foundUser = await db.User.findById(userId);

  const foundBook = await db.Book.findById(bookId);
  if (!foundBook) throw new Error("Este libro no existe");

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
  const has = user.list.some(el => el.listname == name)
  if (has) throw new Error("Ya existe una lista con ese nombre")
  const newList = user.list.create({
    creationDate: Date.now(),
    listname: name,
    booklist: []
  })
  user.list.push(newList)
  const newData = await user.save()
  return { added: newList, userList: newData.list }
}

const userService = {
  addBookToUserLibrary,
  deleteBookFromUserLibrary,
  getUserLibrary,
  createUserList
};

export default userService;