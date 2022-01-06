export function validatorBody(schema) {
  return async (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res
        .status(404)
        .json({ success: false, message: result.error.message });
    }
    return next();
  };
}
