import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import Footer from '../shared/footer/Footer';
import Categories from './categories/Categories';
import Category from './category/Category';
import Piece from './piece/Piece';

interface ArtProps extends RouteComponentProps {}

const Art = (props: RouteComponentProps) => (
  <section>
    <Switch>
      <Route exact path={`${props.match.url}`} component={Categories} />
      <Route path={`${props.match.url}/:category/:piece`} component={Piece} />
      <Route path={`${props.match.url}/:category`} component={Category} />
    </Switch>
    <Footer />
  </section>
);

export default Art;
