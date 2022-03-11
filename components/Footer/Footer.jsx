import React from "react";

// import { socialIcons } from "../../utils/utils";
import Socials from "../Socials/Socials";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="mx-auto flex flex-col justify-center items-center relative w-full bottom-0 px-20 py-24 bg-gray-900">
            <Socials />
            <p className="text-xl text-white">
                Javano Collins &copy; {currentYear}
            </p>
        </div>
    );
};

export default Footer;
