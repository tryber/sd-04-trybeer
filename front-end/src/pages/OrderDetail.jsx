import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import SalesDetails from "../components/OrderDetails/SalesDetails";
import { getDetailSales } from "../services/TrybeerApi";

function OrderDetail() {
  const { id } = useParams();
  // const { email } = JSON.parse(localStorage.getItem('user') || '{}');
  const [products, setProducts] = useState([]);
  // const [orders, setOrders] = useState([]);
  useEffect(() => {
    getDetailSales(id).then(({ data }) => setProducts(data));
    // chamada do Vitão
  }, [id]);

  return (
    <React.Fragment>
      <Header>Detalhes de pedido</Header>
      <div  style={{"padding-top": "70px"}}>
        <span data-testid="order-number">Pedido 0001</span>
        <span data-testid="order-date">26/01</span>      
          <SalesDetails products={products} />
        <span data-testid={`order-total-value`}>TOTAL</span>
      </div>      
    </React.Fragment>
  );
}

export default OrderDetail;
