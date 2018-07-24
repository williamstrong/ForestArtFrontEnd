import React from 'react';
import PropTypes from 'prop-types';

const ImageBox = ({ name, alt, src }) => (
  <div id={name}>
    <img src={src} alt={alt} height="300" width="300" />
  </div>

);

ImageBox.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageBox;
