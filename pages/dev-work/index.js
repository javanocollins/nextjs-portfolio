import React, { useState } from "react";
import Head from "next/head";

// Styles
import styles from "../../styles/Home.module.css";
import AppHead from "../../components/AppHead/AppHead";

const Index = () => {
    const { view, setView } = useState(0);
    return (
        <div className={`bg-bgColor`}>
            <AppHead title="Javano Collins | Dev Work"/>
            <header className="px-20 pt-20 lg:mb-16 mb-5 text-center">
                <h1 className="lg:text-5xl text-3xl mb-3 text-orange-500">
                    Dev Work
                </h1>
                <p className="text-white text-sm">
                    Have a look at my development experience.
                </p>
            </header>
            <main className="lg:p-20 p-12">
                <div className="flex flex-col justify-center lg:w-1/2 w-full text-white">
                    <h2 className="text-3xl mb-5">
                        Software Engineer @
                        <a
                            href="https://platoalpha.com"
                            className="text-blue-600 font-bold"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Plato Alpha
                        </a>
                    </h2>
                    <div>
                        <div className="mb-5">
                            <a
                                className="font-bold text-2xl text-orange-500"
                                href="https://www.triblockhr.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                triblock HR
                            </a>
                            <p className="text-lg mt-2">
                                > Developed document management that allows HR
                                administrators to fully manage company and
                                employee documents.
                            </p>
                            <p className="text-lg mt-2">
                                > Developed employee allowance feature.
                            </p>
                        </div>
                        <div className="mb-5">
                            <a
                                className="font-bold text-2xl text-orange-500"
                                href="https://covidtesting.doctorshosp.com/login"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Doctors Hospital COVID19 Testing Platform
                            </a>
                            <p className="text-lg mt-2">
                                > Developed initial API payment services
                                structure.
                            </p>
                            <p className="text-lg mt-2">
                                > Developed application activity logs.
                            </p>
                            <p className="text-lg mt-2">
                                > Developed user verification.
                            </p>
                            <p className="text-lg mt-2">
                                > Developed email templates and logic to send to
                                end user (appointments, user verification, test
                                results).
                            </p>
                            <p className="text-lg mt-2">
                                > Developed integrated calendar that enables
                                administrators to view all booked appointments
                                on a calendar.
                            </p>
                            <p className="text-lg mt-2">
                                > Developed UI error handling using Yup
                                validations.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
