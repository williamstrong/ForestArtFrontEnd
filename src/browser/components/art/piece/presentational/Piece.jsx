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

const Piece = ({ name, sourceLarge, description }) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <picture>
        <img height="600" width="600" src={getImageSource(sourceLarge)} alt={description} />
      </picture>
    </div>
    <div className={styles.textContainer}>
      <p className={styles.title}>
        { name }
      </p>
      <p className={styles.description}>
        { description }
      </p>
    </div>
  </div>
);

Piece.propTypes = {
  name: PropTypes.string.isRequired,
  sourceLarge: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Piece;
