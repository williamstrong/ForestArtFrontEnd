import React from 'react';
import { css } from 'emotion';

import CategoryNavigationContainer from './container/CategoryNavigationContainer';
import NavBar from '../../shared/nav/NavBar';

import { pages, name } from '../NavigationConstants';

const navPosition = css({
  padding: '5em',
  display: 'inline-block',
});

const styles = {
  headerImage: css({
    width: '100%',
    height: '300',
  }),
};

const Category = ({ match }) => (
  <div>
    {/* <HeaderImage /> */}
    <div className={styles.headerImage} />
    {/* End */}
    <NavBar positionStyle={navPosition} pages={pages} name={name} />
    <CategoryNavigationContainer category={match.params.category} />
  </div>
);

export default Category;
