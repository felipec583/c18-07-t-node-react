import reviewService from "../services/review.service.js";

const addUserReviewToBook = async (req, res, next) => {
  try {
    const { bookId, userId, ...content } = req.body;
    const review = await reviewService.addUserReviewToBook(userId, bookId, content);
    return res.status(200).json({ review: review });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const reviewController = {
  addUserReviewToBook,
};

export default reviewController;
