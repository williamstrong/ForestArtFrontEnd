import React, { Component } from 'react';
import Nav from '../presentational/Nav.jsx';
import Name from '../presentational/Name.jsx'

import styles from '../../styles/main.css';

export default class NavContainer extends Component {

    constructor() {
        super();
        this.state = {
            pages: [
                {
                    name: "About Me",
                    href: "/about_me",
                    id: "nav_left_side"
                },
                {
                    name: "Art",
                    href: "/art",
                    id: "nav_center"
                },
                {
                    name: "Contact",
                    href: "/contact",
                    id: "nav_right_side"
                }
                ]
        }
    }

    render() {
        const pages = this.state.pages
        const navs = pages.map((page) => <Nav name={page.name} href={page.href} id={page.id} />);
        return (
            <div className="title_nav">
                <Name name="Alexandra Forest" id="name"/>
                <nav className="center">
                        { navs }
                </nav>
            </div>
        )
    }
}