import React, { useEffect, useState } from 'react';

// falta criar o context para adicionar e tirar item do carrinho

export default function ProductCard() {
  // variavel para formatacao do price
  const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
  const { index, name, price, url_image, prodQuantity } = this.props;
  const [quantity, setQuantity] = useState(0);

  // roda quando o card eh montado, checa/ cria um localstorage
  // checa se o item do card ja esta no localstorage e atribui o a quantidade
  useEffect(() => {
    if (!localStorage.cartItens) localStorage.cartItens = JSON.stringify([]);
    let storage = JSON.parse(localStorage.cartItens);
    if (storage.length !== 0) {
      storage.map((e) => {
        if (e.name === name) setQuantity(e.quantity);
      });
    }
  }, []);

  // roda toda vez que o valor do "quantity" for alterado
  // checa se o item ja esta no localstorage, se tiver atualiza a quantidade,
  // se nao tiver adiciona o item
  useEffect(() => {
    let storage = JSON.parse(localStorage.cartItens);
    const additem = {
      name,
      quantity,
    };
    const newStorage = storage.map((e) => {
      if (e.name === name) {
        e.quantity = quantity;
      }
      storage.push(additem);
    });
    localStorage.cartItens = JSON.stringify(newStorage);
  }, [quantity]);

  return (
    <div>
      <div data-testid={`${index - 1}-product-price`}>{price.toLocalString('pt-BR', formato)}</div>
      <div>
        <div data-testid={`${index - 1}-product-img`}>{url_image}</div>
        <div data-testid={`${index - 1}-product-name`}>{name}</div>
      </div>
      <div>
        <div
          disabled={{ quantity } === 0 ? true : false}
          data-testid={`${index - 1}-product-minus`}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </div>
        <div data-testid={`${index - 1}-product-qtd`}>quantidade{quantity}</div>
        <div
          disabled={{ quantity } === prodQuantity ? true : false}
          data-testid={`${index - 1}-product-plus`}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
}
