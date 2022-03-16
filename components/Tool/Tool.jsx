import React from "react";

// Package imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";


const Tool = ({ icon, title, size, activeColor }) => {
    return (
        <div
            className={`hover:text-${activeColor} text-white text-center flex flex-col items-center justify-center relative`}
        >
            <FontAwesomeIcon
                icon={icon}
                title={title}
                className={`text-8xl mb-4 -bottom-12 absolute`}
            />
            <p className={`text-xl absolute top-14 uppercase`}>{title}</p>
        </div>
    );
};

export default Tool;
