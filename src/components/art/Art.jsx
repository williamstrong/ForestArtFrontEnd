import React from 'react';
import { css } from 'emotion';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../shared/nav/NavBar';
import Footer from '../shared/footer/Footer';
import Categories from './categories/Categories';
import Category from './category/Category';

const navPositionStyle = css({
  textAlign: 'center',
  padding: '10%',
});

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Me',
    href: '/aboutme',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const name = 'Art';

const Art = ({ match }) => (
  <section>
    <div>
      <NavBar name={name} pages={pages} positionStyle={navPositionStyle} />
    </div>
    <Switch>
      <Route exact path={`${match.url}`} component={Categories} />
      <Route path={`${match.url}/:category`} component={Category} />
    </Switch>
    <Footer />
  </section>
);

export default Art;
