import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#070707] section">
      <div className="container ">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-heading font-thin leading-tight mb-10 text-center md:text-left"
        >
          About <span className="text-primary font-medium">Me</span>
        </motion.h2>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-sm md:text-base text-paragraph leading-relaxed">
              I'm a UX Engineer with 6+ years of experience creating
              user-centered digital experiences. I combine design thinking with
              technical expertise to build products that are both beautiful and
              functional. My approach focuses on understanding user needs
              through research and translating insights into scalable design
              solutions. When I'm not designing or coding, you'll find me
              exploring new technologies, contributing to open-source projects,
              or mentoring aspiring designers and developers.
            </p>
            <a
              href="https://drive.google.com/file/d/1gK-KtPax47f6ChLnzn0uEcRQGMd2UHds/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-[#10ABFF] to-[#4B45FF] text-paragraph font-semibold shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg cursor-pointer mt-10"
            >
              Download CV
            </a>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left "
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Skills and Expertise
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {[
                "UX Research",
                "Information Architecture",
                "Prototyping",
                "Frontend Development",
                "Accessibility",
                "Design Systems",
                "User Testing",
                "Figma",
                "React",
                "TypeScript",
                "Webflow",
                "Framer",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-[#262626] text-gray-200 text-sm md:text-base font-medium shadow-sm hover:bg-primary hover:text-white transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
