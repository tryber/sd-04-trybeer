import Joi from 'joi';

const magicNumber = 6;

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(magicNumber).required(),
});

export const validateLogin = (email, password) => loginSchema.validate({ email, password });

export const placeholder = () => {};
