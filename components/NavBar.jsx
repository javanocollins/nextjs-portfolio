import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../images/logo.png";
import SwitchBtn from "./SwitchBtn/SwitchBtn";

const NavBar = () => {
    return (
        <nav className="container mx-auto flex px-20 items-center justify-between pt-7 gap-8">
            <div className="flex items-center gap-8">
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

            <SwitchBtn />
        </nav>
    );
};

export default NavBar;
