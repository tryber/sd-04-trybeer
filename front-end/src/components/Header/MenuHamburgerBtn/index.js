import React from 'react';
import PropTypes from 'prop-types';

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

const MenuHamburgerBtn = ({
  setNavDisplay,
  navDisplay,
  setNavStyle,
  transitionMenuHambuger,
  setTransitionMenuHambuger,
  navDisplayFalse,
  navDisplayTrue,
}) => (
    <button
      type="button"
      data-testid="top-hamburguer"
      className="menu-hamburger-btn"
      onClick={() => {
        if (!navDisplay) {
          navDisplayFalse(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
        } else {
          navDisplayTrue(setTransitionMenuHambuger, setNavStyle, setNavDisplay, navDisplay);
        }
      }}
    >
      <div
        className="menu-line-1"
        style={{ transform: transitionMenuHambuger.lineOne }}
      />
      <div
        className="menu-line-2"
        style={{ opacity: transitionMenuHambuger.lineTwo }}
      />
      <div
        className="menu-line-3"
        style={{ transform: transitionMenuHambuger.lineThree }}
      />
    </button>
  );

MenuHamburgerBtn.propTypes = {
  setNavDisplay: PropTypes.func,
  navDisplay: PropTypes.bool,
  setNavStyle: PropTypes.func,
  transitionMenuHambuger: PropTypes.objectOf(PropTypes.string),
  setTransitionMenuHambuger: PropTypes.func,
  navDisplayFalse: PropTypes.func,
  navDisplayTrue: PropTypes.func,
};

export default MenuHamburgerBtn;
