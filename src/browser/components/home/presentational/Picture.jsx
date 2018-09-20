// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  id: string,
  src: string,
  alt: string,
}

const Picture = (props: Props) => (
  <picture>
    <img
      className="hidden"
      id={props.id}
      alt={props.alt}
      src={props.src}
    />
  </picture>
);

export default Picture;
