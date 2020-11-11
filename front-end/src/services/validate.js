import Joi from 'joi';

const magicNumber = 6;

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(magicNumber).required(),
});

const formSchema = Joi.object({
   name: Joi
    .string()
    .regex(/^[a-zA-Z\u00C0-\u00FF\s]+$/)
    .min(12)
    .required(),
  
  email: Joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  
  password: Joi
    .string()
    .min(6)
    .required(),
});


export const validateLogin = (email, password) => loginSchema.validate({ email, password });

export const placeholder = () => {};

export const formValidate = (form) => {
  const { name, email, password } = form;
  const isValid = formSchema.validate({ name, email, password });
  if(isValid.error) return isValid.error.message
  else return true
};
