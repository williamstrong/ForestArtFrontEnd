import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from '../../shared/nav/NavBar';

const pages = [
  {
    name: 'About Me',
    href: '/aboutme',
  },
  {
    name: 'Art',
    href: '/art',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const name = 'Art';

const Categories = ({ match }) => (
  <div>
    <p>
    Categories
    </p>
    <div>
      <NavBar name={name} pages={pages} />
      <Link to={`${match.url}/abstract`}>
        Abstract
      </Link>
      <Link to={`${match.url}/flowers`}>
        Flowers
      </Link>
      <Link to={`${match.url}/around-the-world`}>
        Around the World
      </Link>
      <Link to={`${match.url}/other`}>
        Other
      </Link>
    </div>
  </div>
);

export default Categories;
