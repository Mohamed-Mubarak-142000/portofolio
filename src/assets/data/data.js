import courseImg from "../images/course.png";
import taskImg from "../images/taskDashboard.png";
import youtubeImg from "../images/youtube.png";
import eslamiImg from "../images/eslami.png";
import souqImg from "../images/souq.png";

import certificate1 from "../../assets/images/certifecate1.jpg";
import certificate2 from "../../assets/images/certifecate2.png";

import courseVedio from "../videos/course.mp4";
import eslamiVedio from "../videos/eslami.mp4";
import souqVedio from "../videos/souq.mp4";
import taskDashboardVedio from "../videos/taskDashboard.mp4";
import youtubeVedio from "../videos/youtube.mp4";

export const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

export const certificate = [
  {
    id: 1,
    type: "internship",
    track: "Frontend Developer React js",
    from: "Information Technology Institute (ITI)",
    image: certificate1,
  },
  {
    id: 2,
    type: "internship",
    track: "Frontend Developer React js",
    from: "Information Technology Institute (ITI)",
    image: certificate2,
  },
];

export const items = [
  {
    title:
      "I graduated from the Faculty of Computers and Information, Menoufia University With a good grade in 2022",
    size: "text-[20px]",
    classResponsive:
      "p-5 w-[320px] shadow-md rounded absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] ",
  },
  {
    title:
      "Information Technology Institute (ITI) Hybrid Frontend React Developer Jul 2021 - Present · 3yrs Menoufia, Egypt · Remote",
    size: "text-[18px]",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute left-[-3rem] bottom-0  ",
  },
  {
    title:
      "Frontend Web Developer GamifierSA · Internship May 2024 Riyadh, Saudi Arabia · Remote",
    size: "text-[18px]",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute left-[-3rem] top-0  ",
  },
  {
    title:
      "Frontend Web Developer CodeAlpha Internship May 2024 Present · 2mos Remote",
    size: "text-[18px]",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute right-[-5rem] bottom-2  ",
  },
  {
    title:
      "Full Stack Developer May 2024 - Present · 2 mos El Mansoura, Ad Daqahliyah, Egypt · Hybrid",
    size: "text-[18px]",
    classResponsive:
      "p-5 w-[250px] shadow-md rounded absolute right-[-5rem] top-0  ",
  },
];
