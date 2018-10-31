import React from 'react';
import PropTypes from 'prop-types';

export interface NameProps { name: string; className: string; }

const Name = (props: NameProps) => (
  <p className={props.className}>
    {props.name}
  </p>
);

export default Name;
