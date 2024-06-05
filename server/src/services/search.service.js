import db from "../models/index.js";

const search = async (query) => {
  // /api/search?q=emma&limit=25&type=author
  const { q, limit, offset, page, type } = query
  const regex = { $regex: new RegExp('^' + q), $options: "i" }
  const options = {
    limit: limit || 20,
    page: page || 1,
  }
  if (type == "author") {
    return await db.Author.paginate({ "name": regex }, options)
  } else if (type == "genre") {
    return await db.Genre.paginate({ "genre": regex }, options)
  } else if (type == "book") { // book
    return await db.Book.paginate({ "title": regex }, { ...options, populate: ["author", "genres.genre"] })
  } else {
    throw new Error("query: 'type' not allowed")
  }
}

const getBooksFromGenreId = async (query) => {
  const { id, limit, offset, page } = query
  const options = {
    limit: limit || 20,
    page: page || 0,
  }
  return await db.Book.paginate({ "genre": id }, { ...options, populate: ["author", "genres.genre"] })
}

const getBooksFromAuthorId = async (query) => {
  const { id, limit, offset, page } = query
  const options = {
    limit: limit || 20,
    page: page || 0,
  }
  return await db.Book.paginate({ "author ": id }, { ...options, populate: ["author", "genres.genre"] })
}

const searchService = {
  search,
  getBooksFromGenreId,
  getBooksFromAuthorId
}

export default searchService