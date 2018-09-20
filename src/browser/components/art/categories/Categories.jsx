import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import CategoiesContainer from './container/CategoriesContainer';
import ArtNav from '../nav/ArtNav';

const Categories = ({ match }) => (
  <div>
    <ArtNav />
    <CategoiesContainer match={match} />
  </div>
);

Categories.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Categories;
