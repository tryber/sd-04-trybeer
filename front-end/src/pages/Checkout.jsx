import React, { useState, useReducer, useEffect } from 'react'

function Checkout() {
  return (
    <div>
      <h2>Produtos</h2>
        <div className="cart-products">
          <div className="cart-qtd" data-testid={ `-product-qtd-input` }>{ }</div>
          <div className="cart-name" data-testid={ `-product-name` }>{ }</div>
          <div className="cart-total" data-testid={ `-product-total-value` }>{ }</div>
          <div className="cart-price" data-testid={ `-product-unit-price` }>{ }
            <button
              type="submit"
              value="Submit"
              data-testid={ `-removal-button` }
              // onClick={ }
            >
              X
            </button>
          </div>
        </div>
      
      <div data-testid="order-total-value">
      </div>

      <h2>Endereço</h2>
      <label htmlFor="street">
        Rua:
        <input
          id="street"
          name="street"
          data-testid="checkout-street-input"
          type="text"
          required
          // onChange={ }
          // value={ }
        />
      </label>

      <label htmlFor="number">
        Número da casa:
        <input
          id="number"
          name="number"
          data-testid="checkout-house-number-input"
          type="text"
          required
          // onChange={ }
          // value={ }
        />
      </label>

      <button
        type="button"
        data-testid="checkout-finish-btn"
        // disabled={ }
        // onClick={ }
      >
        Finalizar Pedido
      </button>
    </div>
  )
}

export default Checkout