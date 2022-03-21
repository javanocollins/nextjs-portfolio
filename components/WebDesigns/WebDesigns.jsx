import React from "react";
import Image from "next/image";

import styles from "./WebDesigns.module.css";

import headphonesOne from "../../images/web-designs/headphones/pic-1.png";
import headphonesTwo from "../../images/web-designs/headphones/pic-2.png";
import headphonesThree from "../../images/web-designs/headphones/pic-3.png";

import btviOne from "../../images/web-designs/btvi/pic-1.png";
import btviTwo from "../../images/web-designs/btvi/pic-3.png";
import btviThree from "../../images/web-designs/btvi/pic-2.png";

const WebDesigns = ({ images, classes }) => {
    const headphones = [headphonesOne, headphonesTwo, headphonesThree];
    const btvi = [btviOne, btviTwo, btviThree];

    const classNames = ["headphonesOne", "headphonesTwo", "headphonesThree"];

    const dimension = {
      width: 410,
      height: 250
    }

    return (
        <div className="grid grid-cols-2 gap-x-20">
            <div className="design-container">
                {headphones.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`${styles[classNames[idx]]}`}
                        >
                            <Image
                                src={item}
                                width={dimension.width}
                                height={dimension.height}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="design-container">
                {btvi.map((item, idx) => {
                    return (
                        <div key={idx} className={styles[classNames[idx]]}>
                            <Image
                                src={item}
                                width={dimension.width}
                                height={dimension.height}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WebDesigns;
