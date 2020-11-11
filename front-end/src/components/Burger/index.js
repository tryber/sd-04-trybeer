import React from 'react';
import { bool, func } from 'prop-types';
import './index.css';

const Burger = ({ open, setOpen }) => {
  return (
    <button
      open={open}
      onClick={() => setOpen(!open)}
      data-testid="top-hamburguer"
      className="btn-burger"
    >
      <div className="div-burger" />
      <div className="div-burger" />
      <div className="div-burger" />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
