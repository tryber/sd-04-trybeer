import React from 'react';

function SalesDetails({ details: { products, sale } }) {
  const { id: saleId, total_price: totalPrice, sale_date: dateSale } = sale;
  const options = {
    style: "currency",
    currency: "BRL",
  }
  const priceArrendodado = totalPrice.toLocaleString("pt-br", options);
  const date = new Date(dateSale).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "numeric",
  });
  return (
    <div className="page-content">
      <span data-testid="order-number">Pedido {saleId}</span>
      <span data-testid="order-date">{date}</span>
      {products.map((product, i) => (
        <div key={product.name}>
          <span data-testid={`${i}-product-qtd`}>{product.quantity} - </span>
          <span data-testid={`${i}-product-name`}>{product.name} - </span>
          <span data-testid={`${i}-product-total-value`}>
            {(product.price * Number.parseInt(product.quantity)).toLocaleString("pt-br", options)}
          </span>
        </div>
      ))}
      <span data-testid={`order-total-value`}>{priceArrendodado}</span>
    </div>
  );
}

export default SalesDetails;
