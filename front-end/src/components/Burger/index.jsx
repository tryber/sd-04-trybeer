import React from 'react';
import { bool, func } from 'prop-types';
// import './index.css';
import styles from './index.module.css'

const Burger = ({ open, setOpen }) => (
  <button
    type="button"
    open={ open }
    onClick={ () => setOpen(!open) }
    data-testid="top-hamburguer"
    className={styles.btnBurger}
  >
    <div className={styles.divBurger} />
    <div className={styles.divBurger} />
    <div className={styles.divBurger} />
  </button>
);

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
