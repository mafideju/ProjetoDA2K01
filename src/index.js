'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.js';
import { AppContainer } from 'react-hot-loader';

const renderApp = NextApp => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}
renderApp(NextApp);

if (module.hot) {
  module.hot.accept('./container/App', () => {
    const NextApp = require('./container/App').default;
    renderApp(NextApp);
  })
}