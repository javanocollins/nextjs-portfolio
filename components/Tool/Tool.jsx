import React from 'react';

// Package imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Tool = ({icon, title, size}) => {
    return (
        <div className="text-center flex flex-col items-center justify-center relative">
            <FontAwesomeIcon
                icon={icon}
                title={title}
                className={`${size} text-white text-8xl mb-4 -bottom-12 absolute`}
            />
            <p className="text-white text-xl absolute top-14 uppercase">
                {title}
            </p>
        </div>
    );
}

export default Tool
