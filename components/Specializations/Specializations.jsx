import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

// Styles
import styles from "./Specializations.module.css";

const Specializations = ({ devIcon, designIcon }) => {
    const classes = `bg-white h-auto text-center flex flex-col items-center py-20 px-8`;
    return (
        <div
            className={`${styles.Specializations} Specializations grid grid-cols-2 w-3/5 justify-center divide-x-2`}
        >
            <div className={`${classes} ${styles.box}  rounded-l-3xl`}>
                <FontAwesomeIcon
                    icon={devIcon}
                    className="text-red-600 text-5xl mb-3"
                />
                <h2 className="pb-5 lg:text-3xl text-2xl font-bold">
                    Developer
                </h2>

                <p className="w-full lg:p-5 text-lg leading-8">
                    I am a Software Engineer that's always open to learning new
                    technologies. I ensure that applications are beautiful,
                    performant, scalable, and mobile responsive.
                </p>

                <p className="text-xl text-red-600 font-bold p-2">
                    Tools
                </p>
                <ul className="text-lg">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Laravel</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>Docker</li>
                </ul>
            </div>
            <div className={`${styles.box} ${classes} rounded-r-3xl`}>
                <FontAwesomeIcon
                    icon={designIcon}
                    className="text-red-600 text-5xl mb-3"
                />
                <h2 className="pb-5 lg:text-3xl text-2xl font-bold">
                    Designer
                </h2>
                <p className="w-full lg:p-5 text-lg leading-8">
                    I have an extensive background in graphic design. I
                    specialize in mobile and web design, and logos.
                </p>

                <p className="text-xl text-red-600 font-bold p-2">Tools</p>
                <ul className="text-lg">
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>
            </div>
        </div>
    );
};

export default Specializations;
