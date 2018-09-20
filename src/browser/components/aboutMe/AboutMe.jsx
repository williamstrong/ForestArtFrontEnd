// @flow

import React from 'react';

import AboutMeNav from './nav/AboutMeNav';
import ProfileContainer from './containers/ProfileContainer';
import Footer from '../shared/footer/Footer';

const AboutMe = () => (
  <div>
    <AboutMeNav />
    <ProfileContainer />
    <Footer />
  </div>
);

export default AboutMe;
