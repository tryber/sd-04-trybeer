import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../../components/ProductCard';
import { listProducts } from '../../api';
import { ProductContext } from '../../context';

function Products() {
  const { cartValue } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.cartItens) localStorage.cartItens = JSON.stringify([]);

    listProducts().then((response) => {
      setProducts(response.data);
    })
      .catch(() => 'um erro ocorreu');
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
