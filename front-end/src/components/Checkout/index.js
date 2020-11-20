import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import productNameDefinition from '../screens/productName';

const productsData = JSON.parse(localStorage.getItem('qttPdtsCart')) || [{}];
const totalPrice = JSON.parse(localStorage.getItem('totalPriceCart'));

let productList = '';

if (productsData === null || totalPrice === 0) {
  productList = <p>Não há produtos no carrinho</p>;
} else {
  productList = productsData.map((item) => {
    if (item.totalPrice !== 0) {
      return (
        <li
          key={ item.id }
          data-testid={ `${ item.id - 1 }-product-price` }
          className='list-group-item d-flex justify-content-between align-items-center'
        >
          <span
            data-testid={ `${ item.id - 1}-product-qtd-input` }
            className='badge badge-primary badge-pill'>{ item.qtt }
          </span>
          <span
            data-testid={ `${ item.id - 1}-product-name` }>
            { productNameDefinition(item.id) }
          </span>
          <span
            data-testid={ `${ item.id - 1}-product-total-value` }
            className='badge badge-primary badge-pill'>
            { `R$ ${ item.totalPrice }` }
          </span>
          <span
            data-testid={ `${ item.id - 1}-product-unit-price` }
            className='badge badge-primary badge-pill'>{ `R$ ${ item.price }` }
          </span>
          <button
          data-testid={ `${ item.id - 1}-removal-button` }
          onClick={ removeIt }
          className='badge badge-pill badge-light'>
            X
          </button>
        </li>
      );
    }
    return true;
  });
}

function removeIt(e) {
  e.target.remove();
}

const Checkout = () => {
  return (
    <div>
      <Header title='Finalizar Pedido' />
      <SideBar userType='client' />
      <h2>Produtos</h2>
      <ul className='list-group'>{ productList }</ul>
      <span data-testid='order-total-value'>{ `Total: R$ ${ totalPrice }` }</span>
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

        <button data-testid='checkout-finish-btn' type='submit' className='btn btn-primary'>
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
