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
    const { bookId, ...content } = req.body;
    const { id } = req.credentials;
    const review = await reviewService.addUserReviewToBook(id, bookId, content);
    return res.status(200).json({ review: review });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { bookId, ...content } = req.body;
    const { id } = req.credentials;
    const updatedReview = await reviewService.updateReview(id, bookId, content);
    return res.status(200).json({ message: updatedReview });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUserReview = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const { id } = req.credentials;
    const deletedReview = await reviewService.deleteUserReview(id, bookId);
    return res.status(200).json({ message: deletedReview });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* LIKES */

const addLikeToReview = async (req, res, next) => {
  try {
    const { bookId, userId } = req.body;
    // el id del usuario que agregará el like
    const { id } = req.credentials;
    const addedLikeUser = await reviewService.addLikeToReview(
      bookId,
      userId,
      id
    );
    return res
      .status(200)
      .json({ message: `Un like de ${addedLikeUser?.username}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteLikeFromReview = async (req, res, next) => {
  try {
    const { bookId, userId } = req.body;
    // el id del usuario que eliminará el like
    const { id } = req.credentials;
    await reviewService.deleteLikeFromReview(bookId, userId, id);
    return res.status(200).json({ message: `Like eliminado` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/****************** COMMENTS *******************/

const addCommentToReview = async (req, res, next) => {
  try {
    const { bookId, userId, comment } = req.body;
    // el id del usuario que agregará comentario
    const { id } = req.credentials;
    const newComment = await reviewService.addCommentToReview(
      bookId,
      userId,
      id,
      comment
    );

    return res.status(200).json({ message: newComment });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateComment = async (req, res, next) => {
  try {
    const { reviewId, commentId, comment } = req.body;
    const { id } = req.credentials;
    const updatedComment = await reviewService.updateComment(
      reviewId,
      id,
      comment,
      commentId
    );
    return res.status(200).json({ ...updatedComment });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { reviewId, commentId } = req.body;
    const { id } = req.credentials;
    await reviewService.deleteComment(reviewId, id, commentId);
    return res.status(200).json({ message: "Comentario eliminado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserReviewsComments = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userComments = await reviewService.getUserReviewsComments(id);
    return res.status(200).json(userComments);
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
  deleteLikeFromReview,
  addCommentToReview,
  updateComment,
  deleteComment,
  getUserReviewsComments,
};

export default reviewController;
