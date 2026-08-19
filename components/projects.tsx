"use client"
import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Projects() {
  return (
    <section id='project' className='scroll-mt-28'>
        <SectionHeading>
          My Projects
        </SectionHeading>
        <div className='pb-10'>
            {
              projectsData.map((item, index) => (
                <React.Fragment key={index}>
                  <Project {...item} />
                </React.Fragment>
              ))
            }
        </div>
    </section>
  )
}
type ProjectProp = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProp) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.7, 1]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.65, 1]
  );

  const projectCard = (
    <motion.div
      ref={ref}
      className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative mb-5 transition ${
        link ? "hover:scale-105 cursor-pointer" : ""
      }`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col">
  <div className="flex items-center gap-2">
    <h3 className="text-2xl font-semibold">{title}</h3>

    {!link && (
      <span className="text-xs text-gray-500">
        Website Currently Inactive 
      </span>
    )}
    {link && (
      <span className="text-xs text-gray-500">
        Click to Visit 
      </span>
    )}
  </div>

  <p className="mt-2 leading-relaxed text-gray-700">
    {description}
  </p>

  <ul className="flex flex-wrap px-3 gap-2 mt-3 mb-4">
    {tags.map((skill, index) => (
      <li
        className="hover:scale-105 hover:text-black hover:bg-white transition bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
        key={index}
      >
        {skill}
      </li>
    ))}
  </ul>
</div>

      <Image
        src={imageUrl}
        alt="project"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-lg object-cover shadow-2xl"
      />
    </motion.div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {projectCard}
    </a>
  ) : (
    projectCard
  );
}