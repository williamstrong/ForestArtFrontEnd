import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ id, src, alt }) => (
  <picture>
    <img
      className="hidden"
      id={id}
      alt={alt}
      src={src}
    />
  </picture>
);
Image.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
