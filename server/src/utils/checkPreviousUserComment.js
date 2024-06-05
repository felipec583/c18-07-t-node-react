const checkPreviousUserComment = (comments, userId) => {
  if (comments.length < 2) {
    return false;
  }

  const lastComment = comments[comments.length - 1];
  const secondLastComment = comments[comments.length - 2];

  return (
    lastComment.createdBy.toHexString() === userId &&
    secondLastComment.createdBy.toHexString() === userId
  );
};

export default checkPreviousUserComment