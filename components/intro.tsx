"use client";
import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";
import { BsArrowRight, BsLink } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 text-center max-w-[50rem] sm:mb-10 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="flex items-center justify-center mb-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AiFillStar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/id_card_ut_intern.jpg"
              alt="Bintang Photo"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
              width="192"
              height="192"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
            className="text-3xl absolute bottom-0 right-0"
          >
            🙌
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4x;"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Hi! It's me,{" "}
        <span className="font-bold">Bintang Gabriel Hutabarat</span>. I'm a very{" "}
        <span className="font-bold"> process centric </span>
        and <span className="font-bold">passionate</span> student
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 outline-none
          focus:scale-105 hover:bg-gray-950 active:scale-105 transition"
        >
          {" "}
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* <Link href="#contact"
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 outline-none
          focus:scale-105 active:scale-105 transition'
          >Download My CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' /></Link> */}
        <a
          href="/cv/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 outline-none
  focus:scale-105 active:scale-105 transition"
        >
          Look at My CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <Link
          className="group hover:scale-105 active:scale-[1.15] hover:text-gray-950 bg-white p-4 items-center gap-2 rounded-full"
          href="https://www.linkedin.com/in/bintang-gabriel-h/"
          target="_blank"
        >
          <BsLinkedin className="group-hover:scale-[1.15]" />
        </Link>
      </motion.div>
    </section>
  );
}
