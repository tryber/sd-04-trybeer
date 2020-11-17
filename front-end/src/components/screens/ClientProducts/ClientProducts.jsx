import React, { useState, useEffect, useContext } from 'react';
import Card from '../../ProductCard/ProductCard';
import ButtonCart from '../../ButtonCart/ButtonCart';
import { TrybeerContext } from '../../../context/index';
import api from '../../../services/api';
import { getLS, setLS } from '../../../helpers/index';
import './ClientProducts.css';

// Função q primeiro verifica se existe informações de quantidade de produtos no
// local storage, caso n, então seta quantidade inicial
const initQttPdtsCart = (products, setTotalPriceCart) => {
  let qtt = getLS('qttPdtsCart');

  if (qtt) {
    const totalPriceCart = qtt.map((pdt) => pdt.totalPrice)
    .reduce((acc, value) => acc + value);

    setTotalPriceCart(totalPriceCart);

    return qtt;
  }

  qtt = products.map(({ id, price }) => ({ id, price, qtt: 0, totalPrice: 0 }));

  setLS('qttPdtsCart', qtt);

  return qtt;
}

// Hook de effect customizado, com uma IIFE interna, criado para
// diminuir a lógica dentro do componente default
const useEffectCustom = (setQttPdtsCart, setTotalPriceCart, setProducts) => {
  useEffect(() => {
    (async () => {
      try {
        const products = await api.getProducts();

        setQttPdtsCart(initQttPdtsCart(products.data, setTotalPriceCart));
        setProducts(products.data);
      } catch (e) {
        // console.log({ error: e.message })
      }
    })();
  }, [setQttPdtsCart, setTotalPriceCart, setProducts]);
};

export default () => {
  // Registros de produtos do mysql
  const [products, setProducts] = useState([]);
  const {
    qttPdtsCart: [qttPdtsCart, setQttPdtsCart],
    totalPriceCart: [totalPriceCart, setTotalPriceCart]
  } = useContext(TrybeerContext);
  // const totalPriceCartLs = getLS('totalPriceCart');

  useEffectCustom(setQttPdtsCart, setTotalPriceCart, setProducts);

  return (
    <div>
      <div className="cards-container">
        {products.map(({ id, urlImg, name, price }, i) => {
          const currentQtt = qttPdtsCart.filter((pdt) => pdt.id === id)[0].qtt;

          return <Card
            key={id} id={id} i={i} img={urlImg} name={name} price={price} qtt={currentQtt}
          />
        })}
      </div>
      <ButtonCart totalPriceCart={totalPriceCart} />
    </div>
  );
};
