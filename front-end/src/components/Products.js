import React, { useState, useEffect } from 'react';

import API from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const [buttonDisable, setbuttonDisable] = useState(true);
  useEffect(() => {
    API.getProducts().then((result) => setProducts(result.data));
    console.log('Hello Trybeer');
  }, []);

  // console.log(products.map((result) => result));

  const addProduct = () => {
    setProductQuantity(productQuantity + 1);
    setbuttonDisable(false);
  };

  const removeProduct = () => {
    if (productQuantity === 0) return setbuttonDisable(true);
    setProductQuantity(productQuantity - 1);
  };

  return (
    <div>
      <h3>Página de produtos</h3>
      <div className="container">
        {products.map((product) => (
          <div className="card w-50 mx-auto m-3" key={product.id}>
            <h4 className="card-title mx-auto">{product.name}</h4>
            <h5 className="card-content mx-auto">R$ {product.price}</h5>
            {/* <img alt={product.name} src={product.url_image} /> */}
            <section className="btn-group mx-auto m-1">
              <button onClick={addProduct} className="btn btn-success" type="button">
                +
              </button>
              <h1 className="card m-2">{productQuantity}</h1>
              <button
                onClick={removeProduct}
                disabled={buttonDisable}
                className="btn btn-danger"
                type="button"
              >
                -
              </button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
