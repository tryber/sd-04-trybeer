import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Menu from '../components/Menu';
// import ProductCards from '../components/ProductCards';

const Produtos = () => {
  const [products, setProducts] = useState(null);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);

  const removeProduct = (product) => {
    let newCart = cart.filter((item) => item.name !== product.name);
    setCart(newCart);
  };

  return (
    <div>
      <Menu title="TryBeer" />
      {products &&
        products.map((product, index) => (
          <div key={product.name}>
            <p data-testid={`${index}-product-name`}>{product.name}</p>
            <p
              data-testid={`${index}-product-price`}
            >{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</p>
            <img
              data-testid={`${index}-product-img`}
              alt=""
              src={product.urlImage}
              width="100px"
            />
            <button
              type="button"
              data-testid={`${index}-product-minus`}
              onClick={() => removeProduct(product)}
            >
              -
            </button>
            <p type="button" data-testid={`${index}-product-qtd`}>
              0
            </p>
            <button
              type="button"
              data-testid={`${index}-product-plus`}
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </div>
        ))}
      <div>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-bottom-btn">
            Ver Carrinho
          </button>
        </Link>
        <p data-testid="checkout-bottom-btn-value">0</p>
      </div>
    </div>
  );
};

export default Produtos;
