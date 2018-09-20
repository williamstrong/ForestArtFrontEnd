// @flow

import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import getImageSource from '../../../../util/Source';

const styles = {
  box: css({
    textAlign: 'center',
    position: 'relative',
    marginBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
  }),
  image: css({
    maxWidth: 300,
    maxHeight: 300,
    opacity: 0.6,
  }),
  text: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    font: '2em "Europa-Light"',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
  linkText: css({
    textDecoration: 'none',
    color: 'black',
  }),
};

type Props = {
  url: string,
  name: string,
  category: string,
  image: string,
  altText: string,
};

const CategoryBox = (props: Props) => (
  <div className={styles.box}>
    <Link className={styles.linkText} to={`${props.url}/${props.category}`}>
      <picture>
        <img
          className={styles.image}
          src={getImageSource(props.image)}
          alt={props.altText}
        />
      </picture>
      <p className={styles.text}>
        {props.category}
      </p>
    </Link>
  </div>
);

export default CategoryBox;
