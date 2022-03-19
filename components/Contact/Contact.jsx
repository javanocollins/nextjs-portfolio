import React from "react";

const Contact = () => {
    return (
        <div>
            <h2 className="text-6xl mb-8 uppercase font-medium text-orange-600">
                Contact
            </h2>
            <div className="mb-5">
                <p className="text-xl">
                    I'm very easy to reach via{" "}
                    <a
                        href="https://www.linkedin.com/in/javano-collins/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 font-bold"
                    >
                        LinkedIn
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.instagram.com/javanocollins/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-500 font-bold"
                    >
                        Instagram
                    </a>
                </p>
            </div>

            <div>
                <p className="text-xl">
                    Email:{" "}
                    <a
                        href="mailto:javanocollins@gmail.com"
                        className="font-bold text-orange-500"
                    >
                        javanocollins@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
