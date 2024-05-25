import reviewService from "../services/review.service.js";

const getUserReviews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userReviews = await reviewService.getUserReviews(id);
    return res.status(200).json(userReviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getBookReviews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookReviews = await reviewService.getBookReviews(id);
    return res.status(200).json(bookReviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addUserReviewToBook = async (req, res, next) => {
  try {
    const { bookId, userId, ...content } = req.body;
    const review = await reviewService.addUserReviewToBook(
      userId,
      bookId,
      content
    );
    return res.status(200).json({ review: review });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { userId, bookId, ...content } = req.body;
    const updatedReview = await reviewService.updateReview(
      userId,
      bookId,
      content
    );
    return res.status(200).json({ message: updatedReview });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUserReview = async (req, res, next) => {
  try {
    const { userId, bookId } = req.body;
    const deletedReview = await reviewService.deleteUserReview(userId, bookId);
    return res.status(200).json({ message: deletedReview });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addLikeToReview = async (req, res, next) => {
  try {
    const { bookId, userId, userLikeId } = req.body;
    const addedLikeUser = await reviewService.addLikeToReview(
      bookId,
      userId,
      userLikeId
    );
    return res.status(200).json({ message: `Un like de ${addedLikeUser?.username}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const reviewController = {
  addUserReviewToBook,
  getUserReviews,
  getBookReviews,
  updateReview,
  deleteUserReview,
  addLikeToReview,
};

export default reviewController;
