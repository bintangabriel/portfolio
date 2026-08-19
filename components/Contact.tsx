"use client";

import React, { FormEventHandler, useState } from "react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: title,
          message,
        }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        console.log("Email sent successfully");
        setEmail("");
        setTitle("");
        setMessage("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28">
      <SectionHeading>
        Contact Me
      </SectionHeading>

      <div className="rounded-full sm:w-[40rem]">
        <form
          className="flex flex-col items-center bg-gray-100 transition overflow-x-hidden relative gap-4 mb-4 px-3 py-3 rounded-md"
          onSubmit={handleSubmit}
        >
          {/* Sender Email */}
          <input
            className="px-2 py-1.5 ring-gray/50 ring-[1.5px] rounded-sm !outline-none sm:w-[35rem]"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />

          {/* Subject */}
          <input
            className="px-2 py-1.5 ring-gray/50 ring-[1.5px] rounded-sm !outline-none sm:w-[35rem]"
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write your email subject here"
          />

          {/* Message */}
          <textarea
            className="px-2 py-1.5 ring-gray/50 ring-[1.5px] rounded-sm !outline-none sm:w-[35rem]"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your email message here"
          />

          {status && (
  <p
    className={`text-sm ${
      status.includes("successfully")
        ? "text-green-600"
        : status === "Sending..."
        ? "text-gray-600"
        : "text-red-600"
    }`}
  >
    {status}
  </p>
)}

          <button
            type="submit"
            className="bg-cyan-800 px-4 py-[6px] text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;