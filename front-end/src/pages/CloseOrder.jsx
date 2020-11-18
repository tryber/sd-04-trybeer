import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../components/ClientBar.jsx';
import { AppContext } from '../context/AppContext';

const CloseOrder = () => {
  const { orderList, setOrderList } = useContext(AppContext);
  const [message, setMessage] = useState(null);

  const orderRef = useRef(null);

  useEffect(() => {
    makeTotalValue(orderList);
  }, []);

  const makeTotalValue = (orderList) => {
    let totalPrice = document.getElementById('itemTotal');

    if (orderList.length > 0) {
      const total = orderList
        .map(({ value, qty }) => {
          return value * qty;
        })
        .reduce((acc, curr) => acc + curr);
      totalPrice.innerText = 'Total: R$' + total;
    } else {
      totalPrice.innerHTML = 'Total: R$ 0';
      setMessage('Não há produtos no carrinho');
    }
  };

  const removeItemFromArray = (product) => {
    let newArr = orderList.filter(
      (value, index, arr) => value.product !== product
    );
    setOrderList(newArr);
    makeTotalValue(newArr);
  };

  return (
    <div>
      <TopBar title={'Finalizar Pedido'} isAdm={false} />

      <h1>Produtos</h1>
      <p>{message}</p>
      <ul ref={orderRef} id="list" className="list-group">
        {orderList.map(({ product, qty, value }, index) => {
          return (
            <li
              id={product}
              key={product}
              className="list-group-item list-group-item-action list-group-item-primary"
              index={index}
            >
              <div className="container">
                <div className="row">
                  <div data-testid="0-product-qtd-input" className="col">
                    {qty}
                  </div>
                  <div data-testid="0-product-name" className="col-6">
                    {product}
                  </div>
                  <div data-testid="0-product-unit-price" className="col">
                    {value}
                  </div>
                  <div
                    onClick={(e) => removeItemFromArray(product)}
                    className="col"
                  >
                    <button
                      data-testid="0-removal-button"
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p data-testid="order-total-value" id="itemTotal">
        Total: R${' '}
      </p>
      <div className="col-md-6 offset-md-6">
        <form method="POST" action="">
          <h2>Endereço</h2>
          <label htmlFor="rua">Rua:</label>
          <input
            data-testid="checkout-street-input"
            type="text"
            className="input-group-prepend"
          />
          <br />
          <label htmlFor="numeroCasa" className="input-group-prepend">
            Número da casa:
          </label>
          <input data-testid="checkout-house-number-input" type="text" />
        </form>
        <br />
        <br />
        <button data-testid="checkout-finish-btn" className="btn btn-success">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CloseOrder;
