import React from 'react';
import { css } from 'emotion';
import { RouteComponentProps } from 'react-router-dom';

import CategoiesContainer from './container/CategoriesContainer';
import ArtNav from '../nav/ArtNav';

export interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => (
  <div>
    <ArtNav />
    <CategoiesContainer {...props} />
  </div>
);

export default Categories;
