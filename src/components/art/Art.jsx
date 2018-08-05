import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Categories from './Categories';
import Category from './container/Category';

const Art = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={Categories} />
    <Route path={`${match.url}/:category`} component={Category} />
  </Switch>
);

export default Art;
