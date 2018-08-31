import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Nav from '../../../shared/nav/Nav';

const styles = {
  link: css({
    paddingLeft: '1em',
    paddingRight: '1em',
    color: 'black',
    textDecoration: 'none',
    font: '1em Europa-Light',
  }),
};

const CategoryLink = ({
  name, href,
}) => (
  <Nav
    name={name}
    href={href}
    className={styles.link}
  />
);

CategoryLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CategoryLink;