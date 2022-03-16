import {
    faCheckSquare,
    faCoffee,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faDocker, faFigma, faLaravel } from "@fortawesome/free-brands-svg-icons";

export const toolIcons = [
    {
        icon: ["fab", "react"],
        title: "React",
        size: "w-28",
        activeColor: "react",
    },
    {
        icon: ["fab", "js"],
        title: "JavaScript",
        size: "w-24",
        activeColor: "js",
    },
    // {
    //     icon: faLaravel,
    //     title: "Laravel",
    //     size: "w-24",
    //     activeColor: "laravel",
    // },
    {
        icon: faDocker,
        size: "w-32",
        title: "Docker",
        activeColor: "docker",
    },
    {
        icon: faFigma,
        title: "Figma",
        size: "w-20",
        activeColor: "figma",
    },
    {
        icon: ["fab", "python"],
        title: "Python",
        size: "w-24",
        activeColor: "python",
    },
    {
        icon: ["fab", "node"],
        title: "Node",
        size: "w-28",
        activeColor: "node",
    },
    {
        icon: faDatabase,
        title: "MySQL",
        size: "w-20",
        activeColor: "mysql",
    },
];
