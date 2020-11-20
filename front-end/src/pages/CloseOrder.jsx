import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../components/ClientBar.jsx';
import { AppContext } from '../context/AppContext';

const CloseOrder = () => {
  const { cart, setCart, total, setTotal } = useContext(AppContext);
  const { orderMessage, setOrderMessage } = useContext(AppContext);

  const [message, setMessage] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [numero, setNumero] = useState('');
  const [data, setData] = useState(null);

  const orderRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
      setTotal(JSON.parse(localStorage.getItem('totalPrice')));
    }
  }, []);

  useEffect(() => {
    makeTotalValue(cart);
  }, [total]);

  const makeTotalValue = (cart) => {
    let totalPrice = document.getElementById('itemTotal');

    if (cart.length > 0) {
      const total = cart
        .map(({ price, quantity }) => {
          return price * quantity;
        })
        .reduce((acc, curr) => acc + curr);
      totalPrice.innerText = `R$ ${total
        .toFixed(2)
        .toString()
        .replace('.', ',')}`;
      localStorage.setItem('totalPrice', JSON.stringify(total));
    } else {
      totalPrice.innerHTML = 'Total: R$ 0,00';
      setMessage('Não há produtos no carrinho');
    }
  };

  const removeItemFromArray = (product) => {
    let newArr = cart.filter((value, index, arr) => value.name !== product);
    setCart(newArr);
    makeTotalValue(newArr);
    localStorage.setItem('cart', JSON.stringify(newArr));
  };

  const history = useHistory();

  const doneOrder = (history, frase, seOMessage) => {
    /* let orderMessageItem = document.querySelector('#orderMessage');
    orderMessage.innerHTML = frase; */
    seOMessage(frase);
    const orderDate = new Date();
    setData(orderDate);
    history.push('/products');
  };

  return (
    <div>
      <TopBar title={'Finalizar Pedido'} isAdm={false} />

      <h1>Produtos</h1>
      <p>{message}</p>
      <p id="orderMessage">{orderMessage}</p>
      <ul ref={orderRef} id="list" className="list-group">
        {cart.map(({ name, quantity, price }, index) => {
          return (
            <li
              name="itemList"
              id={name}
              key={name}
              className="list-group-item list-group-item-action list-group-item-primary"
              index={index}
            >
              <div className="container">
                <div className="row">
                  <div
                    data-testid={`${index}-product-qtd-input`}
                    className="col"
                  >
                    {quantity}
                  </div>
                  <div data-testid={`${index}-product-name`} className="col-6">
                    {name}
                  </div>
                  <div
                    data-testid={`${index}-product-unit-price`}
                    className="col"
                  >
                    {`(R$ ${price.toFixed(2).toString().replace('.', ',')} un)`}
                  </div>
                  <div
                    data-testid={`${index}-product-total-value`}
                    className="col"
                  >
                    {`R$ ${(price * quantity)
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')}`}
                  </div>

                  <input type="hidden" name="total" value={total} />
                  <input type="hidden" name="products" value={cart} />
                  <input type="hidden" name="date" value={data} />

                  <div
                    onClick={(e) => removeItemFromArray(name)}
                    className="col"
                  >
                    <button
                      data-testid={`${index}-removal-button`}
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
      <p data-testid="order-total-value" id="itemTotal"></p>
      <div className="col-md-6 offset-md-6">
        <form method="POST" action="">
          <h2>Endereço</h2>
          <label htmlFor="rua">Rua:</label>
          <input
            onChange={(e) => setEndereco(e.target.value)}
            id="inputEnd"
            name="adrress"
            data-testid="checkout-street-input"
            type="text"
            className="input-group-prepend"
          />
          <br />
          <label htmlFor="numeroCasa" className="input-group-prepend">
            Número da casa:
          </label>
          <input
            name="number"
            onChange={(e) => setNumero(e.target.value)}
            data-testid="checkout-house-number-input"
            type="text"
          />
        </form>
        <br />
        <br />
        <button
          id="inputNum"
          data-testid="checkout-finish-btn"
          className="btn btn-success"
          disabled={!endereco || !numero || !cart.length > 0}
          onClick={() =>
            doneOrder(history, 'Compra realizada com sucesso!', setOrderMessage)
          }
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CloseOrder;
