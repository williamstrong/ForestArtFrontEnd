import React, { Component } from "react";
import HeaderCanvasContainer from "./container/HeaderCanvasContainer.jsx";
import NavContainer from "./container/NavContainer.jsx";
import Preview from "./container/PreviewContainer.jsx";


export default class AppContainer extends Component {

    render() {
        return (
            <div>
                <div>
                    <NavContainer />
                    <HeaderCanvasContainer />
                </div>
                <div>
                    <Preview />
                </div>
            </div>
        )
    }
}
