import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

export const validateLogin = (email, password) => loginSchema.validate({ email, password });


