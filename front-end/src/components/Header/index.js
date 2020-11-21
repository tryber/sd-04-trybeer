import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BurguerMenuBtn from './components/BurguerMenuBtn';
import NavBar from './components/NavBar';

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

const TIME = 400;
const navDisplayTrue = (setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay) => {
  setTransitionMenuHambuger({
    lineOne: 'translate(0px, 0px) rotate(0deg)',
    lineTwo: '1',
    lineThree: 'translate(0px, 0px) rotate(0deg)',
  });
  setNavStyle({ animationName: 'coverNav', left: '0%' });
  setTimeout(() => {
    setNavDisplay(!navDisplay);
  }, TIME);
};

const Header = ({ title }) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [navStyle, setNavStyle] = useState({});
  const [transitionMenuHambuger, setTransitionMenuHambuger] = useState({});

  return (
    <header>
      <div className="header-container">
        <BurguerMenuBtn
          setNav={ setNavDisplay }
          display={ navDisplay }
          navStyle={ setNavStyle }
          transition={ transitionMenuHambuger }
          setTransition={ setTransitionMenuHambuger }
          navDisplayFalse={ navDisplayFalse }
          navDisplayTrue={ navDisplayTrue }
        />
        <h1 data-testid="top-title">{ title }</h1>
        {navDisplay && (
          <NavBar
            navStyle={ navStyle }
            setNavStyle={ setNavStyle }
            setTransitionMenuHambuger={ setTransitionMenuHambuger }
            setNavDisplay={ setNavDisplay }
            navDisplay={ navDisplay }
            navDisplayTrue={ navDisplayTrue }
          />
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
