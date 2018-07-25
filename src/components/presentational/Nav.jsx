import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ name, href, style }) => (
  <a href={href} style={style}>
    {name}
  </a>
);
Nav.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default Nav;
