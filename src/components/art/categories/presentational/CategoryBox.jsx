import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import getImageSource from '../../../../util/Source';

const styles = {
  box: css({
    textAlign: 'center',
    width: 300,
    height: 300,
  }),
};

const CategoryBox = ({
  url,
  name,
  category,
  image,
  altText,
}) => (
  <div className={styles.box}>
    <Link to={`${url}/${category}`}>
      { name }
      <picture>
        <img src={getImageSource(image)} alt={altText} />
      </picture>
    </Link>
  </div>
);

CategoryBox.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default CategoryBox;
