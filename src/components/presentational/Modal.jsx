import React from 'react';
import PropTypes from 'prop-types';

const modalStyle = {
  display: 'absolute',
};

const Modal = ({
  id, name, src, alt,
}) => (
  <div style={modalStyle}>
    <h3>
      {name}
    </h3>
    <p>
      {id}
    </p>
    <img src={src} alt={alt} />
  </div>
);

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
