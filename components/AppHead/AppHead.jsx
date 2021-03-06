import React from "react";
import Head from "next/head";

const AppHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="./favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default AppHead;
