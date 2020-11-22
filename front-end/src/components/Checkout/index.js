import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import productNameDefinition from '../screens/productName';

const productsData = JSON.parse(localStorage.getItem('qttPdtsCart')) || [{}];
const totalPrice = JSON.parse(localStorage.getItem('totalPriceCart'));

let productList = '';

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [list, setList] = useState(productsData);
  // useEffect(() => {
  //   const totalPrice = localStorage.getItem('totalPriceCart');
  //   setTotal(totalPrice);
  // }, [totalPrice]);

  useEffect(() => {
    // const productsData = JSON.parse(localStorage.getItem('qttPdtsCart')) || [
    //   {},
    // ];
    setTotal(
      totalPrice.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    );
  }, [totalPrice]);

  function updateList(id) {
    productList = productsData.filter(
      (item) => item.id !== id && item.totalPrice !== 0
    );
    let totalP = productList.reduce((acc, value) => acc + value.totalPrice, 0);
    setTotal(totalP);
    localStorage.setItem('qttPdtsCart', JSON.stringify(productList));
    localStorage.setItem('totalPriceCart', JSON.stringify(totalP));
    setList(productList);
  }

  if (totalPrice === 0) {
    productList = <p>Não há produtos no carrinho</p>;
  } else {
    productList = list.map((item) => {
      if (item.totalPrice !== 0) {
        return (
          <li
            key={ item.id }
            data-testid={ `${ item.id - 1 }-product-price` }
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <span
              data-testid={ `${ item.id - 1 }-product-qtd-input` }
              className='badge badge-primary badge-pill'
            >
              { item.qtt }
            </span>
            <span data-testid={ `${ item.id - 1 }-product-name` }>
              { productNameDefinition(item.id) }
            </span>
            <span
              data-testid={ `${ item.id - 1 }-product-total-value` }
              className='badge badge-primary badge-pill'
            >
              { item.totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
            <span
              data-testid={ `${ item.id - 1 }-product-unit-price` }
              className='badge badge-primary badge-pill'
            >
              { item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
            <button
              onClick={ () => updateList(item.id) }
              data-testid={ `${ item.id - 1 }-removal-button` }
              className='badge badge-pill badge-light'
            >
              X
            </button>
          </li>
        );
      }
      return true;
    });
  }
  return (
    <div>
      <Header title='Finalizar Pedido' />
      <SideBar userType='client' />
      <h2>Produtos</h2>
      <ul className='list-group'>{ productList }</ul>
      <span data-testid='order-total-value'>{ `Total: ${ total }` }</span>
      <form>
        <div className='form-group'>
          <p>Endereço</p>
          <label htmlFor='inputAddress'>Rua:</label>
          <input
            data-testid='checkout-street-input'
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='P. Sherman'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputAddress2'>Número da casa:</label>
          <input
            data-testid='checkout-house-number-input'
            type='number'
            className='form-control'
            id='inputAddress2'
            placeholder='42'
          />
        </div>

        <button
          data-testid='checkout-finish-btn'
          type='submit'
          className='btn btn-primary'
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
