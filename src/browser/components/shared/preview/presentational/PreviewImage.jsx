// @flow

import React from 'react';
import { css } from 'emotion';

import ImageText from './ImageText';

import getImageSource from '../../../../util/Source';

// Styles

const textDefaults = css(
  {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',

    textAlign: 'left',

    zIndex: 1,
    paddingLeft: '10%',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    // background: '#e3e1dc99',

    transition: 'all 1s linear',
  },
);

const invisibleText = css(
  {
    visibility: 'hidden',
    opacity: 0,
    transition: '1s',
    transform: 'translateY(1em)',
  },
  textDefaults,
);

const visibleText = css(
  {
    visibility: 'visible',
    opacity: 1,
    transform: 'translateY(0em)',
  },
  textDefaults,
);

const imageDefaults = css({
  maxWidth: '100%',
  maxHeight: '100%',

  transition: 'all 0.5 linear',
});

const visibleImage = css(
  {
    opacity: 1,
  },
  imageDefaults,
);

const invisibleImage = css(
  {
    opacity: 0.2,
  },
  imageDefaults,
);

const styles = {
  container: css({
    '.text': invisibleText,
    '.image': visibleImage,

    position: 'relative',

    ':hover,:focus': {

      '.text': visibleText,
      '.image': invisibleImage,
    },
  }),
};

type Props = {
  name: string,
  sourceStandard: string,
  description: string,
  altText?: string,
};

const PreviewImage = (props: Props) => (
  <div className={styles.container}>
    <ImageText className='text' name={props.name} description={props.description} />
    <img className='image' src={getImageSource(props.sourceStandard)} alt={props.altText} />
  </div>
);

export default PreviewImage;
