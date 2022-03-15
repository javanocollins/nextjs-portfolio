import React from 'react';
import Link from "next/link";

const About = () => {
  return (
      <div>
          <h2 className="text-8xl mb-8 uppercase font-medium text-orange-600">
              About Me
          </h2>

          <p className="w-4/5 mb-5 text-xl">
              I'm Javano Collins, a current Software Engineer at{" "}
              <a href='https://platoalpha.com' target='_blank' className='text-blue-600 font-bold'>Plato Alpha</a> and a graduate of BTVI 🏫 . As a Software
              Engineer, I have fallen in love with web technologies, and find a
              academic and career interest in Machine Learning.
          </p>
          <p className="w-4/5 text-xl">
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