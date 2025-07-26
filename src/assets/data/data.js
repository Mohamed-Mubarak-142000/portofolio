import courseImg from "../images/course.png";
import taskImg from "../images/taskDashboard.png";
import youtubeImg from "../images/youtube.png";
import eslamiImg from "../images/eslami.png";
import souqImg from "../images/souq.png";
import tabeebakImg from "../images/tabeebak.png";
import plantsImg from "../images/plants.png";
import coffieImg from "../images/coffie.png";
import coursateImg from "../images/coursate.png";
//
import courseVedio from "../videos/course.mp4";
import eslamiVedio from "../videos/eslami.mp4";
import souqVedio from "../videos/souq.mp4";
import taskDashboardVedio from "../videos/taskDashboard.mp4";
import youtubeVedio from "../videos/youtube.mp4";

export const data = [
  {
    id: 1,
    category: "Frontend development",
    name: "Coursate Online",
    description:
      " this is web appliction is created used by nextjs and css models technology Skills :Next js v.14 , CSS Modules, Tailwind CSS , Hyper Ui ,Context Api, Clerk to building authentication, strapi to the management of data or build backend, payment stripe",
    technologySkills: [
      { id: 1, nameSkill: "REact js" },
      { id: 2, nameSkill: "Material UI" },
      { id: 4, nameSkill: "Context Api" },
      { id: 5, nameSkill: "Responsive Web" },
      { id: 6, nameSkill: "Json Server" },

      { id: 7, nameSkill: "react-helmet-async" },
      { id: 8, nameSkill: "react-slick" },
      { id: 9, nameSkill: "React Query" },
      { id: 10, nameSkill: "Axios" },

      { id: 11, nameSkill: "Framer Motion" },
      { id: 12, nameSkill: "React Hook Form" },
      { id: 13, nameSkill: "Zod Validation" },
      { id: 14, nameSkill: "Tailwind Css" },
    ],
    liveDemo: true,
    imageProject: [{ id: 1, image: coursateImg }],
    linkProject: "https://courses-online-3-mnd-group.vercel.app/",
  },
  {
    id: 2,
    category: "Full stack development",
    name: "Coffee Shop",
    description:
      " This project is a dynamic web application for a coffee brand, built using React and Tailwind CSS with engaging animations via Framer Motion. It includes features such as a visually appealing homepage, a services section, a filterable coffee menu fetched from JSON Server, product detail pages, a real-time search bar, and a shopping cart powered by React Hook Form and Zod Validation.",
    technologySkills: [
      { id: 1, nameSkill: "REact js" },
      { id: 2, nameSkill: "Shadcn UI" },
      { id: 4, nameSkill: "Context Api" },
      { id: 5, nameSkill: "Responsive Web" },
      { id: 6, nameSkill: "Mongo DB" },
      { id: 7, nameSkill: "JWT Token" },
      { id: 8, nameSkill: "Express js" },
      { id: 9, nameSkill: "React Query" },
      { id: 10, nameSkill: "Axios" },
      { id: 11, nameSkill: "Framer Motion" },
      { id: 12, nameSkill: "React Hook Form" },
      { id: 13, nameSkill: "Zod Validation" },
      { id: 14, nameSkill: "Tailwind Css" },
      { id: 15, nameSkill: "Swiper js" },
    ],
    liveDemo: true,
    imageProject: [{ id: 1, image: coffieImg }],
    linkProject: "https://coffie-shop-tau.vercel.app/",
  },
  {
    id: 3,
    category: "Full stack development",
    name: "Buy Your Dream Plants",
    description: `
    This is a web application that allows users to buy plants online. It is built using React.js, Redux Toolkit, and Tailwind CSS. The application features a responsive design, a shopping cart, and a payment gateway integration.`,
    technologySkills: [
      { id: 1, nameSkill: "Next js" },
      { id: 2, nameSkill: "Shadcn UI" },
      { id: 4, nameSkill: "Context Api" },
      { id: 5, nameSkill: "Responsive Web" },
      { id: 6, nameSkill: "Mongo DB" },
      { id: 7, nameSkill: "JWT Token" },
      { id: 8, nameSkill: "Express js" },
      { id: 9, nameSkill: "React Query" },
      { id: 10, nameSkill: "Axios" },
      { id: 11, nameSkill: "Framer Motion" },
      { id: 12, nameSkill: "React Hook Form" },
      { id: 13, nameSkill: "Zod Validation" },
    ],
    liveDemo: true,
    imageProject: [{ id: 1, image: plantsImg }],
    linkProject: "https://plants-app-opal.vercel.app/",
  },
  {
    id: 4,
    category: "Full stack development",
    name: "Booking Appointment",
    description: `
    Connecting Patients with the Finest Healthcare Professionals Across Egypt and Beyond. Our platform bridges the gap between patients and top-tier doctors, specialists, and medical experts, ensuring accessible, personalized healthcare solutions. With cutting-edge technology and compassionate care, we're revolutionizing healthcare delivery to build a healthier future for all.
    `,
    technologySkills: [
      { id: 1, nameSkill: "React js" },
      { id: 2, nameSkill: "Material UI" },
      { id: 3, nameSkill: "Style Components" },
      { id: 4, nameSkill: "Context Api" },
      { id: 5, nameSkill: "Responsive Web" },
      { id: 6, nameSkill: "Mongo DB" },
      { id: 7, nameSkill: "JWT Token" },
      { id: 8, nameSkill: "Express js" },
      { id: 9, nameSkill: "React Query" },
      { id: 10, nameSkill: "Axios" },
      { id: 11, nameSkill: "Framer Motion" },
      { id: 12, nameSkill: "React Hook Form" },
      { id: 13, nameSkill: "Zod Validation" },
    ],
    liveDemo: true,
    imageProject: [{ id: 1, image: tabeebakImg }],
    linkProject: "https://tabeebak-frontend.vercel.app/",
  },
  {
    id: 5,
    category: "Full stack development",
    name: "Courses Online",
    description:
      "this is web appliction is created used by nextjs and css models technology Skills :Next js v.14 , CSS Modules, Tailwind CSS , Hyper Ui ,Context Api, Clerk to building authentication, strapi to the management of data or build backend, payment stripe",
    technologySkills: [
      { id: 1, nameSkill: "Next js" },
      { id: 2, nameSkill: "Clerk Auth" },
      { id: 3, nameSkill: "Tailwind CSS" },
      { id: 4, nameSkill: "Context Api" },
      { id: 5, nameSkill: "Responsive Web" },
      { id: 6, nameSkill: "strapi DB management" },
      { id: 7, nameSkill: "strap Payment" },
    ],
    liveDemo: true,
    imageProject: [
      {
        id: 1,
        image: courseImg,
      },
    ],

    video: courseVedio,
  },
  {
    id: 6,
    category: "Full stack development",
    name: "Task manager Dashboard",
    description:
      "Through this project, you can manage the task work for the team by creating a task, specifying the people from the team to perform this task, and following up on the task work through activities online, whatever the stage of the task inprogress - completed-bug-started. The admin can also add a sub task to a specific task or to a specific person and send it assets for tasks. The admin can create a new user, delete it, and modify it, as well as for added tasks and other features. In the end, you can view this site on any screen.",
    statusProject: "Completed",
    technologySkills: [
      { id: 1, nameSkill: "React js" },
      { id: 2, nameSkill: "HeadlessUI" },
      { id: 3, nameSkill: "Redux toolkit" },
      { id: 4, nameSkill: "react hook form" },
      { id: 5, nameSkill: "firebase" },
      { id: 6, nameSkill: "recharts" },
      { id: 7, nameSkill: "tailwind css" },
      { id: 8, nameSkill: "express js" },
      { id: 9, nameSkill: "mongodb " },
      { id: 10, nameSkill: "bcryptjs" },
      { id: 11, nameSkill: "cookie parser" },
    ],
    liveDemo: true,
    imageProject: [
      {
        id: 1,
        image: taskImg,
      },
    ],
    video: taskDashboardVedio,
  },
  {
    id: 7,
    category: "Frontend development ",
    name: "Youtube clone",
    description:
      "Through this project, you can search to any playlist or video , and show this video and show all related this video In the end, you can view this site on any screen.",
    statusProject: "Completed",
    technologySkills: [
      { id: 1, nameSkill: "React js" },
      { id: 2, nameSkill: "typescript" },
      { id: 3, nameSkill: "Redux toolkit" },
      { id: 5, nameSkill: "google cloud api" },
      { id: 7, nameSkill: "tailwind css" },
    ],
    liveDemo: true,
    imageProject: [
      {
        id: 1,
        image: youtubeImg,
      },
    ],
    video: youtubeVedio,
  },
  {
    id: 8,
    category: "frontend development ",
    name: "eslami app",
    description:
      "this is eslam app is created by react js and typescript , styled components , redux query .this is app your provide quran reading and lisnter for all reciters and provide some hadith to all Imams",
    statusProject: "Completed",
    technologySkills: [
      { id: 1, nameSkill: "React js" },
      { id: 2, nameSkill: "styled components" },
      { id: 3, nameSkill: "Redux toolkit" },
      { id: 4, nameSkill: "react hook form" },
      { id: 5, nameSkill: "zod validation" },
      { id: 6, nameSkill: "react bootstrap" },
      { id: 7, nameSkill: "framer motion " },
    ],
    liveDemo: true,
    imageProject: [
      {
        id: 1,
        image: eslamiImg,
      },
    ],
    video: eslamiVedio,
  },
  {
    id: 9,
    category: "full stack development ",
    name: "souqi app",
    description:
      "this is mern stack application is created used by react js and context api to sharing and manage of data and it is allow to access to data to all components , used part of framer motion to create some animatins and components of bootstrap , while used to back end express and mongoDb",
    statusProject: "Completed",
    technologySkills: [
      { id: 1, nameSkill: "React js" },
      { id: 2, nameSkill: "strip payment" },
      { id: 3, nameSkill: "Redux toolkit" },
      { id: 4, nameSkill: "react hook form" },
      { id: 5, nameSkill: "firebase" },
      { id: 6, nameSkill: "recharts" },
      { id: 7, nameSkill: "tailwind css" },
      { id: 8, nameSkill: "express js" },
      { id: 9, nameSkill: "mongodb " },
      { id: 10, nameSkill: "bcryptjs" },
      { id: 11, nameSkill: "cookie parser" },
    ],
    liveDemo: true,
    imageProject: [
      {
        id: 1,
        image: souqImg,
      },
    ],
    video: souqVedio,
  },
];

export const items = [
  {
    title:
      "Front End Web Developer @Innovatek,Donation Hub Project We developed a kiosk-based donation platform to streamline public donations for charities. I contributed to the Back Office development using React with Schadcn UI and Radix UI—creating a design editor, reusable media-upload components, interactive charts, data tables, and advanced filters. I wrote clean, maintainable code, collaborated with designers and back-end engineers to address UX challenges, and proposed enhancements that ensured we met all deadlines with high quality. This work resulted in numerous major UAE charities adopting our platform, significantly increasing donation accessibility and efficiency.",
  },
  {
    title:
      "Front End Web Developer @Innovatek , Ana Coins Project We are creating Ana Coins, an e-commerce site for buying and selling old coins. I led the Back Office development using Material UI minimal templates, integrated Google Analytics and App Scripts for site-wide and per-product analytics. I developed reusable React components in accordance with clean-code standards, collaborated with designers and back-end engineers to ensure UI consistency and API contracts, and conducted thorough cross-device testing. I also mentored a junior developer through code reviews and best practices. Our efforts resulted in a robust dashboard architecture, reduced future development time, and data-driven decision-making through visitor analytics.Donation Hub Project We developed a kiosk-based donation platform to streamline public donations for charities. I contributed to the Back Office development using React with Schadcn UI and Radix UI—creating a design editor, reusable media-upload components, interactive charts, data tables, and advanced filters. I wrote clean, maintainable code, collaborated with designers and back-end engineers to address UX challenges, and proposed enhancements that ensured we met all deadlines with high quality. This work resulted in numerous major UAE charities adopting our platform, significantly increasing donation accessibility and efficiency. Ana Coins Project We are creating Ana Coins, an e-commerce site for buying and selling old coins. I led the Back Office development using Material UI minimal templates, integrated Google Analytics and App Scripts for site-wide and per-product analytics. I developed reusable React components in accordance with clean-code standards, collaborated with designers and back-end engineers to ensure UI consistency and API contracts, and conducted thorough cross-device testing. I also mentored a junior developer through code reviews and best practices. Our efforts resulted in a robust dashboard architecture, reduced future development time, and data-driven decision-making through visitor analytics.",
  },
  {
    title:
      "I graduated from the Faculty of Computers and Information, Menoufia University With a good grade in 2022",
    classResponsive:
      "p-5 w-[320px] shadow-md rounded absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] ",
  },
  {
    title:
      "Information Technology Institute (ITI) Hybrid Frontend React Developer Jul 2021 - Present · 3yrs Menoufia, Egypt · Remote",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute left-[-3rem] bottom-0  ",
  },
  {
    title:
      "Frontend Web Developer GamifierSA · Internship May 2024 Riyadh, Saudi Arabia · Remote",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute left-[-3rem] top-0  ",
  },
  {
    title:
      "Frontend Web Developer CodeAlpha Internship May 2024 Present · 2mos Remote",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute right-[-5rem] bottom-2  ",
  },
  {
    title:
      "Full Stack Developer May 2024 - Present · 2 mos El Mansoura, Ad Daqahliyah, Egypt · Hybrid",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute right-[-5rem] top-0  ",
  },
];
