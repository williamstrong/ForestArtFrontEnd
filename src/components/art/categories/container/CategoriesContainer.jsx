import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';

import CategoryBox from '../presentational/CategoryBox';

const styles = {
  container: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  }),
};

const query = () => (
  JSON.stringify({ query: '{ categories { id name image { name sourceStandard altText } } }' })
);

export default class CategoiesContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchCategoryImages({ images: [] });
    this.state = {
      categories: [],
    };
  }

  fetchCategoryImages = () => (
    fetch('/graphql/?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: query(),
    })
      .then(r => r.json())
      .then((data) => {
        const { data: { categories } } = data;
        this.setState({ categories });
      })
  )

  render() {
    const { categories } = this.state;
    const { match: { url } } = this.props;
    return (
      <div className={styles.container}>
        { categories.map((category) => {
          const { image } = category;
          return (
            <CategoryBox
              key={category.id}
              url={url}
              category={category.name}
              name={image.name}
              image={image.sourceStandard}
              altText={image.altText}
            />);
        })
        }
      </div>
    );
  }
}

CategoiesContainer.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
