import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import ListProducts from '../components/ListProducts/index';
import Loading from '../components/Loading';
import { getProducts } from '../services/TrybeerApi';

function Products() {
  const [list, setList] = useState(false);

  useEffect(() => {
    // timeout apenas para apreciarmos a tela de loading
    getProducts().then(({ data }) => setTimeout(() => setList(data), 600));
  }, []);

  return (
    <div className="page">
      <Header>TryBeer</Header>
      {list ? <ListProducts list={ list } /> : <Loading /> }
    </div>
  );
}

export default Products;
