import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import TrainingPage from './components/training/TrainingPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/train" component={TrainingPage} />
    <Route path="*" component={NotFound}/>
  </Route>
);
