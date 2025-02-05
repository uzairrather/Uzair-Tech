import { Book, BookA } from "lucide-react";
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
  jobit,
  tripguide,
  threejs,
  carrent,
  clm,
  service_1,
  service_2,
  service_3,
  service_4,
  odoo,
  sales,
  node,
  webdevelp,
  book,
  beer,
  brief,
  heart,
} from "../assets";



export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Blogs",
  },
  {
    id: "work",
    title: "Service",
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
  }
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
    title: "School Management System",
    company_name: "Start",
    icon: book,
    iconBg: "#1d1836",
    date: " Two-Three Months",
    points: [
      "Comprehensive software for institutions of all sizes to manage the day to day activities hassle-free be it admissions, ..",
      " fee collection, employee management, budgeting etc.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
    image: service_1,
  },
  {
    title: "Wholesalers And Distributors ERP",
    company_name: "Start",
    icon: brief,
    iconBg: "#1d1836",
    date: "One-Two Months",
    points: [
      "We offer customized ERP solutions to healthcare organisations..",
      "Our ERP platform integrates all critical business processes like sales and purchase, accounting and billing, stock inventory etc...",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor ducimus sunt ratione porro officia non temporibus numquam aliquam possimus!.",
      
    ],
    image: service_2,

  },
  {
    title: "Restaurant Management System",
    company_name: "Start",
    icon: beer,
    iconBg: "#1d1836",
    date: "Two-Three Months",
    points: [
      "Little more than an ordinary restaurant management system.",
      " Our restaurant software takes care of your business, while you take care of your guest..",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor ducimus sunt ratione porro officia non temporibus numquam aliquam possimus!.",
      
    ],
    image: service_3,

  },
  {
    title: "Healthcare And Fitness Software",
    company_name: "Start",
    icon: heart,
    iconBg: "#1d1836",
    date: "Under Two Months",
    points: [
      "Our cutting edge gym and fitness software solution reduced day to day redundancies in the business of fitness clubs so that they can focus more on increasing market penetration..",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
    image: service_4,

  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ut qui quam nisi ex laborum?.",
    name: "abs",
    designation: "Cgt",
    company: "walmat",
    image: "https://randomuser.me/api/portraits/women/6.jpg",

  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ut qui quam nisi ex laborum?.",
    name: "abd",
    designation: "COO",
    company: "DEF",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ut qui quam nisi ex laborum?!",
    name: "abc",
    designation: "CTO",
    company: "456 ",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web Development",
    description:
      "We are a team of passionate web developers specializing in creating modern, high-performance websites and web applications. Our expertise lies in leveraging cutting-edge technologies like React, Next.js, and Tailwind CSS to deliver user-friendly, scalable, and visually stunning digital experiences..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webdevelp,
    
  },
  {
    name: "Salesforce Development",
    description:
      "Our expert developers can build comprehensive Custom Salesforce Development solutions for your business utilizing any required Salesforce technologies such as Salesforce Sales Cloud, Wave Analytics, Service Cloud, Marketing Cloud and more..",
    tags: [
      {
        name: "Development",
        color: "blue-text-gradient",
      },
      {
        name: "Migration",
        color: "green-text-gradient",
      },
      {
        name: "Integration",
        color: "pink-text-gradient",
      },
    ],
    image: sales,
    
  },
  {
    name: "Odoo Customization",
    description:
      "Odoo customization improves user interface and hence user experience.Existing out-of-the-box Odoo features do not align with your business processes.Additional features would bring about optimal usage of the ERP.Newer business processes call for new functionalities that need customization.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: odoo,
    
  },{
    name: "Mobile App Development",
    description:
      "We specialize in mobile app development, crafting high-quality, user-friendly applications that help businesses thrive in the digital age. With expertise in both iOS and Android platforms, as well as cross-platform frameworks like React Native and Flutter, we build apps that are not only visually appealing but also highly functional and scalable.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    
  },{
    name: "Digital Marketing",
    description:
      "Digital marketing services refer to the use of digital channels and technologies to promote products, services, or brands. These services may include: Search Engine Optimization (SEO): The process of optimizing website content to improve its ranking on search engine results pages.The process of promoting products or services through email campaigns. Content Marketing:...",
    tags: [
      {
        name: "SEO",
        color: "blue-text-gradient",
      },
      {
        name: "Email Marketing tools",
        color: "green-text-gradient",
      },
      {
        name: "BuzzSumo",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },{
    name: "Node js",
    description:
      "Web Application Development: Node.js provides a platform for building scalable and efficient web applications. It offers a wide range of libraries and frameworks that enable developers to create high-performance web applications, RESTful APIs, and real-time communication applications. Real-time Applications: Node.js is a perfect choice for building real-time applications...",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: node,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
