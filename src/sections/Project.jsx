import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import kolos from "../assets/Images/kolofund.jpg";
import checkai from "../assets/Images/checkAi.png";
import health from "../assets/Images/healthaxis.png";

// Add 3 more placeholders (replace with real images later)
import proj4 from "../assets/Images/projects1.png";
import proj5 from "../assets/Images/projects2.png";
import proj6 from "../assets/Images/projects3.png";

const projects = [
  {
    id: 1,
    title: "KoloFund",
    desc: "A savings and investment app built with design thinking principles.",
    img: kolos,
    links: { figma: "#", behance: "#", live: "#" },
  },
  {
    id: 2,
    title: "CheckAI",
    desc: "AI-powered tool for smarter decisions with intuitive UX.",
    img: checkai,
    links: { figma: "#", behance: "#", live: "#" },
  },
  {
    id: 3,
    title: "HealthAxis",
    desc: "Healthcare SaaS platform focused on better data management.",
    img: health,
    links: { figma: "#", behance: "#" },
  },
  {
    id: 4,
    title: "Project Four",
    desc: "Concept project showcasing creative interactions.",
    img: proj4,
    links: { figma: "#", behance: "#", live: "#" },
  },
  {
    id: 5,
    title: "Project Five",
    desc: "Modern UI exploration with emphasis on scalability.",
    img: proj5,
    links: { figma: "#", behance: "#", live: "#" },
  },
  {
    id: 6,
    title: "Project Six",
    desc: "End-to-end product design case study with live prototype.",
    img: proj6,
    links: { figma: "#", behance: "#", live: "#" },
  },
];

export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="project" className="section ">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-thin text-heading">
            Featured <span className="text-primary font-medium">Projects</span>
          </h2>
          <p className="text-paragraph mt-2 max-w-2xl mx-auto text-center leading-relaxed">
            Ready to create exceptional digital experiences? I'm always excited
            to collaborate on innovative projects that make a meaningful impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <AnimatePresence>
            {visibleProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#121212] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading">
                    {proj.title}
                  </h3>
                  <p className="text-paragraph text-sm mt-2">{proj.desc}</p>
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {proj.links.figma && (
                      <a
                        href={proj.links.figma}
                        className="bg-[var(--btn)] text-sm px-3 text-paragraph py-1 rounded-full hover:bg-[var(--btn)]/50 transition"
                      >
                        figma
                      </a>
                    )}
                    {proj.links.behance && (
                      <a
                        href={proj.links.behance}
                        className="bg-[var(--btn)] text-sm px-3 text-paragraph py-1 rounded-full hover:bg-[var(--btn)]/50 transition"
                      >
                        Behance
                      </a>
                    )}
                    {proj.links.live && (
                      <a
                        href={proj.links.live}
                        className="bg-[var(--btn)] text-sm px-3 text-paragraph py-1 rounded-full hover:bg-[var(--btn)]/50 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-[#10ABFF] to-[#4B45FF] text-paragraph font-semibold shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg cursor-pointer"
          >
            {showAll ? "Show Less Projects" : "Show All Projects"}
          </motion.button>
        </div>
      </div>
      <div className=" section container bg-gradient-to-r from-[#10ABFF] to-[#4B45FF] mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-heading">
            Lets Build Something <br />
            <span className="text-primary font-medium">Amazing Together</span>
          </h2>
          <p className="text-paragraph mt-2 max-w-2xl mx-auto text-center leading-relaxed">
            Ready to create exceptional digital experiences? I'm always excited
            to collaborate on innovative projects that make a meaningful impact.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center "
        >
          <a
            href="#contact"
            className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-black text-primary ont-semibold shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg cursor-pointer"
          >
            Start a Project
          </a>
          <a
            href="#about"
            className=" border border-black/20 text-primary font-semibold hover:bg-primary/20 hover:text-white  px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg  shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg cursor-pointer"
          >
            Learn more about me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
