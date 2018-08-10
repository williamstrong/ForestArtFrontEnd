import React, { Component } from 'react';
import { css } from 'emotion';

import CategoryLink from '../presentational/CategoryLink';

import { categories } from '../../NavigationConstants';

const styles = {
  navBar: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    alignItems: 'center',

    width: '50%',
    height: '5em',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

    backgroundColor: 'gray',
  }),
};

export default class CategoryNavigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.navBar}>
        { categories.map(category => (
          <CategoryLink
            key={category.key}
            name={category.name}
            href={category.url}
            category={category.category}
          />
        ))}
      </div>
    );
  }
}
