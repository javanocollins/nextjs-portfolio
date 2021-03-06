import React, { useState } from "react";
import Head from "next/head";

// Styles
import styles from "../../styles/Home.module.css";
import Logos from "../../components/Logos/Logos";
import WebDesigns from "../../components/WebDesigns/WebDesigns";
import AppHead from "../../components/AppHead/AppHead";

const Index = () => {
    const [view, setView] = useState(1);

    return (
        <div className={`bg-bgColor`}>
            <AppHead title="Javano Collins | Design Work"/>

            <header className="px-0 md:px-20 pt-20">
                <h1 className="lg:text-5xl text-3xl md:text-7xl mb-3 text-orange-500 text-center">
                    Design Work
                </h1>
                <p className="text-center text-sm text-white">
                    Have a look at my designs.
                </p>
            </header>
            <main className="lg:px-20 px-12 lg:pt-20 pt-12">
                <div className="flex mx-auto justify-center place-items-center items-center gap-x-3 text-white">
                    {/* <p
                        className={`lg:text-4xl text-2xl text-center mb-8 cursor-pointer ${
                            view === 0 ? "font-bold" : "opacity-50"
                        }`}
                        onClick={() => setView(0)}
                    >
                        Web Designs
                    </p> */}
                    <p
                        className={`lg:text-4xl text-2xl text-center mb-8 cursor-pointer ${
                            view === 1 ? "font-bold" : "opacity-50"
                        }`}
                        onClick={() => setView(1)}
                    >
                        Logos
                    </p>
                </div>
                {view === 0 && (
                    <div className="flex justify-center lg:py-20 py-12">
                        <WebDesigns />
                    </div>
                )}
                {view === 1 && (
                    <div className="flex justify-center lg:py-20 py-12">
                        <Logos />
                    </div>
                )}
            </main>
        </div>
    );
};

export default Index;
