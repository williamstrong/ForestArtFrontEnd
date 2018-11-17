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

const createNavs = (pages: Array<Page>) => {
  const pagesWithStyle = pages.map((e: Page, i: number) => {
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

interface Page {
  name: string;
  href: string;
  style?: string;
}

export interface NavBarProps {
  name: string;
  pages: Array<Page>;
  positionStyle?: string;
}

const NavBar = (props: NavBarProps) => (
  <div className={props.positionStyle}>
    <Name name={props.name} className={styles.name} />
    <nav className={styles.navStyle}>
      { createNavs(props.pages) }
    </nav>
  </div>
);

NavBar.defaultProps = {
  positionStyle: styles.divStyle,
};

export default NavBar;
