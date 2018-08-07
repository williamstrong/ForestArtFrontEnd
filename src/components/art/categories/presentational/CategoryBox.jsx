import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

const styles = {
  box: css({
    textAlign: 'center',
    width: 300,
    height: 300,
  }),
};

const CategoryBox = ({
  match, name, category, image,
}) => (
  <div className={styles.box}>
    <Link to={`${match.url}/${category}`}>
      { name }
    </Link>
  </div>
);

CategoryBox.propTypes = {
  match: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CategoryBox;
