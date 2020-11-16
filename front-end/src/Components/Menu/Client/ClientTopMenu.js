import React from 'react';

function ClientTopMenu() {
  return (
    <div>
      <div>
        <button
          data-testid="top-hamburguer"
          type="button"
        >
          =
        </button>
        <h2 data-testid="top-title">TryBeer</h2>
      </div>
    </div>
  );
}

export default ClientTopMenu;
