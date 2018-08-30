import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({
  name, href, className,
}) => (
  <Link to={href} className={className}>
    {name}
  </Link>
);

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Nav;
