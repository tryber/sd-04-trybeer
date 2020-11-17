import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import ListProducts from '../components/ListProducts/index';
import Loading from '../components/Loading';
import { getProducts } from '../services/TrybeerApi';

function Products() {
  const [list, setList] = useState({});

  useEffect(() => {
    getProducts().then(({ data }) => setList(data));
  }, []);

  return (
    <div>
      <Header>TryBeer</Header>
      {list.length === 0 ? <Loading /> : <ListProducts list={list} />}
    </div>
  );
}

export default Products;
