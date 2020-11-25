import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../../context';

// funcao de remocao do produto
function handleClick(id, productsList, setProductsList) {
  // retira o produto da lista de produtos
  const newStorage = productsList.filter((ele) => ele.id !== id);
  // atualiza a lista de prodtos
  setProductsList(newStorage);
  // remove a div do produto
  document.getElementById(`${id}`).remove();
}

export default function CheckoutCard(data) {
  // chama o contex para atualizar o valor do carrinho
  const { setCartValue, totalValue } = useContext(ProductContext);
  // cria um estado local pra armazenar a lista de produtos
  const [productsList, setProductsList] = useState([]);
  // dados recebidos de props
  const {
    name, price, quantity, id,
  } = data.data;

  const valorTotal = quantity * price;

  // quando monta o card cria a lista local de produtos
  useEffect(() => {
    const storage = localStorage.cartItens ? JSON.parse(localStorage.cartItens) : [];
    setProductsList(storage);
  }, []);

  // toda vez q a lista local for modificada reatribui o valor total do carrinho
  useEffect(() => {
    localStorage.cartItens = productsList;
    setCartValue(totalValue());
  }, [productsList, setCartValue, totalValue]);

  return (
    <div id={ `${id}` }>
      <div data-testid={ `${id - 1}-product-qtd-input` }>{quantity}</div>
      <div data-testid={ `${id - 1}-product-name` }>{name}</div>
      <div data-testid={ `${id - 1}-product-unit-price` }>{price}</div>
      <div data-testid={ `${id - 1}-product-total-value` }>{valorTotal}</div>
      <button
        type="button"
        data-testid={ `${id - 1}-removal-button` }
        onClick={ () => handleClick(id, productsList, setProductsList) }
      >
        X
      </button>
    </div>
  );
}
