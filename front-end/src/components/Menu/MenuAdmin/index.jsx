import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../../hooks';
import Burger from '..';
import StyledMenu from '../style';
import styles from '../index.module.css'

const MenuAdmin = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header className={styles.header} ref={ node }>
      <Burger open={ open } setOpen={ setOpen } />
      <StyledMenu open={ open } className="admin-side-menu-container">
        <Link to="/admin/orders" className="nav-link" data-testid="side-menu-item-orders">
          Pedidos
        </Link>
        <Link to="/admin/profile" className="nav-link" data-testid="side-menu-item-profile">
          Perfil
        </Link>
        <Link to="/login" className="nav-link" data-testid="side-menu-item-logout">
          Sair
        </Link>
      </StyledMenu>
      <h1 className={styles.topTitle}>
        TryBeer
      </h1>
    </header>
  );
};

MenuAdmin.propTypes = {
  nomeTela: PropTypes.string.isRequired,
};

export default MenuAdmin;
