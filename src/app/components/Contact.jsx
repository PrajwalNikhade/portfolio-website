"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // stop form from submitting
      toast.error("Please fill out all fields.", {
        position: "top-center",
        theme: "light",
        transition: Slide,
      });
      return;
    }

    // allow form to submit, but show toast
    toast.success("Sending message...", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
      transition: Slide,
    });

    setIsSubmitting(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1]?.focus();
    }
  };

  return (
    <>
      <motion.div
        className="tx flex flex-col justify-center items-center m-3 gap-3"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold underline decoration-[#FDC435]" id="contact-heading">
          Contact
        </h2>
        <p className="text-2xl">Feel free to contact</p>
      </motion.div>

      <div className="border-2 border-[#FDC435] md:w-fit w-[90%] mx-auto mb-10 mt-5 p-10 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORM_SUBMIT_ID}`}
          method="POST"
          className="flex flex-col justify-center"
          aria-labelledby="contact-heading"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />

          <label className="text-lg mx-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            autoComplete="name"
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2"
            aria-required="true"
          />

          <label className="text-lg mx-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            autoComplete="email"
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2"
            aria-required="true"
          />

          <label className="text-lg mx-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            required
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2 h-32 resize-none"
            aria-required="true"
          />

          <Button className="m-5 p-3" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>

      <div className="logos flex flex-col gap-2 justify-center items-center my-5">
        <motion.h4
          className="font-bold underline decoration-[#FDC435] text-3xl my-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Other ways to contact
        </motion.h4>
        <div className="flex flex-row gap-3">
          <Link href="https://linkedin.com/in/prajwalnikhade" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Image src="/bi_linkedin.svg" alt="LinkedIn icon" width={50} height={50} />
          </Link>
          <Link href="mailto:prajwalnikhade09@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <Image src="/bi_envelope-fill.svg" alt="Email icon" width={50} height={50} />
          </Link>
          <Link href="https://github.com/PrajwalNikhade" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Image src="/icons8-github.svg" alt="GitHub icon" width={50} height={50} />
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Contact;
