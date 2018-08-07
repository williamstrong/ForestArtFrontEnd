import React from 'react';
import { css } from 'emotion';

import CategoiesContainer from './container/CategoriesContainer';
import NavBar from '../../shared/nav/NavBar';
import { pages, name } from '../NavigationConstants';

const navPositionStyle = css({
  textAlign: 'center',
  padding: '10%',
});

const Categories = ({ match }) => (
  <div>
    <div>
      <NavBar name={name} pages={pages} positionStyle={navPositionStyle} />
    </div>
    <CategoiesContainer match={match} />
  </div>
);

export default Categories;
