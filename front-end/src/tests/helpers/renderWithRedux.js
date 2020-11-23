import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import reducer from '../../redux/reducers';

const renderWithReduxRouter = (
  ui, {
    initialState = {},
    store = createStore(reducer, initialState),
  } = {},
) => {
  const component = <Provider store={ store }>{ui}</Provider>;
  const history = createMemoryHistory();
  return {
    ...render(<Router history={ history }>{component}</Router>),
    initialState,
    history,
  };
};

export default renderWithReduxRouter;
