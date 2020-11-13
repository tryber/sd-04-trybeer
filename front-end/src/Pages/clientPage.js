import React, { useEffect, useState } from 'react';
import { Card, Image, Title } from 'rbx';

import apiProducts from '../services/productApi';

const Client = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiProducts.getProducts().then((response) => setProducts(response.data));
  }, [])

  return (
    <div>
      <h2>Cliente - Produtos</h2>
      {
        products.map((product) => (
          <Card key={product.id}>
            <Card.Image>
              <Image.Container>
                {product.url_image}
              </Image.Container>
            </Card.Image>
            <Card.Content>
              <Title as="p" size={4}>
                {product.name}
              </Title>
              <Title as="p" subtitle size={6}>
                {product.price}
              </Title>
            </Card.Content>
            <Card.Footer>
              <Card.Footer.Item as="a" href="#">
                +
                </Card.Footer.Item>
              <Card.Footer.Item as="a" href="#">
                -
                </Card.Footer.Item>
            </Card.Footer>
          </Card>
        ))
      }
    </div>
  )

};

export default Client;
