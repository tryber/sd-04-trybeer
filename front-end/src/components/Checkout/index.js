import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import productNameDefinition from '../screens/productName';

const productsData = JSON.parse(localStorage.getItem('qttPdtsCart'));
const totalPrice = JSON.parse(localStorage.getItem('totalPriceCart'));
let productName = productNameDefinition(id);

const Checkout = () => {
  return (
    <div>
      <Header title='Finalizar Pedido' />
      <SideBar userType='client' />
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <span className='badge badge-primary badge-pill'>14</span>
          Cras justo odio
          <span className='badge badge-primary badge-pill'>14</span>
          <span className='badge badge-primary badge-pill'>14</span>
          <span className='badge badge-pill badge-light'>Light</span>
        </li>
      </ul>
      <form>
        <div className='form-group'>
          <p>Endereço</p>
          <label htmlFor='inputAddress'>Rua:</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='P. Sherman'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputAddress2'>Número da casa:</label>
          <input
            type='number'
            className='form-control'
            id='inputAddress2'
            placeholder='42'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
