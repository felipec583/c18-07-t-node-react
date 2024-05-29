import reviewService from "../services/review.service.js";

const getUserReviews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userReviews = await reviewService.getUserReviews(id);
    return res.status(200).json(userReviews);
  } catch (error) {
    next(error);
  }
};

const getBookReviews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookReviews = await reviewService.getBookReviews(id);
    return res.status(200).json(bookReviews);
  } catch (error) {
    next(error);
  }
};

const addUserReviewToBook = async (req, res, next) => {
  try {
    const { bookId, ...content } = req.body;
    const { id } = req.credentials;
    const review = await reviewService.addUserReviewToBook(id, bookId, content);
    return res.status(200).json({ review: review });
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { bookId, ...content } = req.body;
    const { id } = req.credentials;
    const updatedReview = await reviewService.updateReview(id, bookId, content);
    return res.status(200).json({ message: updatedReview });
  } catch (error) {
    next(error);
  }
};

const deleteUserReview = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const { id } = req.credentials;
    const deletedReview = await reviewService.deleteUserReview(id, bookId);
    return res.status(200).json({ message: deletedReview });
  } catch (error) {
    next(error);
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
    next(error);
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
    next(error);
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
    next(error);
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
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { reviewId, commentId } = req.body;
    const { id } = req.credentials;
    await reviewService.deleteComment(reviewId, id, commentId);
    return res.status(200).json({ message: "Comentario eliminado" });
  } catch (error) {
    next(error);
  }
};

const getUserReviewsComments = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userComments = await reviewService.getUserReviewsComments(id);
    return res.status(200).json(userComments);
  } catch (error) {
    next(error);
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
