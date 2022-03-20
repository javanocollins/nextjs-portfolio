import React from "react";
import Image from "next/image";

import logoOne from "../../images/logos/logo-1.png";
import logoTwo from "../../images/logos/logo-2.png";
import logoThree from "../../images/logos/logo-3.png";
import logoFour from "../../images/logos/logo-4.png";
import logoFive from "../../images/logos/logo-5.jpg";
import logoSix from "../../images/logos/logo-6.png";
import logoSeven from "../../images/logos/logo-7.png";
import logoEight from "../../images/logos/logo-8.png";
import logoNine from "../../images/logos/logo-9.png";

const Logos = () => {
    const logos = [
        logoOne,
        logoTwo,
        logoThree,
        logoFour,
        logoFive,
        logoSix,
        logoSeven,
        logoEight,
        logoNine,
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-1">
            {logos.map((logo, idx) => {
                return (
                    <div key={idx}>
                        <Image src={logo} width={380} height={240} alt="Design logos" />
                    </div>
                );
            })}
        </div>
    );
};

export default Logos;
