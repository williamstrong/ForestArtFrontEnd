import React from 'react';
import PropTypes from 'prop-types';

export interface HeaderProps {
  styles: string;
};

const Header = (props: HeaderProps) => (
  <div className={props.styles} />
);

export default Header;
