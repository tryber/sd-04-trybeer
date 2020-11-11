import Joi from 'joi';

const magicNumber = 6;

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(magicNumber).required(),
});

const formSchema = Joi.object({
  name: Joi.string(),
  
  email:Joi.string(),
  
  password:Joi.number(),
});


export const validateLogin = (email, password) => loginSchema.validate({ email, password });

export const placeholder = () => {};

export const formValidate = (form) => {
  const { name, email, password } = form;
  const isValid = formSchema.validate({ name, email, password });
  if(isValid.error) return isValid.error.message
  else return true
};
