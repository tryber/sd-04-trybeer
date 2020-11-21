const NAME_PATTERN = /^[a-zA-Z]+$/;
const EMAIL_PATTERN = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
const PASS_LENGTH = 6;

const LENGTH = 12;
const registerValidation = (name, email, pass) => (
  name.length < LENGTH || pass === ' ' || !NAME_PATTERN.test(name) || !EMAIL_PATTERN.test(email)
);

module.exports = {
  NAME_PATTERN,
  EMAIL_PATTERN,
  PASS_LENGTH,
  registerValidation,
};
