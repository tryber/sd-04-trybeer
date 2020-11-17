import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ShopCart from '../Components/shopcart';
import BeerContext from '../context/appBeerContext';

const Client = () => {
  const [cartUpdate, setCartUpdate] = useState(true);
  const [valorTotal, setValorTotal] = useState(0);
  const { products, setData, isloading } = useContext(BeerContext);

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    let SubValor = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let key in cart) {
      SubValor = SubValor + cart[key].quantidade * cart[key].price;
    }
    setValorTotal(SubValor);
  }, [cartUpdate]);

  if (isloading) return <div>Loading ...</div>;

  return (
    <div className="container">
      <h2>Cliente - Produtos</h2>
      <h3 data-testid="top-title">TryBeer</h3>
      <div className="row row-cols-1 row-cols-md-3">
        {products.map((product, index) => (
          <div key={product.id} className="col mb-4">
            <div className="card h-100 border-success" key={product.id}>
              <img
                src={product.url_image}
                data-testid={`${index}-product-img`}
                className="card-img-top img-thumbnail border-success"
                style={{ width: 400, height: 350 }}
                alt="foto do produto"
              />
              <div className="card-body">
                <h4 className="card-title" data-testid={`${index}-product-name`}>
                  {product.name}
                </h4>
                <h4
                  className="card-title"
                  data-testid={`${index}-product-price`}
                >{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</h4>
              </div>
              <div className="card-footer border-success">
                <ShopCart
                  product={product}
                  setCartUpdate={setCartUpdate}
                  cartUpdate={cartUpdate}
                  index={index}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <button type='button' disabled={valorTotal ? false : true} data-testid="checkout-bottom-btn">
          <Link to='/checkout'>
            <span data-testid="checkout-bottom-btn-value">
              {`Ver Carrinho R$ ${valorTotal.toFixed(2).replace('.', ',')}`}
            </span>
          </Link>
        </button>
      </footer>
    </div>
  );
};

export default Client;
