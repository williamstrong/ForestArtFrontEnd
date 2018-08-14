import React from 'react';
import { css } from 'emotion';

import CategoiesContainer from './container/CategoriesContainer';
import ArtNav from '../nav/ArtNav';

const navPositionStyle = css({
  textAlign: 'center',
  padding: '10%',
});

const Categories = ({ match }) => (
  <div>
    <ArtNav />
    <CategoiesContainer match={match} />
  </div>
);

Categories.propTypes = {

};

export default Categories;
