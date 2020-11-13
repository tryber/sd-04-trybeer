import React from "react";
import { Header } from "../components/Header";

function OrderDetail() {
  return (
    <React.Fragment>
      <Header>Detalhes de pedido</Header>
      <ul>
          <li>2 - Brahma - R$2,20</li>
      </ul>
    </React.Fragment>
  );
}

export default OrderDetail;
