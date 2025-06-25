"use client" // Later will be refactored the useState
import { Input } from 'postcss'
import React, { FormEventHandler, useState } from 'react'
import { text } from 'stream/consumers';
import nodemailer from "nodemailer";
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/mail', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({"name": title, "message": message})
      }
      );
      if (response.ok) {
        console.log('Email sent successfully');
        setTitle("");
        setMessage("");
      }
      console.log(title, message);
    } 
    catch{

    }
  };
  
  return (
      <section id="contact" className='scroll-mt-28'>
        <SectionHeading>
          Contact Me
        </SectionHeading>
        <div className='rounded-full sm:w-[40rem]'>
          <form
            className='flex flex-col items-center bg-gray-100 transition overflow-x-hidden relative gap-4 px-3 py-3 rounded-md'
            onSubmit={handleSubmit}
          >
            <input
              className='px-2 py-1.5 ring-gray/50 ring-[1.5px] rounded-sm !outline-none sm:w-[35rem]'
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder='Write your email subject here'
            />
            <textarea
              className='px-2 py-1.5 ring-gray/50 ring-[1.5px] rounded-sm !outline-none sm:w-[35rem]'
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
              placeholder='Write your email message here'
            />
            <button className='bg-cyan-800 px-4 py-[6px] text-white'>
              Submit
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact