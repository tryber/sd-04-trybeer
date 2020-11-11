import React, { useContext } from 'react';
import { Context } from '../context/index';

const SellerCheckbox = () => {
  const { isSeller, setIsSeller } = useContext(Context);

  return (
    <div className="seller-checkbox-div">
      <input
        type="checkbox"
        onChange={() => setIsSeller(true)}
        data-testid="signup-seller"
        className="seller-checkbox"
        value={!isSeller}
      />
      <span className="checkbox-text">
      <label htmlFor="CheckSalesman">Quero vender</label>
      </span>
    </div>
  );
};

export default SellerCheckbox;
