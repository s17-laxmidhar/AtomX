exports.validationRequestQueryMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
  
exports.validationRequestBodyMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'Validation error', details: error.details });
    }
    next();
  };