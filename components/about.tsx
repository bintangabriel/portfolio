"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id='about' className='scroll-mt-28'>
    <SectionHeading>About Me</SectionHeading>
    <div className='max-w-[40rem] leading-8 scroll-mt-28 mb-10'>
      <motion.p className='text-center'
      initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}> 
        A {" "}<span className='font-bold text-red-300'>computer science student</span>{" "}from {" "}<span className='font-bold text-red-300'>University of Indonesia</span>.
        With experience in {" "} <span className='font-bold text-red-300'>Tensorflow, Python, SQL, Django, and sklearn,</span>
        {" "}I specialize in {" "}<span className='font-bold text-red-300'>machine learning </span>{" "}including {" "} <span className=' text-red-300 font-bold'>
        data science and data manipulation problems</span>. I also have experiences in using some framework such as {" "} 
        <span className='font-bold text-red-300'>SpringBoot, React, Flask, Django</span>{" "}to create web and mobile app. I love to explore new technologies and open 
        to new opportunities in {" "}<span className='font-bold text-red-300'>data science, machine learning, and software engineering</span>{" "}field. As a 
        dedicated learner, I am ready to contribute to the advancement of the technology industry.
      </motion.p>
    </div>
    </section>
  )
}
