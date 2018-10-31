import { Link } from 'react-router-dom';
import * as React from 'react';

export interface NavProps {
  name: string;
  href: string;
  className: string;
};

const Nav = (props: NavProps) => (
  <Link to={props.href} className={props.className}>
    {props.name}
  </Link>
);

export default Nav;
