import React from 'react';
import Link from "next/link";

import styles from "./About.module.css";

const About = () => {
  return (
      <div>
          <h2 className="lg:text-5xl text-4xl mb-5 uppercase font-medium text-orange-600">
              About Me
          </h2>

          <p className="mb-5 md:text-xl text-lg leading-8">
              I'm Javano Collins, a current Software Engineer at{" "}
              <a
                  href="https://platoalpha.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-bold"
              >
                  Plato Alpha
              </a>{" "}
              and a graduate of &nbsp;
              <a
                  href="https://vc.btvi.edu.bs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-600 font-bold"
              >
                  BTVI 🏫
              </a>{" "}
              . As a Software Engineer, I have fallen in love with web
              technologies, and find a academic and career interest in Machine
              Learning.
          </p>
          <p className="md:text-xl text-lg leading-8">
              Additional things about me: <br />
              I am a boxer, <br />I am an avid reader (subjects: finance,
              psychology, history, stem) <br />
              I love marine science and I self-proclaim to be an advocate for
              environmental health. <br />
              An additional passion of mine lies in applying technology to
              marine science to save the ocean.
          </p>
      </div>
  );
}

export default About