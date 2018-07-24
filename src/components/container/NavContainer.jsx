import React, { Component } from 'react';
import Nav from '../presentational/Nav';
import Name from '../presentational/Name';

const styles = {
  divStyle: {
    position: 'absolute',
    left: '10em',
    zIndex: '100',
    paddingTop: '30%',
    display: 'inline-block',
  },
  navStyle: {
    textAlign: 'center',
  },
  name: {
    font: 'bold 7em Relation',
  },
};

export default class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {
          name: 'About Me',
          href: '/about_me',
          id: 'nav_left_side',
        },
        {
          name: 'Art',
          href: '/art',
          id: 'nav_center',
        },
        {
          name: 'Contact',
          href: '/contact',
          id: 'nav_right_side',
        },
      ],
    };
  }

  render() {
    const { pages } = this.state;
    const navs = pages.map(page => <Nav name={page.name} href={page.href} id={page.id} />);
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
