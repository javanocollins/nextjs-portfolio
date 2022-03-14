import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

const About = ({ devIcon, designIcon }) => {
    const classes = `bg-white w-2/6 h-auto text-center flex flex-col items-center py-12 px-8`;
    return (
        <div className="flex justify-center divide-x-2">
            <div className={`${classes}  rounded-l-3xl divi`}>
                <FontAwesomeIcon icon={devIcon} className="text-red-600 w-14" />
                <h2 className="pb-5 text-3xl font-bold">Developer</h2>

                <p className="w-full p-5 text-lg">
                    I am a Frontend Developer that's always open to learning new
                    technologies. I ensure that applications are beautiful,
                    performant, and mobile responsive.
                </p>

                <p className="text-xl text-red-600 font-bold p-2">Tools</p>
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
            <div className={`${classes} rounded-r-3xl`}>
                <FontAwesomeIcon
                    icon={designIcon}
                    className="text-red-600 w-12"
                />
                <h2 className="pb-5 text-3xl font-bold">Designer</h2>
                <p className="w-full p-5 text-lg">
                    I have an extensive background in graphic design. I
                    specialize in mobile and web design, logos, flyers, and
                    business cards.
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

export default About;
