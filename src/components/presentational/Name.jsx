import React from 'react';
import PropTypes from 'prop-types';


const Name = ({ name, style }) => (
  <p style={style}>
    {name}
  </p>
);

Name.propTypes = {
  style: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default Name;