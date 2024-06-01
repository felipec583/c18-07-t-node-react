import searchService from "../services/search.service.js";

const search = async (req, res, next) => {
  try {
    const response = await searchService.search(req.query)
    return res.status(200).json({
      success: true,
      response
    })
  } catch (err) {
    // cambiar esto por el custom error mas adelante
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

const getBooksFromAuthorId = async (req, res, next) => {
  try {
    const response = await searchService.getBooksFromAuthorId(req.query)
    return res.status(200).json({
      success: true,
      response
    })
  } catch (err) {
    // cambiar esto por el custom error mas adelante
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

const getBooksFromGenreId = async (req, res, next) => {
  try {
    const response = await searchService.getBooksFromGenreId(req.query)
    return res.status(200).json({
      success: true,
      response
    })
  } catch (err) {
    // cambiar esto por el custom error mas adelante
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

const searchController = {
  search,
  getBooksFromAuthorId,
  getBooksFromGenreId
}

export default searchController