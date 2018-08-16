import React, { Component } from 'react';
import { css } from 'emotion';

import HeaderCanvas from '../presentational/HeaderCanvas';


const src = {
  srcLocation: 'https://s3-us-west-1.amazonaws.com/aforest-web/media/images/header/home',
  srcStandard: 'https://s3-us-west-1.amazonaws.com/aforest-web/media/images/header/home/home_page@1x.jpg',
  srcName: 'home_page',
  srcType: 'jpg',
  srcSizes: ['1x', '2x'],
};

const styles = {
  container: css({
  }),
  canvas: css({
  }),
};

export default class HeaderCanvasContainer extends Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
    this.state = {
      image: src,
      id: 'header_img',
      width: 0,
    };
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    this.draw();
  }

  componentWillUpdate() {
    this.draw();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const d = document;
    const { documentElement } = d;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    this.setState({ width });
  }

  draw() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      // alert(img);

      // TODO: Determine the sizing and resolution of the images that
      // will be drawn over the canvas.
      // The scale factors are going to change based on the picture and
      // the resolution which it is saved at.
      // It may be worth abstracting this function to allow for the
      // scaling factor to be changed, or to make the
      // images work with * 1 scale. One advantage may be retrieving
      // different image sizes, however this can be
      // done by requesting the screen size and determining the images
      // based on that.

      // Choose image scaling.


      const percentOfScreen = 0.65;

      const { width } = this.state;

      const scale = (width * percentOfScreen) / img.width;

      ctx.canvas.width = width * percentOfScreen;
      ctx.canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
    };

    const { image } = this.state;
    img.src = image.srcStandard;
  }

  render() {
    const { image } = this.state;
    const { id } = this.state;

    return (
      <div className={styles.container}>
        <canvas height="3000" ref={this.canvasRef}>
          <HeaderCanvas
            id={id}
            src={image}
            alt="Abstract artwork by Alexandra Forest"
          />
        </canvas>
      </div>
    );
  }
}
