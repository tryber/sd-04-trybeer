import React from 'react';
import ProductCard from '../components/ProductCard';

function Products() {
  useEffect(() => {
    searchRecipesByName(type, '').then((data) => {
      fetchRecipes(data);
      setIsFetching(false);
    });
  }, []);

  // const products = [
  //   { id: 2, name: 'Cerveja Skol', price: 'R$ 6,90', imgProduct: './images/Becks600ml.jpg', quantity: 3 }
  // ];

  return (
    <div>
      <h2>Products Page</h2>
      {products.map(product => (
        <ProductCard
          name={product.name}
          price={product.price}
          imgProduct={product.imgProduct}
          quantity={product.quantity}
        />
      ))}
    </div>
  )
};

export default Products;
