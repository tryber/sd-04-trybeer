import React from 'react';
import { Link } from 'react-router-dom';
import './styleMenu.css';

function Buttons(title, link, test) {
  return (
    <div className="buttons-content">
      <Link to={ link } onClick={ async () => { if (title === 'Sair') await localStorage.clear(); } }>
        <button className="style-buttons" data-testid={ test } type="button">
          <p>{`${title}`}</p>
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
