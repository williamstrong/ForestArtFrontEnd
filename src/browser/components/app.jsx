import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Route component={Routes} />
  </BrowserRouter>
);

export default App;
