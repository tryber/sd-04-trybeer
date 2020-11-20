function productNameDefinition(productId) {
  let productName = '';
  switch (productId) {
    case 1:
      productName = 'Skol Lata 250ml';
      break;

    case 2:
      productName = 'Heineken 600ml';
      break;

    case 3:
      productName = 'Heineken 600ml';
      break;

    case 4:
      productName = 'Antarctica Pilsen 300ml';
      break;

    case 5:
      productName = 'Brahma 600ml';
      break;

    case 6:
      productName = 'Skol 269ml';
      break;

    case 7:
      productName = 'Skol Beats Senses 313ml';
      break;

    case 8:
      productName = 'Becks 330ml';
      break;

    case 9:
      productName = 'Brahma Duplo Malte 350ml';
      break;

    case 10:
      productName = 'Becks 600ml';
      break;

    case 11:
      productName = 'Skol Beats Senses 269ml';
      break;

    default:
      productName = '';
      break;
  }
  return productName;
}

export default productNameDefinition;
