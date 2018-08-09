import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = {
  container: css({
    height: 300,
    width: 300,
  }),
};

const PreviewImage = ({ name, src, description }) => (
  <div className={styles.container}>
    <p>
      {name}
    </p>
    <p>
      {src}
    </p>
    <p>
      {description}
    </p>
  </div>
);

PreviewImage.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewImage;
