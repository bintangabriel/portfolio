import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import optiqoeImg from "@/public/optiqoe_pitch_deck_bg.png";
import egsr from "@/public/e-gsr.png";
import perak from "@/public/perak.png";
import camera from "@/public/photo-camera.svg";
import bimbel_lucky from "@/public/bimbel_lucky.png";
import { link } from "fs";


export const navData = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Project",
    hash: "#project",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - Intermediate to Senior",
    location: "XL Smart",
    description: "Working as a software engineer in XL Smart where I handled all of the Axis bundling to smartphone brand such as Samsung, Iphone, Oppo, etc.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2026 - Present",
  },
  {
    title: "Management Trainee IT - Product Owner",
    location: "Astra Credit Companies",
    description: "Joined in Sept 2024 as a IT management trainee, I learn the end to end of the company busines process and build 5 project, in total, to benefit the company. I ranked 2 among the IT Management trainee and get a placement as a Product Owner to handle the internal and external product for Astra Financial Services.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2024 - Apr 2026",
  },
  {
    title: "Software Engineer",
    location: "Meeting.ai - Bahasa.ai - Transkrip.com",
    description: "Working as a software engineer in Bahasa AI where I handled all of the B2C products, ranging from Bahasa.ai, Meeting.ai, and Transkrip.com. I was responsible for the development of the backend side where I connect the frontend and the brain (AI System) to run smoothly.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Aug 2024",
  },
  {
    title: "Full Stack Developer",
    location: "United Tractors Astra",
    description:
      "Work as an full stack developer intern where I develop a mobile apps for reporting service result. This mobile apps helps the service reporting process a lot by reducing the time of end to end process from couple of days (weeks) to only couple of hours. Also, I directly help the departmenet manager by building a dashboard to monitor the service result in real time.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Full Stack Web Developer",
    location: "PT JAWAH ",
    description:
      "Developing a fully integrated information system to digitalize company's business process, resulting efficiency of JAWAH business flow by 50% that is used by JAWAH employee for the internal company",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - June 2023",
  },
  {
    title: "Bangkit Academy Led by Google, GoTo, and Traveloka",
    location: "Remote",
    description: "Graduated  bootcamp in Machine Learning Path and get appreciated from the mentor as a good final project. We built an AI platform to help people buying a glasses by giving glasses frame recommendation based on user's face shape.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Lucky Edukasi",
    description: "Website for Bimbel Lucky, an online tutoring service in Indonesia.",
    tags: ["Next.js", "Go", "Tailwind", "PostgreSQL", "Jenkins"],
    imageUrl: bimbel_lucky,
    link: "https://www.luckyedukasi.com"
  },
  {
    title: "E-GSR",
    description:
      "Mobile and web based platform that developed for reporting service result and used by United Tractor staff and customer. I was the full stack developer, building the backend and frontend for mobile and desktop version. I also use GCP service, Cloud Vision, to build OCR feature.",
    tags: ["Spring Boot", "Flutter", "Google Cloud Platform"],
    imageUrl: egsr,
    link: null,
  },
  {
    title: "Rumah Sehat",
    description:
      "This app simulates how we can create a digital platform for scheduling appoinment to the doctor, buy medicine, and many more. I create a fully REST API using Spring Boot framework and React Native for the mobile version of the app",
    tags: ["React Native", "Spring Boot", "Axios"],
    imageUrl: camera,
    link: null,
  },
  {
    title: "OPTIQOE",
    description:
      "An eyeglasses marketplace for Indonesia. Creating a platform where SDEs can buy their product online with special feature that is frame recommendation based on user's face shape",
    tags: ["Tensorflow", "Jetpack Compose", "Google Cloud Platform"],
    imageUrl: optiqoeImg,
    link: null,
  },
  {
    title: "PERAK",
    description:
      "A website for Fasilkom UI festival. I was a frontend developer working with 4 other frontend dev. We built feature like typeracer, show and update league standing, Fasilkom UI digital map, and many more. The website used by all of the Fasilkom UI students and even lecturer. Made as an example of great interactive website for Programming subject in Fasilkom UI.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: perak,
    link: null,
  },
] as const;

export const skillsData = [
  "Spring Boot",
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "Flutter",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
