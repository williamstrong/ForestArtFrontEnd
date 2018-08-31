// @flow

import React from 'react';

type Props = {
  description: string,
  imageSrc: string,
  imageAlt: string,
};

const Profile = (props: Props) => {
  const { description, imageSrc, imageAlt } = props;
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} />
      <p>
        {description}
      </p>
    </div>
  );
};

export default Profile;
