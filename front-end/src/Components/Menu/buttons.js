import React from 'react';
import { Link } from 'react-router-dom';

function Buttons(title, link, test) {
  return (
    <div>
      <Link to={ link } onClick={ async () => { if (title === 'Sair') await localStorage.clear(); } }>
        <button data-testid={ test } type="button">
          <p>{`${title}`}</p>
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
