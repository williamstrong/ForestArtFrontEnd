/*  @flow */

import { css } from 'emotion';

export const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Art',
    href: '/art',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const name = 'About Me';

export const href = '/aboutme';

export const navPosition = css({
  padding: '5em',
  display: 'inline-block',
});
