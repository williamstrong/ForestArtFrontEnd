import React from 'react';
import { css } from 'emotion';

import Footer from '../shared/footer/Footer';
import HeaderCanvasContainer from './container/HeaderCanvasContainer';
import NavBar from '../shared/nav/NavBar';
import PreviewContainer from '../shared/preview/container/PreviewContainer';

const headerStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10%',
});


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
  <div>
    <div className={headerStyle}>
      <NavBar name="Alexandra Forest" pages={pages} />
      <HeaderCanvasContainer />
    </div>
    <div>
      <PreviewContainer />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default Home;
