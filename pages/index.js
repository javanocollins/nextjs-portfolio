// Packages
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

// Font Awesome
import { fab, faChrome, faLaravel } from "@fortawesome/free-brands-svg-icons";
import {
    faBrush,
    faCheckSquare,
    faCoffee,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Styles
import styles from "../styles/Home.module.css";

// Components
import NavBar from "../components/NavBar";
import Button from "../components/Button/Button";
import Tool from "../components/Tool/Tool";
import Specializations from "../components/Specializations/Specializations";

import { toolIcons } from "../utils/utils";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
library.add(fab, faDatabase);

import hello from "../images/hello.png";
import AppHead from "../components/AppHead/AppHead";
export default function Home() {
    return (
        <div className={styles.container}>
            <AppHead title="Javano Collins"/>
            <header
                className={`${styles.HomePageHeader} bg-bgColor flex flex-col lg:px-20 px-12 items-start justify-center mx-auto`}
            >
                <div className="flex lg:text-7xl text-6xl font-medium mb-2 flex-wrap">
                    <h1 className="text-white">I'm Javano Collins.&nbsp;</h1>
                    <div className={`${styles.TypeWriter}`}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        '<span style="color: #F44006;">Software Engineer.</span>'
                                    )
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString(
                                        '<span style="color: #F44006;">UI/UX Designer.</span>'
                                    )
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>

                <Button
                    link="/dev-work"
                    title="View My Work"
                    activeColor="#47E5BC"
                ></Button>
            </header>
            <main className={styles.main}>
                <div
                    className={`${styles.Tools} Tools px-12 bg-black h-60 py-12 flex items-center justify-around`}
                >
                    {toolIcons.map((icon, idx) => {
                        return (
                            <Tool
                                key={idx}
                                icon={icon.icon}
                                title={icon.title}
                                size={icon.size}
                                activeColor={icon.activeColor}
                            />
                        );
                    })}
                </div>

                <div className="Specializations-container py-20 flex justify-center items-center bg-gradient-to-r from-orange-500 to-orange-700">
                    <Specializations devIcon={faChrome} designIcon={faBrush} />
                </div>
                <div
                    className={`${styles.AboutContainer} grid grid-cols-2 gap-32 justify-center bg-gray-800 text-white py-20 px-20`}
                >
                    <About />
                    <Contact />
                </div>
            </main>
        </div>
    );
}
