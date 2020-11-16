const yup = require('yup');

let schema = yup.object().shape({
  // nome - deve conter, no mínimo, 12 letras, sem números ou caracteres especiais;
  signName: yup
    .string()
    .min(12, 'O nome deve conter pelo menos 12 letras')
    .matches(/^([a-zA-Z ])*$/gmi, 'O Nome deve conter somente letras')
    .required(),

  // email - deve conter um email válido. Um email válido possui o formato <nome>@<domínio>;  
  signEmail: yup
    .string()
    .email('O email deve ter o formato nome@domínio.com')
    .required(),

  // senha - composta por, no mínimo, 6 números;
  signPassword: yup
    .string()
    .min(6, 'A senha deve conter pelo menos 6 números')
    .required(),
});

// "Testes" de validação com console.log
/*
let userTest = {
  signName: 'brunobatista',
  signEmail: 'email@gmail.com',
  signPassword: '1234567',
};

schema.validate(userTest)
  .then(function (valid) {
    valid;
    console.log('Validação: ', valid)})
  .catch(function (err) {
    console.log('Erro de validação: ', err);
  });
*/

module.exports = { schema };
