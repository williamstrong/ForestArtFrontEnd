import React from 'react';

import NavBar from '../../shared/nav/NavBar';

import { pages, name } from '../NavigationConstants';

const Category = () => (
  <NavBar pages={pages} name={name} />
);

export default Category;
