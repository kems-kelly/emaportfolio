import React from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/images/Grid.png";
import myImg from "../assets/images/imglogo.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center bg-[#0A0F10]"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container text-white text-center flex flex-col justify-center items-center gap-2 mt-24">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] mx-auto"
        >
          <img
            src={myImg}
            alt="Profile"
            className="w-full h-auto object-cover rounded-full shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 justify-center items-center text-center max-w-3xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl text-heading font-thin leading-tight"
          >
            I’m Ema <span className="text-primary font-medium"> Kelechi</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl text-paragraph"
          >
            UX Engineer & Creative Problem Solver
          </motion.h4>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-paragraph leading-relaxed"
          >
            Bridging design and technology to create exceptional digital
            experiences. Specializing in user research, interaction design, and
            frontend development.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center"
          >
            <a
              href="#work"
              className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-primary text-white font-semibold shadow-md 
               hover:bg-primary/80 transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg"
            >
              View my Work
            </a>

            <a
              href="#contact"
              className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg border border-primary text-primary font-semibold 
               hover:bg-primary hover:text-white transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
