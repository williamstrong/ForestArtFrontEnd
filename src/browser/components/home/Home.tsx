import React from 'react';
import { css } from 'emotion';

import Footer from '../shared/footer/Footer';
import HeaderCanvasContainer from './container/HeaderCanvasContainer';
import NavBar from '../shared/nav/NavBar';
import PreviewContainer from '../shared/preview/container/PreviewContainer';

const styles = {
  container: css({
  }),
};

const pages = [
  {
    name: 'About Me',
    href: '/aboutme',
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

const Home = () => (
  <div className={styles.container}>
    <NavBar name="Alexandra Forest" pages={pages} />
    <PreviewContainer />
    <Footer />
  </div>
);

export default Home;
