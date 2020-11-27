// Funções usadas para facilitar o gerenciamento de dados no local storage,
// ajudam a obter e setar os dados sem se preocupar com conversões
export const getLS = (key) => JSON.parse(localStorage.getItem(key));

export const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const pdtName = (productId) => {
  // Conversão para contornar a loucura dos magic numbers do CC
  productId = String(productId);
  let productName = '';

  switch (productId) {
    case '1':
      productName = 'Skol Lata 250ml';
      break;

    case '2':
      productName = 'Heineken 600ml';
      break;

    case '3':
      productName = 'Antarctica Pilsen 300ml';
      break;

    case '4':
      productName = 'Brahma 600ml';
      break;

    case '5':
      productName = 'Skol 269ml';
      break;

    case '6':
      productName = 'Skol Beats Senses 313ml';
      break;

    case '7':
      productName = 'Becks 330ml';
      break;

    case '8':
      productName = 'Brahma Duplo Malte 350ml';
      break;

    case '9':
      productName = 'Becks 600ml';
      break;

    case '10':
      productName = 'Skol Beats Senses 269ml';
      break;

    case '11':
      productName = 'Stella Artois 275ml';
      break;

    default:
      productName = '';
      break;
  }
  return productName;
};
