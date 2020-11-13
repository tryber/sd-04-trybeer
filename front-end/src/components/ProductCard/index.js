import React, { useEffect, useState } from 'react';

// falta criar o context para adicionar e tirar item do carrinho

export default function ProductCard(props) {
  // variavel para formatacao do price
  const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
  const { index, name, price, urlImage, prodQuantity } = props;
  const [quantity, setQuantity] = useState(0);

  // roda quando o card eh montado, checa/ cria um localstorage
  // checa se o item do card ja esta no localstorage e atribui o a quantidade
  useEffect(() => {
    if (!localStorage.cartItens) localStorage.cartItens = JSON.stringify([]);
    const storage = JSON.parse(localStorage.cartItens);
    if (storage.length !== 0) {
      storage.map((e) => {
        if (e.name === name) setQuantity(e.quantity);
        return e;
      });
    }
  }, []);

  // roda toda vez que o valor do "quantity" for alterado
  // checa se o item ja esta no localstorage, se tiver atualiza a quantidade,
  // se nao tiver adiciona o item
  useEffect(() => {
    const storage = JSON.parse(localStorage.cartItens);
    const additem = {
      name,
      quantity,
    };
    const newStorage = storage.map((e) => {
      if (e.name === name) {
        e.quantity = quantity;
        return e;
      }
      return storage.push(additem);
    });
    localStorage.cartItens = JSON.stringify(newStorage);
  }, [quantity]);

  return (
    <div>
      <div data-testid={ `${index - 1}-product-price` }>{ price.toLocalString('pt-BR', formato) }</div>
      <div>
        <div data-testid={ `${index - 1}-product-img` }>{ urlImage }</div>
        <div data-testid={ `${index - 1}-product-name` }>{ name }</div>
      </div>
      <div>
        <button
          type='button'
          disabled={ { quantity } === 0 }
          data-testid={ `${index - 1}-product-minus` }
          onClick={ () => setQuantity(quantity - 1) }
        >
          -
        </button>
        <div data-testid={ `${index - 1}-product-qtd` }>{ quantity }</div>
        <button
          type='button'
          disabled={ { quantity } === prodQuantity }
          data-testid={ `${index - 1}-product-plus` }
          onClick={ () => setQuantity(quantity + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}
