import React from 'react';
import { css } from 'emotion';

const styles = {
  container: css({
    textAlign: 'center',
    marginBottom: '10%',
    marginLeft: '10%',
    marginRight: '10%',
  }),
  image: css({
    maxWidth: '100%',
    maxHeight: '100%',
  }),
  text: css({
  }),
};

export interface ProfileProps {
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const Profile = (props: ProfileProps) => {
  const { description, imageSrc, imageAlt } = props;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      <p className={styles.text}>
        {description}
      </p>
    </div>
  );
};

export default Profile;
