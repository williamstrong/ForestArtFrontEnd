import React, { Component } from 'react';

import Profile from '../presentational/Profile';

const fetchProfileData = () => (
  {
    description: 'Abc 123',
    imageSrc: '',
    imageAlt: 'Alexandra',
  }
);

export default class ProfileContainer extends Component {
  constructor() {
    super();

    const profileData = fetchProfileData();
    this.state = {
      profileData,
    };
  }

  render() {
    const { profileData } = this.state;
    return (
      <Profile {...profileData} />
    );
  }
}
