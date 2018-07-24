import React from 'react';
import PropTypes from 'prop-types';

const ImageBox = ({ alt, src, onClick }) => (
  <button type="button" onClick={onClick}>
    <img src={src} alt={alt} height="300" width="300" />
  </button>
);

ImageBox.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageBox;
