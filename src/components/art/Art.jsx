import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../shared/footer/Footer';
import Categories from './categories/Categories';
import Category from './category/Category';
import Piece from './piece/Piece';

const Art = ({ match }) => (
  <section>
    <Switch>
      <Route exact path={`${match.url}`} component={Categories} />
      <Route path={`${match.url}/:category/:piece`} component={Piece} />
      <Route path={`${match.url}/:category`} component={Category} />
    </Switch>
    <Footer />
  </section>
);

export default Art;
