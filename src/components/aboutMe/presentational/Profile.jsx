import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ description, imageSrc, imageAlt }) => (
  <div>
    <img src={imageSrc} alt={imageAlt} />
    <p>
      {description}
    </p>
  </div>
);

Profile.propTypes = {
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Profile;
