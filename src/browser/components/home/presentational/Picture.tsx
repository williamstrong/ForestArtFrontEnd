import React from "react";

export interface PictureProps {
    id: string;
    src: string;
    alt: string;
}

const Picture = (props: PictureProps) => (
    <picture>
        <img css="hidden" id={props.id} alt={props.alt} src={props.src} />
    </picture>
);

export default Picture;
