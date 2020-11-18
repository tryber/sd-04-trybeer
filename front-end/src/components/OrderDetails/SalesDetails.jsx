import React from "react";

function SalesDetails({ products }) {
  return (
    <React.Fragment>
      {products.map((product, i) => (
        <div key={product.name}>
          <span data-testid={`${i}-product-qtd`}>{product.quantity} - </span>
          <span data-testid={`${i}-product-name`}>{product.name} - </span>
          <span data-testid={`${i}-product-total-value`}>
            {product.price * Number.parseInt(product.quantity)}
          </span>
        </div>
      ))}
    </React.Fragment>
  );
}

export default SalesDetails;
