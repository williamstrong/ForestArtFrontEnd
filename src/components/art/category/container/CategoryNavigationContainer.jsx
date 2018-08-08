import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryNav from '../presentational/CategoryLink';

import { categories } from '../../NavigationConstants';

export default class CategoryNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: props.category,
    };
  }

  render() {
    const { currentCategory } = this.state;
    return (
      <div>
        { categories.map(category => (
          <CategoryNav name={category.name} href={category.url} />
        ))}
      </div>
    );
  }
}

CategoryNavigation.propTypes = {
  category: PropTypes.string.isRequired,
};
