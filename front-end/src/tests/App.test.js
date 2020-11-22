import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from '../App';

describe('Testando App.js / Rotas', () => {
  it('Testando Login', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    const { container } = render (
      <Router history={history}>
        <App />
      </Router>
    )

    expect(container.innerHTML).toMatch(/Login/);
  });
});
