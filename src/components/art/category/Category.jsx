import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import CategoryNavigationContainer from './container/CategoryNavigationContainer';
import PreviewContainer from '../../shared/preview/container/PreviewContainer';
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

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { match: { params: { category } } } = this.props;
    return (
      <div>
        {/* <HeaderImage /> */}
        <div className={styles.headerImage} />
        {/* End */}
        <NavBar positionStyle={navPosition} pages={pages} name={name} />
        <CategoryNavigationContainer category={category} />
        <PreviewContainer category={category} />
      </div>
    );
  }
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }),
  }).isRequired,
};
