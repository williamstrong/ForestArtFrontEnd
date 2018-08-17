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

      '#textContainer': {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        opacity: '1',

        margin: '10%',

        height: 'auto',
        width: 'auto',

        transition: 'all 1s linear',
      },
    },
  }),
  imageContainer: css({
    height: '300',
    width: '300',

  }),
  textContainer: css({
    opacity: '0',
    transition: 'all 1s linear',

    height: '0',
    width: '0',
  }),
};

const PreviewImage = ({ name, sourceStandard, description }) => (
  <div className={styles.container}>
    <div className={styles.textContainer} id="textContainer">
      <p>
        {name}
      </p>
      <p>
        {description}
      </p>
    </div>
    <div className={styles.imageContainer} id="imageContainer">
      <img src={`https://s3-us-west-1.amazonaws.com/aforest-web/media/${sourceStandard}`} alt={description} height="300" width="300" />
    </div>
  </div>
);

PreviewImage.propTypes = {
  name: PropTypes.string.isRequired,
  sourceStandard: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewImage;
