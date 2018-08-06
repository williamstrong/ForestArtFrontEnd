import React from 'react';
import { css } from 'emotion';
import InstagramLogo from '../../../../img/brand_assets/instagram_logo.png';

import Nav from '../nav/Nav';

const altText = "Alexandra Forest's instagram page.";
const igLink = 'http://www.instagram.com/aforestart';

const styles = {
  footer: css({
    width: '100%',
    background: 'grey',
  }),
  flex: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  }),
  text: css({
    margin: '15',
    color: 'white',
    font: '2em Europa-Light',
  }),
  link: css({
    margin: '15',
    flexBasis: 'auto',
  }),
  instagram: css({
    height: '30px',
    width: '30px',
  }),
  copyright: css({

  }),
};
const year = new Date().getFullYear();
const copyrightText = `Copyright © ${year} Alexandra Forest`;

const pages = [
  {
    name: 'About Me',
    href: '/aboutme',
    style: { },
  },
  {
    name: 'Ar',
    href: '/art',
    style: { },
  },
  {
    name: 'Contact',
    href: '/contact',
    style: { },
  },
];

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.flex}>
      <p className={styles.text}>
      A Forest Art
      </p>
      <nav>
        {pages.map(page => <Nav name={page.name} href={page.href} style={page.style} />)}
      </nav>
      <a href={igLink} className={styles.link}>
        <img src={InstagramLogo} alt={altText} className={styles.instagram} />
      </a>
    </div>
    <p className={styles.copyright}>
      {copyrightText}
    </p>
  </div>
);

export default Footer;
