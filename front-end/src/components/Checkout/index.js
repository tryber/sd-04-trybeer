import React from 'react';

import Header from '../Header';
import SideBar from '../SideBarCLI';

const Checkout = () => (
  <div>
    <Header title="Cliente - Checkout" />
    <SideBar />
    <h4>Produtos</h4>
    <ul className="list-group">
      <li data-testid="0-product-name" className="list-group-item d-flex justify-content-between align-items-center">
        <span data-testid="0-product-qtd-input" className="badge badge-primary badge-pill">14</span>
        Cras justo odio
        <span data-testid="0-product-total-value" className="badge badge-primary badge-pill">14</span>
        <span data-testid="0-product-unit-price" className="badge badge-primary badge-pill">14</span>
        <button data-testid="0-removal-button" type="button">x</button>
      </li>
    </ul>
    <h6 data-testid="order-total-value">Total: </h6>
    <form>
      <h4>Endereço</h4>
      <div className="form-group">
        <label htmlFor="exampleInputText1">
          Rua:
          <input data-testid="checkout-street-input" type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
        </label>

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputNumber1">
          Número da casa:
          <input data-testid="checkout-house-number-input" type="number" className="form-control" id="exampleInputNumber1" />
        </label>

      </div>
      <button data-testid="checkout-finish-btn" type="submit" className="btn btn-primary">Finalizar Pedido</button>
    </form>
  </div>
);

export default Checkout;
