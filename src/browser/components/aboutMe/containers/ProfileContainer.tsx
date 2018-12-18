/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";

import Profile from "../presentational/Profile";

export interface ProfileContainerProps {
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default class ProfileContainer extends Component<ProfileContainerProps> {
    public static defaultProps = {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel nisi non massa ullamcorper accumsan eu a magna. Sed sed tristique nibh. Praesent malesuada erat at urna aliquet dictum. Proin hendrerit eleifend odio ut scelerisque. Duis rutrum ex nec aliquet varius. Sed nunc odio, bibendum quis lacinia ut, aliquet vitae tellus. Suspendisse quis facilisis ante. Phasellus non libero vitae enim cursus tempor. Quisque condimentum turpis eget magna viverra pulvinar ultricies ac tellus. Quisque faucibus, nibh a pharetra blandit, urna magna pulvinar felis, a hendrerit mi odio ut justo. Donec pulvinar augue sem, eu dapibus est efficitur ac. Duis a iaculis libero. Cras nec blandit dolor, nec fermentum est.",
        imageSrc:
            "https://s3-us-west-1.amazonaws.com/aforest-web/media/images/personal/55838709280__0E10E825-B1D6-41F4-9107-612C715B145A.JPG",
        imageAlt: "Alexandra"
    };

    public render() {
        const { description, imageSrc, imageAlt } = this.props;
        return (
            <Profile
                description={description}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
        );
    }
}
