import React from 'react';
import PropTypes from 'prop-types';

const Piece = ({ name, src, description }) => (
  <div>
    <p>
      { name }
    </p>
    <p>
      { description }
    </p>
    <img src={src} alt={description} />
  </div>
);

Piece.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Piece;
