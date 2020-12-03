import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProviderTrybeer from './context/index';

ReactDOM.render(
  <ProviderTrybeer>
    <App />
  </ProviderTrybeer>,
  document.getElementById('root'),
);
