import React from 'react';
import PropTypes from 'prop-types';

const ImageBox = ({ alt, src }) => (
  <img src={src} alt={alt} height="300" width="300" />
);

ImageBox.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageBox;
