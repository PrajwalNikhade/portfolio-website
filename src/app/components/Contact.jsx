"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import ThemeDetector from "./ThemeDetector";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        theme: "light",
        transition: Slide,
      });
      return; // prevent submission
    }

    // Show success and manually submit
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Slide,
    });

    // Slight delay so toast appears before redirect (optional)
    setTimeout(() => {
      e.target.submit();
    }, 500);
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
      <ThemeDetector />
      <motion.div
        className="tx flex flex-col justify-center items-center m-3 gap-3"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl font-bold underline decoration-[#FDC435]">
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
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />

          <p className="text-lg mx-2">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2"
          />

          <p className="text-lg mx-2">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2"
          />

          <p className="text-lg mx-2">Message</p>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            onKeyDown={handleKeyDown}
            className="my-2 border-2 bg-[#F9FAFF] border-[#FDC435] p-2 h-32 resize-none"
          />

          <Button className={"m-5 p-3"} type="submit">
            Send
          </Button>
        </form>
      </div>

      <div className="logos flex flex-col gap-2 justify-center items-center my-5">
        <motion.h4
          className="font-bold underline decoration-[#FDC435] text-3xl my-2"
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Other ways to contact
        </motion.h4>
        <div className="flex flex-row gap-3">
          <Link
            href="https://linkedin.com/in/prajwalnikhade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loading="lazy"
              src="/bi_linkedin.svg"
              alt="Connect with me on LinkedIn"
              width={50}
              height={50}
              className="hover:scale-110"
            />
          </Link>
          <Link
            href="mailto:prajwalnikhade09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loading="lazy"
              src="/bi_envelope-fill.svg"
              alt="Send me an email"
              width={50}
              height={50}
              className="hover:scale-110"
            />
          </Link>
          <Link
            href="https://github.com/PrajwalNikhade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loading="lazy"
              src="/icons8-github.svg"
              alt="View my projects on GitHub"
              width={50}
              height={50}
              className="hover:scale-110"
            />
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Contact;
