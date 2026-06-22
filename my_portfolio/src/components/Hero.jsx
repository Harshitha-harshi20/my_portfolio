
import React from "react";
import profileImg from "../assets/profile.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-16"
    >

      {/* Left Content */}
      <div className="space-y-7 text-center md:text-left md:max-w-2xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"
        >
          Open to Internships ✨
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-indigo-600">
            Harshitha R
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          A passionate Computer Science student and frontend developer focused on building modern, responsive, and user-friendly web applications using React, Tailwind CSS, and JavaScript.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
        >

          {/* Projects Button */}
          <a
            href="#projects"
            className="bg-indigo-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-white border border-slate-300 text-slate-700 font-semibold px-7 py-3 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-slate-900 text-white font-semibold px-7 py-3 rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
          >
            <FaDownload />
            Resume
          </a>

        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-5 pt-4 justify-center md:justify-start"
        >

          <a
            href="https://github.com/Harshitha-harshi20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-600 hover:text-indigo-600 hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/harshitha-r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-600 hover:text-indigo-600 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:harshithasupreeth@gmail.com"
            className="text-2xl text-slate-600 hover:text-indigo-600 hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative group"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-indigo-400 rounded-3xl rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>

        {/* Image */}
        <img
          src={profileImg}
          alt="Harshitha R"
          className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
        />

      </motion.div>

    </motion.section>
  );
}