import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Register } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <Register />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
