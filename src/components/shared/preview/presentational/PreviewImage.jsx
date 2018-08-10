import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = {
  container: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignContent: 'center',

    paddingBottom: '10%',

    '&:hover': {
      div: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
      },
    },
  }),
  imageContainer: css({
    height: '300',
    width: '300',
  }),
  info: css({
    display: 'none',
    margin: '10%',
  }),
};

const PreviewImage = ({ name, src, description }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <p>
        {name}
      </p>
      <p>
        {src}
      </p>
      <p>
        {description}
      </p>
    </div>
    <div className={styles.imageContainer}>
      <img src={src} alt={description} height="300" width="300" />
    </div>
  </div>
);

PreviewImage.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewImage;
