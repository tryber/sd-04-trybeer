import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import InputForm from '../../components/InputForm';
import { setLS, getLS } from '../../utils/';
import api from '../../services/api';
import './index.css';

const cartItens = [
  { id: 1, name: 'Product 1', quantity: 5, price: 10 },
  { id: 2, name: 'Product 2', quantity: 2, price: 5 },
];

const Checkout = () => {
  const [cart, setCart] = React.useState([]);
  const [form, setForm] = React.useState({ street: '', houseNumber: '' });
  const [finish, setFinish] = React.useState(null);
  const finishTimeout = React.useRef();
  const history = useHistory();

  React.useEffect(() => {
    setLS('cart', cartItens);
    const setState = () => setCart(getLS('cart'));
    setState();
  }, []);

  React.useEffect(() => {
    setLS('cart', cart);
  }, [cart]);

  const handleRemove = (productId) => {
    const filteredCart = cart.filter(({ id }) => id !== productId);
    setCart(filteredCart);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    api.insertSaleAPI(
      getLS('userId'),
      cart.reduce((acc, cur) => {
        const itemTotal = cur.price * cur.quantity;
        return acc + itemTotal;
      }, 0),
      form.street,
      form.houseNumber,
    );
    setFinish('Compra realizada com sucesso!');
    setLS('cart', []);
    clearTimeout(finishTimeout.current);
    finishTimeout.current = setTimeout(() => {
      setFinish(null);
      history.push('/products');
    }, 3000);
  };

  if (!getLS('user') || !getLS('user').token) history.push('/login');
  return (
    <div className="page-container">
      <Menu nomeTela="Finalizar Pedido" />
      {finish ? <p className="finish-notification">{finish}</p> : null}
      <section className="products">
        <h2>Produtos</h2>
        {!cart || !cart.length ? (
          <h3>Não há produtos no carrinho</h3>
        ) : (
          <ul className="cart-list">
            {cart.map(({ id, name, quantity, price }, index) => (
              <li key={name} className="cart-item">
                <div className="cart-item-left-container">
                  <span
                    className="cart-item-qty"
                    data-testid={`${index}-product-qtd-input`}
                  >
                    {quantity}
                  </span>
                  <span className="dash-space">-</span>
                  <span
                    className="cart-item-name"
                    data-testid={`${index}-product-name`}
                  >
                    {name}
                  </span>
                </div>
                <div className="cart-item-right-container">
                  <span className="unitary-price">{`(${price.toLocaleString(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' },
                  )} un)`}</span>
                  <span
                    className="cart-item-price"
                    data-testid={`${index}-product-total-value`}
                  >
                    {(price * quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemove(id)}
                    data-testid={`${index}-removal-button`}
                  >
                    Remover item
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3
          className="cart-total"
          data-testid="order-total-value"
        >{`Total: ${cart
          .reduce((acc, cur) => {
            const itemTotal = cur.price * cur.quantity;
            return acc + itemTotal;
          }, 0)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}`}</h3>
      </section>
      <section className="address">
        <h2>Endereço</h2>
        <form onSubmit={handleSubmit} className="address-form">
          <div className="address-inputs">
            <InputForm
              name="street"
              label="Rua"
              type="text"
              className="address-input"
              handleChange={handleInputChange}
              value={form.street}
              dataTestId="checkout-street-input"
            />
            <InputForm
              name="houseNumber"
              label="Número da casa"
              type="number"
              className="address-input"
              handleChange={handleInputChange}
              value={form.houseNumber}
              dataTestId="checkout-house-number-input"
            />
          </div>
          <button
            type="submit"
            className="checkout-finish-btn"
            data-testid="checkout-finish-btn"
            disabled={!cart.length || !form.street || !form.houseNumber}
          >
            Finalizar Pedido
          </button>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
