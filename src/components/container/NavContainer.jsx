import React, { Component } from 'react';
import Nav from '../presentational/Nav';
import Name from '../presentational/Name';

const styles = {
  divStyle: {
    position: 'absolute',
    left: '5em',
    zIndex: '100',
    paddingTop: '30%',
    display: 'inline-block',
  },
  navStyle: {
    textAlign: 'center',
  },
  name: {
    font: 'bold 7em Relation',
    marginBottom: '0',
    marginTop: '0',
  },
  navTextStyle: {
    color: 'black',
    textDecoration: 'none',
    font: '2em "Europa-Light"',
  },
  navLeft: {
    borderRight: '1px solid black',
    paddingRight: '1em',
  },
  navCenter: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  navRight: {
    borderLeft: '1px solid black',
    paddingLeft: '1em',
  },
};

export default class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {
          name: 'About Me',
          href: '/aboutme',
          style: { ...styles.navLeft, ...styles.navTextStyle },
        },
        {
          name: 'Art',
          href: '/art',
          style: { ...styles.navCenter, ...styles.navTextStyle },
        },
        {
          name: 'Contact',
          href: '/contact',
          style: { ...styles.navRight, ...styles.navTextStyle },
        },
      ],
    };
  }

  render() {
    const { pages } = this.state;
    const navs = pages.map(page => <Nav name={page.name} href={page.href} style={page.style} />);
    return (
      <div style={styles.divStyle}>
        <Name name="Alexandra Forest" style={styles.name} />
        <nav style={styles.navStyle}>
          { navs }
        </nav>
      </div>
    );
  }
}
