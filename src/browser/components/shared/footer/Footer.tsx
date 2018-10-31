import React from 'react';
import { css } from 'emotion';

import Nav from '../nav/Nav';

const altText = "Alexandra Forest's instagram page.";
const igLink = 'http://www.instagram.com/aforestart';
const igLogo = 'https://s3-us-west-1.amazonaws.com/aforest-web/media/images/assets/glyph-logo_May2016.png';

const styles = {
  footer: css({
    marginTop: '5%',
    paddingTop: '5%',
    width: '100%',
    textAlign: 'center',
    background: 'grey',
  }),
  nameText: css({
    fontFamily: '"relation-two", "sans-serif"',
    fontWeight: 700,
    fontSize: '2em',
    margin: 0,
  }),
  text: css({
    margin: '15',
    color: 'black',
    font: '2em Europa-Light',
  }),
  navText: css(`
    textDecoration: 'none',
    color: 'black',

    margin: '1em',

    transition: 'all 0.3s linear',
    ':hover': {
      opacity: '0.8',
      textShadow: '1px 1px #0000003B',
    },
  `),
  instagram: css({
    margin: '15px',
    height: '30px',
    width: '30px',
  }),
  copyright: css({
    margin: 0,
  }),
};

const year = new Date().getFullYear();
const copyrightText = `Copyright © ${year} Alexandra Forest`;

const pages = [
  {
    key: 0,
    name: 'About Me',
    href: '/aboutme',
    style: '',
  },
  {
    key: 1,
    name: 'Art',
    href: '/art',
    style: '',
  },
  {
    key: 2,
    name: 'Contact',
    href: '/contact',
    style: '',
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.nameText}>
       A Forest Art
    </p>
    <nav>
      {pages.map(page => (
        <Nav
          key={page.key}
          name={page.name}
          href={page.href}
          className={styles.navText}
        />))}
    </nav>
    <a href={igLink}>
      <img src={igLogo} alt={altText} className={styles.instagram} />
    </a>
    <p className={styles.copyright}>
      {copyrightText}
    </p>
  </footer>
);

export default Footer;
