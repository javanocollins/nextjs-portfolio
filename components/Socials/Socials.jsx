import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
    {
        icon: faGithub,
        link: "https://github.com/JavanoCollins",
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/javano-collins/",
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/javanocollins/",
    },
];

const Socials = () => {
  return (
      <div className="flex text-white text-4xl mb-4">
          {icons.map((icon, idx) => (
              <a
                  key={idx}
                  className="pr-6"
                  href={icon.link}
                  target="_blank"
              >
                  <FontAwesomeIcon icon={icon.icon} className="w-8"/>
              </a>
          ))}
      </div>
  );
}

export default Socials