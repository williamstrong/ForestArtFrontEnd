import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Nav from '../../../shared/nav/Nav';

const styles = {
  link: css({

  }),
};

const CategoryNav = ({ name, href }) => (
  <div>
    <Nav name={name} href={href} className={styles.link} />
  </div>
);

CategoryNav.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CategoryNav;
