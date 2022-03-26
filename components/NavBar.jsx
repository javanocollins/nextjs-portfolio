import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../images/logo.png";
import SwitchBtn from "./SwitchBtn/SwitchBtn";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    const { height, width } = useWindowDimensions();
    const [viewMenu, setViewMenu] = useState(false);
    const dynamicRoute = useRouter().asPath;

    const showMenu = () => {
        setViewMenu((prevState) => {
            return !prevState;
        });
    };

    useEffect(() => {
        setViewMenu(false); // When the dynamic route change reset the state
    }, [dynamicRoute]);

    let classes =
        "bg-bgColor mx-auto flex lg:px-20 px-12 items-center justify-between pt-7 gap-8";

    const mobileClasses =
        "bg-bgColor flex flex-col lg:px-20 px-12 pt-7 justify-end items-end";

    return width > 768 ? (
        <nav className={classes}>
            <div className="flex items-center text-white gap-8">
                <Link href="/">
                    <Image
                        className="cursor-pointer"
                        src={logo}
                        alt="JD Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href="/">Home</Link>
                <Link href="/dev-work">Dev Work</Link>
                <Link href="/design-work">Design Work</Link>
            </div>
        </nav>
    ) : (
        <div className={mobileClasses}>
            <FontAwesomeIcon
                icon={faBars}
                className="text-white text-4xl mb-8 cursor-pointer hover:scale-90 py-2 pl-2 hover:transition-all duration-200	"
                onClick={showMenu}
            />
            {viewMenu ? (
                <div className="flex flex-col text-right gap-5 text-white text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/dev-work">Dev Work</Link>
                    <Link href="/design-work">Design Work</Link>
                </div>
            ) : null}
        </div>
    );

    return null;
};

export default NavBar;
