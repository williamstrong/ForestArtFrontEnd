import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AppContainer from './components/AppContainer';

ReactDOM.render((
  <BrowserRouter>
    <Route component={AppContainer} />
  </BrowserRouter>
), document.getElementById('root'));
