import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../../context';

import './styles.css';

const ProductsCard = ({ id, testid, name, price, img, qtd, setProducts }) => {
  const { totalCarrinho, seTotalCarrinho } = useContext(Context);

  const setProductList = (productList) => {
    localStorage.setItem('products', JSON.stringify(productList));
    setProducts([...productList]);
  };

  const decrementValue = () => {
    const productList = JSON.parse(localStorage.getItem('products'));
    const indice = productList.findIndex((item) => item.id === id);
    if (productList[indice].quantity > 0) {
      productList[indice].quantity -= 1;
    }
    seTotalCarrinho(() => totalCarrinho - price);
    setProductList(productList);
  };

  const incrementValue = () => {
    const productList = JSON.parse(localStorage.getItem('products'));
    const indice = productList.findIndex((item) => item.id === id);
    productList[indice].quantity += 1;
    seTotalCarrinho(() => totalCarrinho + price);
    localStorage.setItem('totalCarrinho', totalCarrinho + price);
    setProductList(productList);
  };

  return (
    <div className="card-body" id={id}>
      <span data-testid={ `${testid}-product-price` }>
        {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </span>
      <img src={img} alt="Aqui vai uma imagem" data-testid={ `${testid}-product-img` } />
      <span className="product-title" data-testid={ `${testid}-product-name` }>{name}</span>
      <div className="product-card-panel">
        <button onClick={decrementValue} type="button" data-testid={ `${testid}-product-minus` }>-</button>
        <span data-testid={ `${testid}-product-qtd` }>{qtd}</span>
        <button onClick={incrementValue} type="button" data-testid={ `${testid}-product-plus` }>+</button>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  testid: PropTypes.number.isRequired,
};

export default ProductsCard;
