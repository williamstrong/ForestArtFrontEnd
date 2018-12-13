import React from "react";

export interface HtmlProps {
    content: string;
    state: any;
    title?: string;
}

const Html = (props: HtmlProps) => (
    <html className="no-js" lang="">
        <head>
            <meta charSet="utf-8" />
            <link
                rel="dns-prefetch"
                href="https://s3-us-west-1.amazonaws.com"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{props.title}</title>
            <meta name="description" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="manifest"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/site.webmanifest"
            />
            <link
                rel="apple-touch-icon"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/icon.png"
            />
            <link
                rel="stylesheet"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/css/normalize.css"
            />
            <link
                rel="stylesheet"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/css/main.css"
            />
            <link rel="stylesheet" href="https://use.typekit.net/nhp1iyx.css" />
            <link
                type="text/plain"
                rel="author"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/humans.txt"
            />
            <link
                rel="shortcut icon"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon.ico"
            />
            <link
                rel="icon"
                sizes="16x16 32x32 64x64"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon.ico"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="196x196"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="160x160"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-160.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="64x64"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-64.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-16.png"
            />
            <link
                rel="apple-touch-icon"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-180.png"
            />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta
                name="msapplication-TileImage"
                content="https://s3-us-west-1.amazonaws.com/aforest-web/assets/favicon-144.png"
            />
            <meta
                name="msapplication-config"
                content="https://s3-us-west-1.amazonaws.com/aforest-web/assets/browserconfig.xml"
            />
        </head>
        <body>
            <div
                id="root"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.__APOLLO_STATE__=${JSON.stringify(
                        props.state
                    ).replace(/</g, "\\u003c")}`
                }}
            />
            <script src="/assets/bundle.js" />
            <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/vendor/modernizr-3.6.0.min.js" />
            <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/plugins.js" />
            <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/main.js" />
        </body>
    </html>
);

export default Html;
