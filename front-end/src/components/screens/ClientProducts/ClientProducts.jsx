import React, { useState, useEffect, useContext } from 'react';
import Card from '../../ProductCard/ProductCard';
import { TrybeerContext } from '../../../context/index';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';
import './ClientProducts.css';

const getCurrentQtt = (id, qttPdtsCart) => {
  let qtt;

  for (let i = 0, length = qttPdtsCart.length; i < length; i += 1) {
    if (qttPdtsCart[i].id === id) {
      qtt = qttPdtsCart[i].qtt;
      break;
    }
  }

  return qtt;
};

// Função q primeiro verifica se existe informações de quantidade de produtos no
// local storage, caso n, então seta quantidade inicial
const initQttPdtsCart = (products) => {
  let qtt = getLS('qttPdtsCart');

  if (qtt) return qtt;

  qtt = products.map(({ id, price }) => ({ id, price, qtt: 1 }));

  setLS('qttPdtsCart', qtt);

  return qtt;
}

// Hook de effect personalizado, com uma IIFE interna, criado para
// diminuir a lógica dentro do componente default
const useEffectCustom = (setQttPdtsCart, setProducts) => {
  useEffect(() => {
    (async () => {
      try {
        const products = await api.getProducts();

        setQttPdtsCart(initQttPdtsCart(products.data));
        setProducts(products.data);
      } catch (e) {
        // console.log({ error: e.message })
      }
    })();
  }, [setQttPdtsCart, setProducts]);
};

export default () => {
  const [products, setProducts] = useState([]);
  const { qttPdtsCart: [qttPdtsCart, setQttPdtsCart] } = useContext(TrybeerContext);

  useEffectCustom(setQttPdtsCart, setProducts);
  console.log('c:', qttPdtsCart, 's:', products)
  return (
    <div>
      <div className="cards-container">
        {products.map(({ id, url_image, name, price }) => {
          const currentQtt = getCurrentQtt(id, qttPdtsCart);

          return <Card
            key={id} id={id} img={url_image} name={name} price={price} qtt={currentQtt}
          />
        })}
      </div>
    </div>
  );
};
