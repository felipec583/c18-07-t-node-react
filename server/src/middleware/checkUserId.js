import db from "../models/index.js";

const checkUserId = async (req, res, next) => {
  let userId;
  if (req.body.userId) userId = req.body.userId;
  if (req.params.id) userId = req.params.id;
  const findId = await db.User.findById(userId);
  if (findId) return next();
  else {
    return res.status(404).json({ message: "Este usuario no existe" });
  }
};

export default checkUserId;
