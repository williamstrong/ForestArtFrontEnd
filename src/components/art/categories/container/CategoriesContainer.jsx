import React from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import CategoryBox from '../presentational/CategoryBox';

import { categories } from '../../constants/Navigation';

const styles = {
  container: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  }),
};

const CategoiesContainer = (props) => {
  const { match } = props;
  return (
    <div className={styles.container}>
      { categories.map(category => (
        <CategoryBox
          key={category.key}
          match={match}
          category={category.category}
          name={category.name}
        />))}
    </div>
  );
};

CategoiesContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CategoiesContainer;
