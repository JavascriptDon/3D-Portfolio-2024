import { cadituk_logo, evolve_hospitality_logo, } from "../assets/images";
import {
    blog,
    contact,
    css,
    dashboard,
    git,
    github,
    html,
    javascript,
    linkedin,
    movie_logo,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    Cortona3D,
    SiemensLogo,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: SiemensLogo,
        name: "Siemens Teamcenter PLM",
        type: "FullStack",
    },
    {
        imageUrl: Cortona3D,
        name: "Rapid Author",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Associate Consultant",
        company_name: "CAD-IT",
        icon: cadituk_logo,
        iconBg: "#D9E8F2",
        date: "January 2023 - Present",
        points: [
            "Developing 3D interactive technical documentation for parts catalogs, work instructions, and training materials for the service and manufacturing industries.",
            "Collaborating with diverse cross-functional teams such as Cortona3d Support, Project Management, Pre-Sales, Software Engineering, and Testing. ",
            "Participated in daily Teams calls, chats, and regular meetings to gather customer requirements with the PLM Team and to resolve various technical issues on client projects.",
            "Gained hands-on experience with the end-to-end Teamcenter PLM and Cortona3D Product in client projects.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JavascriptDon',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/helitharupasinghe/',
    }
];

export const projects = [
    {
        iconUrl: dashboard,
        theme: 'btn-back-blue',
        name: 'Personal Dashboard',
        description: 'Developed a Chrome Extension that gives you an overview over the current time, how the weather is like and how Crypto is performing. Interacts with multiple APIs using async JS.',
        link: 'https://github.com/JavascriptDon/Javascript-Fundamentals/tree/dashboard',
    },
    {
        iconUrl: blog,
        theme: 'btn-back-pink',
        name: 'The Dev Post',
        description: 'A Personal Blog for Developers built with ReactJS Components, GraphQL, Gatsby, Typescript and Node.js.',
        link: 'https://github.com/JavascriptDon/The-Dev-Post/tree/main',
    },
    {
        iconUrl: movie_logo,
        theme: 'btn-back-black',
        name: 'Codeflix',
        description: 'A full-stack web app created with the incredible ReactJS Framework, Tailwind CSS, Firebase and Axios.',
        link: 'https://github.com/JavascriptDon/Codeflix',
    },
];
