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
    margin: '10%',
  }),
  textContainer: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',

    margin: '10%',
  }),
  imageContainer: css({
    height: '600',
    width: '600',
  }),
  title: css({}),
  description: css({}),
};

export interface PieceProps {
  name: string;
  sourceLarge: string;
  description: string;
};

const Piece = (props: PieceProps) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <picture>
        <img height="600" width="600" src={getImageSource(props.sourceLarge)} alt={props.description} />
      </picture>
    </div>
    <div className={styles.textContainer}>
      <p className={styles.title}>
        { name }
      </p>
      <p className={styles.description}>
        { props.description }
      </p>
    </div>
  </div>
);

export default Piece;
