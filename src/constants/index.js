import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  cyber,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  projectManager,
  machineLearning,
  cloudComputing,
  iconic,
  iconicSite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Cyber Security",
    icon: cyber,
  },
  {
    title: "Project Management",
    icon: projectManager,
  },
  {
    title: "Machine Learning",
    icon: machineLearning,
  },
  {
    title: "Cloud Computing",
    icon: cloudComputing,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Next.js Web Application Developer",
    company_name: "Iconic Electronics Malawi",
    icon: iconic,
    iconBg: "#383E56",
    date: "July 2022 - august 2022",
    points: [
      "Developing and maintaining a full stack e-commerce web application using React.js , Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "creating a high SEO for the site to ensure high prioritization in search",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Iconic Electronics Ecommerce Site",
    description:
      "Web-based platform that allows users to search, view, and buy electronic products from iconic electronic malawi store, providing a convenient and efficient remote online buying experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Next",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },

    ],
    image: iconicSite,
    source_code_link: "https://iconicmalawi.com",
  },
  ];

export { services, technologies, experiences, testimonials, projects };
