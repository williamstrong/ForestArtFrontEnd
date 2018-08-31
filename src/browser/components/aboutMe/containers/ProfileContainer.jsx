import React, { Component } from 'react';

import Profile from '../presentational/Profile';

const fetchProfileData = () => (
  {
    description: 'Abc 123',
    imageSrc: '',
    imageAlt: 'Alexandra',
  }
);

type Props = {
  /*
  description?: string,
  imageSrc?: string,
  imageAlt: string,
  */
}

export default class ProfileContainer extends Component<Props> {

  static defaultProps = {
    ...fetchProfileData(),
  }

  render() {
    const { description, imageSrc, imageAlt } = this.props;
    return (
      <Profile description={description} imageSrc={imageSrc} imageAlt={imageAlt} />
    );
  }
}
