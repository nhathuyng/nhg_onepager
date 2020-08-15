import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
