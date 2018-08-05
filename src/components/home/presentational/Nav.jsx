import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ name, href, style }) => (
  <Link to={href} style={style}>
    {name}
  </Link>
);
Nav.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default Nav;
