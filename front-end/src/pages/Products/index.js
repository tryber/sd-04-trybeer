import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { listProducts } from '../../api';
import { ProductContext } from '../../context';

function Products() {
  const { cartValue } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) history.push('/login');
    if (!localStorage.cartItens) localStorage.cartItens = JSON.stringify([]);
    listProducts().then((response) => {
      setProducts(response.data);
    })
      .catch(() => 'um erro ocorreu');
  }, [history]);

  return (
    <div>
      <p>This is the products page</p>
      {products ? products.map((e) => <ProductCard data={ e } key={ e.id } />) : <p>loading</p>}
      <Link to="/checkout">
        <button type="button" data-testid="checkout-bottom-btn">
          Ver carrinho
        </button>
      </Link>
      <span data-testid="checkout-bottom-btn-value">{cartValue}</span>
    </div>
  );
}
export default Products;

// logica
// receber a list de produtos
// renderizar um card p/ cada produto
// botao ver carrinho fixo e com valor da compra
// criar localstorage pra itens
