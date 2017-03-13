import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getData } from './actions/dataActions';
import { getAvailableTopics } from './actions/topicActions';
import configureStore from './store/configureStore';

import routes from './routes';
import 'file?name=[name].[ext]!./index.html'; // eslint-disable-line
import './styles/main.scss';

const store = configureStore();
store.dispatch(getAvailableTopics());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#app')
);
