import React, { Component } from 'react';
import { css, cx } from 'emotion';

import CategoryLink from '../presentational/CategoryLink';

import { categories } from '../../constants/Navigation';

const styles = {
  navBarBase: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    alignItems: 'center',

    width: '50%',
    height: '5em',
    textAlign: 'center',
    backgroundColor: 'gray',
  }),
  navBarPosition: css({
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
};

export interface CategoryNavigationProps {
  styleBase: string;
  stylePosition: string;
};

export default class CategoryNavigation extends Component<CategoryNavigationProps> {
  static defaultProps = {
    styleBase: styles.navBarBase,
    stylePosition: styles.navBarPosition
  };

  constructor(props: CategoryNavigationProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { styleBase, stylePosition } = this.props;
    return (
      <div className={cx(styleBase, stylePosition)}>
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

