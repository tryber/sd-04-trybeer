import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/** Styled Components */
import {
  Sale,
  SaleInfoLabel,
  SaleInfo,
  Sales,
  StatusSignal,
  ExpandButton,
  SaleDetails,
} from './styledComponents';

const SalesTable = ({ title, sales }) => {
  const [selectedSale, setselectedSale] = useState({});
  const history = useHistory();

  const handleRedirect = (saleId) => history.push(`/admin/orders/${saleId}`);

  return (
    <div>
      <h2>{title}</h2>
      <Sales>
        <thead>
          <tr>
            <SaleInfoLabel position="center">ID Pedido</SaleInfoLabel>
            <SaleInfoLabel position="left">Data Pedido</SaleInfoLabel>
            <SaleInfoLabel position="center">Status Pedido</SaleInfoLabel>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => {
            const saleDate = new Date(sale.date);

            return (
              <>
                <Sale key={sale.id} onClick={() => handleRedirect(sale.id)}>
                  <SaleInfo
                    size="10%"
                    position="center"
                    data-testid={`${index}-order-number`}
                  >
                    {`Pedido ${sale.id}`}
                  </SaleInfo>
                  <SaleInfo
                    size="75%"
                    position="left"
                  >{`${saleDate.toLocaleString('pt-BR')}`}</SaleInfo>
                  <SaleInfo size="15%" position="center">
                    <span data-testid={`${index}-order-status`}>
                      {sale.status}
                    </span>
                    <ExpandButton
                      onClick={() =>
                        setselectedSale({
                          ...selectedSale,
                          [sale.id]: !selectedSale[sale.id],
                        })
                      }
                    >
                      {selectedSale[sale.id] ? '-' : '+'}
                    </ExpandButton>
                    <StatusSignal status={sale.status} />
                  </SaleInfo>
                </Sale>
                <SaleDetails display={selectedSale[sale.id]}>
                  <td colSpan="2">
                    Valor Compra:
                    <span
                      data-testid={`${index}-order-total-value`}
                    >{`R$ ${sale.total
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')}`}</span>
                    Endereço de entrega:
                    <span
                      data-testid={`${index}-order-address`}
                    >{`${sale.address}, ${sale.number}`}</span>
                  </td>
                  <td>
                    <button>Alterar status</button>
                  </td>
                </SaleDetails>
              </>
            );
          })}
        </tbody>
      </Sales>
    </div>
  );
};

export default SalesTable;
