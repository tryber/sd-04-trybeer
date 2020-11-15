import React, { useState, useEffect, useContext } from 'react';
import Card from '../../ProductCard/ProductCard';
import ButtonCart from '../../ButtonCart/ButtonCart';
import { TrybeerContext } from '../../../context/index';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';
import './ClientProducts.css';

// Função q primeiro verifica se existe informações de quantidade de produtos no
// local storage, caso n, então seta quantidade inicial
const initQttPdtsCart = (products) => {
  let qtt = getLS('qttPdtsCart');

  if (qtt) return qtt;

  qtt = products.map(({ id, price }) => ({ id, price, qtt: 1, totalPrice: price }));

  setLS('qttPdtsCart', qtt);

  return qtt;
}

// Hook de effect customizado, com uma IIFE interna, criado para
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
  // Registros de produtos do mysql
  const [products, setProducts] = useState([]);
  // Registro de quantidade e outras infos no context
  const { qttPdtsCart: [qttPdtsCart, setQttPdtsCart] } = useContext(TrybeerContext);

  useEffectCustom(setQttPdtsCart, setProducts);
  console.log('c:', qttPdtsCart, 's:', products)
  return (
    <div>
      <div className="cards-container">
        {products.map(({ id, url_image, name, price }) => {
          const currentQtt = qttPdtsCart.filter((pdt) => pdt.id === id)[0].qtt;

          return <Card
            key={id} id={id} img={url_image} name={name} price={price} qtt={currentQtt}
          />
        })}
      </div>
      <ButtonCart />
    </div>
  );
};
