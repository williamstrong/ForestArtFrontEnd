import React, { Component } from 'react';

import ImageBox from '../presentational/ImageBox';
import Title from '../presentational/Title';

import AbstractHeader from '../../../img/header/abstract/home_page.png';

export default class PreviewContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Title name="My latest work" />
        <div id="preview">
          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />

          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />

          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />
          <ImageBox name="testImage" src={AbstractHeader} />
        </div>
      </div>
    );
  }
}
