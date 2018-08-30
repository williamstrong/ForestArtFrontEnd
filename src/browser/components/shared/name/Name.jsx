import React from 'react';
import PropTypes from 'prop-types';


const Name = ({ name, className }) => (
  <p className={className}>
    {name}
  </p>
);

Name.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Name;
