// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import getImageSource from '../../../../util/Source';

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
  text: css({
    textDecoration: 'none',
  }),
};

type Props = {
  name: string,
  sourceStandard: string,
  description: string,
  altText?: string,
}

const PreviewImage = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.textContainer} id="textContainer">
      <p className={styles.text}>
        {props.name}
      </p>
      <p className={styles.text}>
        {props.description}
      </p>
    </div>
    <div className={styles.imageContainer} id="imageContainer">
      <img src={getImageSource(props.sourceStandard)} alt={props.altText} height="300" width="300" />
    </div>
  </div>
);

export default PreviewImage;
