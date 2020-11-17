const yup = require('yup');

const schema = yup.object().shape({
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

module.exports = { schema };
