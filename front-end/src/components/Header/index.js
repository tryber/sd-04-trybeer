import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuHamburgerBtn from './MenuHamburgerBtn';
import NavBar from './NavBar';
import './style.css';

const navDisplayFalse = (setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay) => {
  setTransitionMenuHambuger({
    lineOne: 'translate(0px, 10px) rotate(45deg)',
    lineTwo: '0',
    lineThree: 'translate(0px, -10px) rotate(-45deg)',
  });
  setNavStyle({ animationName: 'displayNav', left: '-100%' });
  setNavDisplay(!navDisplay);
};

const navDisplayTrue = (setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay) => {
  setTransitionMenuHambuger({
    lineOne: 'translate(0px, 0px) rotate(0deg)',
    lineTwo: '1',
    lineThree: 'translate(0px, 0px) rotate(0deg)',
  });
  setNavStyle({ animationName: 'coverNav', left: '0%' });
  setTimeout(() => {
    setNavDisplay(!navDisplay);
  }, 400);
};

const Header = ({ title, dataTestid }) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [navStyle, setNavStyle] = useState({});
  const [transitionMenuHambuger, setTransitionMenuHambuger] = useState({});

  return (
    <header>
      <div className="header-container">
        <MenuHamburgerBtn
          setNavDisplay={setNavDisplay}
          navDisplay={navDisplay}
          setNavStyle={setNavStyle}
          transitionMenuHambuger={transitionMenuHambuger}
          setTransitionMenuHambuger={setTransitionMenuHambuger}
          navDisplayFalse={navDisplayFalse}
          navDisplayTrue={navDisplayTrue}
          />
        <h1 data-testid={dataTestid}>{title}</h1>
        {navDisplay && <NavBar
          navStyle={navStyle}
          setNavStyle={setNavStyle}
          setTransitionMenuHambuger={setTransitionMenuHambuger}
          setNavDisplay={setNavDisplay}
          navDisplay={navDisplay}
          navDisplayTrue={navDisplayTrue}
        />}
        </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  dataTestid: PropTypes.string,
};

export default Header;
