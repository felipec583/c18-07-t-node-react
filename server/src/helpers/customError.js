export default class CustomError extends Error {
  constructor(statusCode, message, details) {
    super((message = message || "Datos invalidos"));
    (this.statusCode = statusCode),
      (this.details = { success: false, ...details });
    Error.captureStackTrace(this, this.constructor);
  }
}
