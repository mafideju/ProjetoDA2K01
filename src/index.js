/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './container/App.js';
import './style/style.css';

const renderApp = (NextApp) => {
  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('root'),
  );
};
renderApp(App);

const NewApp = require('./container/App').default;

if (module.hot) {
  module.hot.accept('./container/App', () => {
    renderApp(NewApp);
  });
}
