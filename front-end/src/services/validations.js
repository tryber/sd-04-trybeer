const joi = require('joi');

const formSchema = joi.object({
  name: joi.string(),
  
  email:joi.string(),
  
  password:joi.number(),
});

export const formValidate = (form) => {
  const { name, email, password } = form;
  const isValid = formSchema.validate({ name, email, password });
  if(isValid.error) return isValid.error.message
  else return true
};
