import CustomError from "../helpers/customError.js";

const notFoundHandler = async (req, res, next) => {
  try {
    throw new CustomError(404, "Esta ruta no existe", {
      ruta: req.originalUrl,
    });
  } catch (error) {
    next(error);
  }
};

export default notFoundHandler;
