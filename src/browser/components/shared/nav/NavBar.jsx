import React from 'react';
import { css, cx } from 'emotion';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Name from '../name/Name';

const textPositions = [
  css({
    borderRight: '1px solid black',
    paddingRight: '1em',
  }),
  css({
    paddingLeft: '1em',
    paddingRight: '1em',
  }),
  css({
    borderLeft: '1px solid black',
    paddingLeft: '1em',
  }),
];

const styles = {
  navStyle: css({
    textAlign: 'center',
  }),
  divStyle: css({
  }),
  name: css({
    fontFamily: '"relation-two", "sans-serif"',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '3em',
    margin: '5% auto',
    textAlign: 'center',
  }),
  navText: css({
    color: 'black',
    textDecoration: 'none',
    font: '1em "Europa-Light"',
  }),
};

const createNavs = (pages) => {
  const pagesWithStyle = pages.map((e, i) => {
    e.style = cx(textPositions[i], styles.navText);
    return e;
  });
  return pagesWithStyle.map(page => (
    <Nav
      key={page.name}
      name={page.name}
      href={page.href}
      className={page.style}
    />));
};

const NavBar = ({ name, pages, positionStyle }) => (
  <div className={positionStyle}>
    <Name name={name} className={styles.name} />
    <nav className={styles.navStyle}>
      { createNavs(pages) }
    </nav>
  </div>
);

NavBar.defaultProps = {
  positionStyle: styles.divStyle,
};

NavBar.propTypes = {
  name: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
  positionStyle: PropTypes.string,
};

export default NavBar;
