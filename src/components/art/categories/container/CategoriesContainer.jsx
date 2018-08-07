import React from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import CategoryBox from '../presentational/CategoryBox';

const categories = [
  {
    key: 0,
    category: 'abstract',
    name: 'Abstract',
  },
  {
    key: 1,
    category: 'flowers',
    name: 'Flowers',
  },
  {
    key: 2,
    category: 'around-the-world',
    name: 'Around the World',
  },
  {
    key: 3,
    category: 'other',
    name: 'Other',
  },
];

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
