import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getData } from './actions/dataActions';
import configureStore from './configureStore';

import routes from './routes';
import './styles/main.sass';

const store = configureStore();
store.dispatch(getData());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#app')
);