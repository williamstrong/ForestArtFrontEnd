import React, { Component } from "react";
import HeaderCanvas from "../presentational/HeaderCanvas.jsx";

import '../../styles/main.css';
import AbstractHeader from '../../../img/header/abstract/home_page.png';

export default class HeaderCanvasContainer extends Component {

    constructor() {
        super();
        this.state = {
            image: AbstractHeader,
            id: "header_img"
        };
    }

    componentDidMount() {
        this.draw();
    }

    // Get image url from API.

    render() {
        const {image} = this.state;
        const {id} = this.state;
        return (
            <canvas ref="canvas" id="header_canvas">
                <HeaderCanvas
                    id={id}
                    src={image}
                    alt={"Abstract artwork by Alexandra Forest"}
                />
            </canvas>
        );
    }

    draw() {
        const ctx = this.refs.canvas.getContext('2d');
        const img = new Image();
        img.onload = function () {
            // alert(img);
            resizeCanvasToDisplaySize(ctx.canvas);

            img.style.width = ctx.canvas.width;
            img.style.height = 'auto';

            ctx.canvas.height = img.height;

            // TODO: Determine the sizing and resolution of the images that will be drawn over the canvas.
            // The scale factors are going to change based on the picture and the resolution which it is saved at.
            // It may be worth abstracting this function to allow for the scaling factor to be changed, or to make the
            // images work with * 1 scale. One advantage may be retrieving different image sizes, however this can be
            // done by requesting the screen size and determining the images based on that.
            const blank_space = ctx.canvas.width - (img.width * .6);
            ctx.drawImage(img, blank_space, 0, img, img);
        };
        img.src = this.state.image;


    }
}

function resizeCanvasToDisplaySize(canvas) {
    canvas.width = document.documentElement.clientWidth * .21;
}
