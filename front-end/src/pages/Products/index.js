import React from 'react';

const Products = () => (
  <p>This is the orders page</p>
);
export default Products;

/* import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import * as api from '../../api';

function totalValue() {
  const storage = localStorage.cartItens;
  if (storage.length > 0) {
    const valor = storage.map((ele) => ele.price * ele.quantity);
    const final = valor.reduce((final, numero) => final + numero, 0);
    return final;
  }
  return 0;
}

// chakra simpleGrid
function Products() {
  const [products, setProducts] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

  useEffect(() => {
    if (!localStorage.cartItens) localStorage.cartItens = JSON.stringify([]);

    api.listProducts().then((response) => {
      setProducts(response.data);
    })
      .catch(() => 'um erro ocorreu');

    setCartValue(totalValue().toLocalString('pt-BR', formato));
  }, []);

  return (
    <div>
      <p>This is the products page</p>
      {products.map((ele) => <ProductCard data={ ele } key={ ele.id } />)}
      <Link to="/checkout">
        <button type="button" data-testid="checkout-bottom-btn">
          Ver carrinho
        </button>
      </Link>
    <span data-testid="checkout-bottom-btn-value">{cartValue.toLocalString('pt-BR', formato)}</span>
    </div>
  );
}
export default Products;

// logica
// receber a list de produtos
// renderizar um card p/ cada produto
// botao ver carrinho fixo e com valor da compra
// criar localstorage pra itens
 */
