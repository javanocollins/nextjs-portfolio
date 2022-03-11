import React from 'react';

// Package imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Tool = ({icon, title}) => {
    return (
        <div className="text-center flex flex-col items-center justify-center relative">
            <FontAwesomeIcon
                icon={icon}
                title={title}
                className="text-white text-8xl mb-4 w-24"
            />
            {/* <p className="text-white absolute top-14">{title}</p> */}
        </div>
    );
}

export default Tool
