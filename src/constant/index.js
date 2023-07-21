import {
  github,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  leaveTracker1,
  leaveTracker2,
  neptuneAdmin,
  neptuneMobile,
  scheduler2,
  scheduler1,
  scheduler3,
} from "../assets/index";
export const navLinks = [
  {
    to: "about",
    label: "About",
  },
  {
    to: "work",
    label: "Work",
  },
  {
    to: "skill",
    label: "Skill",
  },
  {
    to: "contact",
    label: "Contact",
  },
];

export const works = [
  {
    title: "Leave Tracker",
    company: "Top Bliss",
    date:"JUNE 2022 - JULY 2022",
    appDescription:
      "Attendance monitoring system for employees and interns, including clock-in/out functionality and a leave request feature.",
    role: "Front-End Developer",
    responsibilities: [
      `Implemented the design from Figma using Vue.js and coordinated with the UI/UX designers and backend developers of the system.`,
      `Integrated the API into the front end, enabling the web app/system to become dynamic and responsive.`,
      `Adhered to the Waterfall methodology and actively participated in daily stand-up meetings.`,
    ],
    images: [leaveTracker1, leaveTracker2],
  },
  {
    title: "CMI Pandi Scheduling System",
    company: "College of Mary Immaculate",
    date:"FEBRUARY 2023 - APRIL 2023",
    appDescription:
      "Scheduling system that can avoid conflicts between courses, teachers, and rooms, while also providing visibility into ongoing.",
    role: "Back-End Web Developer",
    responsibilities: [
      `Collaborated closely with the front-end developer to conduct continuous testing and bug fixing, ensuring the client's requirements were effectively and efficiently met`,
      `Responsible for designing the backend API ensuring seamless communication between the front-end and back-end, utilizing MongoDB as the database`,
    ],
    images: [scheduler1, scheduler2, scheduler3],
  },
];

export const projects = [
  {
    title: "Water Refilling Station Management System",
    role: "Full Stack Software developer",
    date: "AUGUST 2022 - MAY 2023",
    description:
      "To help water refilling station businesses, I created a web application to monitor orders, employees, customers, inventory, and a mobile application for delivery, scheduling and ordering.",
    images: [neptuneMobile,neptuneAdmin],
  },
];
