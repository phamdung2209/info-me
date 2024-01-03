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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Quick Thinker",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Team Player",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cognizant Technology Solutions india Pvt Ltd.",
    icon: meta,
    iconBg: "#383E56",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Customizing Teamcenter server-side and Active Workspace client-side",
      "Expertise in Google Cloud Platform (GCP) for infrastructure and CI/CD",
      "Client interaction and requirement analysis with business analysts",
      "User interface development using JavaFX for intuitive designs"
    ],
  },
  {
    title: "software Intern",
    company_name: "Cognizant Technology Solutions india Pvt Ltd.",
    icon: meta,
    iconBg: "#383E56",
    date: "Mar 2022 - Aug 2022",
    points: [
      "Assisted in developing and maintaining web applications using modern technologies.",
      "Collaborated closely with cross-functional teams, including designers and developers, to support project goals.",
      "Contributed to responsive design and ensured compatibility across various web browsers.",
      "Participated in code reviews, gaining insights and providing feedback to improve code quality."
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
    name: "Git-Detective",
    description:
      "Web-based platform that used to search for github profiles",
    tags: [
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://phamdung2209.github.io/Git-Detective/",
  },
  {
    name: "TikTok Clone",
    description:
      "TikTok clone with React JS and laravel. Upload videos and watch them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/phamdung2209/tiktok",
  },
  {
    name: "Protech",
    description:
      "Protech is a website that laptop sellers can post their products and customers can buy them.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhishekHegde2000/yt-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
