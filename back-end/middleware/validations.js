const joi = require('joi');

const loginSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),

  password: joi.string().min(6).required(),
});

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const result = loginSchema.validate({ email, password });
  if (result.error) throw result;
  next();
};
module.exports = { loginValidation };
