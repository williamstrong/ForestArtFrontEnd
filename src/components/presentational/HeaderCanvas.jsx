import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ id, src, alt }) => (
  <img
    className="hidden"
    id={id}
    alt={alt}
    src={src}
  />
);
Image.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
