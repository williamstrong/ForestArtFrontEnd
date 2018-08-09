import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import CategoryNavigationContainer from './container/CategoryNavigationContainer';
import CategoryPreviewContainer from './container/CategoryPreviewContainer';
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
      category: props.match.params.category,
    };

    this.onCategoryChange = (newCategory) => {
      this.setState({
        category: newCategory,
      });
    };
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        {/* <HeaderImage /> */}
        <div className={styles.headerImage} />
        {/* End */}
        <NavBar positionStyle={navPosition} pages={pages} name={name} />
        <CategoryNavigationContainer category={category} onCategoryChange={this.onCategoryChange} />
        <CategoryPreviewContainer category={category} />
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
