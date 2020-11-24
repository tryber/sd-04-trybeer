import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import hamburger from '../images/hamburger.png';
import { changeVisibility } from '../store/ducks/sideBarHide';
import SideBar from '../components/SideBar';
import './Header.css';
import { useState } from 'react';

const Header = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [sidebarVisible, setsidebarVisible] = useState(false)
  let headTitle = 'Detalhes de Pedido';
  const title = {
    '/profile': 'Meu perfil',
    '/checkout': 'Finalizar Pedido',
    '/orders': 'Meus Pedidos',
    '/login': 'TryBeer',
    '/products': 'TryBeer',
  };
  const handleClick = () => {
    //dispatch(changeVisibility()); //async
    setsidebarVisible(!sidebarVisible);
  }

  const sideBarVisible = useSelector(
    (state) => state.sideBarHideReducer.isVisible
  );
  const { role } = useSelector((state) => state.userReducer.user);

  const Wrapper = props.wrapper; //Imported Component

  if (title[location.pathname] !== undefined)
    headTitle = title[location.pathname];
  return (
    <div>
      <div className="headerContainer">
        <button data-testid="top-hamburguer" onClick={() => handleClick()}>
          <img src={hamburger} alt="test" height="80px" />
        </button>
        <div className="headTitleContainer">
          <h1 data-testid="top-title">{headTitle}</h1>
        </div>
      </div>
      <div className="sidebar">
        {(sidebarVisible || role === 'administrator') && <SideBar />}
      </div>
    </div>
  );
};

export default Header;
