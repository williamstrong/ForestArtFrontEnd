import React, { Component } from 'react';

import styles from '../../styles/preview.css';

import ImageBox from "../presentational/ImageBox.jsx";
import Title from "../presentational/Title.jsx";

import AbstractHeader from '../../../img/header/abstract/home_page.png';

export default class PreviewContainer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Title name={"My latest work"}/>
                <div id="preview">
                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />

                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />

                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />
                    <ImageBox name={"testImage"} src={AbstractHeader} />
                </div>
            </div>
        )
    }
}
