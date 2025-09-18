import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import kolos from "../assets/Images/kolofund.jpg";
import checkai from "../assets/Images/checkAi.png";
import health from "../assets/Images/healthaxis.png";
import proj4 from "../assets/Images/projects1.png";
import proj5 from "../assets/Images/projects2.png";
import proj6 from "../assets/Images/projects3.png";

const projects = [
  {
    id: 1,
    title: "KoloFund",
    desc: "A savings and investment app built with design thinking principles.",
    img: kolos,
    links: {
      figma:
        "https://www.figma.com/proto/zkTIMSB81MjlyctqnP1Vwv?content-scaling=fixed&kind=proto&node-id=588-32559&page-id=87:23054&scaling=min-zoom&starting-point-node-id=588:32543",
      behance:
        "https://www.behance.net/gallery/232525501/KoloFund-Fintech-Savings-App",
      live: "https://kolofunds.framer.website/",
    },
  },
  {
    id: 2,
    title: "CheckAI",
    desc: "AI-powered tool for smarter decisions with intuitive UX.",
    img: checkai,
    links: {
      figma:
        "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
      behance:
        "https://www.behance.net/gallery/186984891/Check-AI-An-AI-Bias-Detection-Tool-(UI-UX-Case-Study)/modules/1057299763",
      live: "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
    },
  },
  {
    id: 3,
    title: "HealthAxis",
    desc: "Healthcare SaaS platform focused on better data management.",
    img: health,
    links: {
      figma:
        "https://www.figma.com/proto/6xgTXJwe9KjJLQBUvQjeVC/HealthAxis?page-id=268%3A9010&node-id=317-7160&viewport=539%2C382%2C0.02&t=peANeauGyJkCFdui-1&scaling=min-zoom&content-scaling=fixed",
      behance:
        "https://www.behance.net/gallery/234250419/Seamless-Patient-and-Hospital-Management-System-(SaaS)",
    },
  },
  {
    id: 4,
    title: "Project Four",
    desc: "Concept project showcasing creative interactions.",
    img: proj4,
    links: {
      figma:
        "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
      behance:
        "https://www.behance.net/gallery/186984891/Check-AI-An-AI-Bias-Detection-Tool-(UI-UX-Case-Study)/modules/1057299763",
      live: "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
    },
  },
  {
    id: 5,
    title: "Project Five",
    desc: "Modern UI exploration with emphasis on scalability.",
    img: proj5,
    links: {
      figma:
        "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
      behance:
        "https://www.behance.net/gallery/186984891/Check-AI-An-AI-Bias-Detection-Tool-(UI-UX-Case-Study)/modules/1057299763",
    },
  },
  {
    id: 6,
    title: "Project Six",
    desc: "End-to-end product design case study with live prototype.",
    img: proj6,
    links: {
      figma:
        "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
      behance:
        "https://www.behance.net/gallery/186984891/Check-AI-An-AI-Bias-Detection-Tool-(UI-UX-Case-Study)/modules/1057299763",
      live: "https://www.figma.com/design/zkTIMSB81MjlyctqnP1Vwv/KoloFund?node-id=727-24206&t=1L7d6YIGoYCJpua7-1",
    },
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
                    {proj.links.figma?.trim() && (
                      <a
                        href={proj.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--btn)] text-sm px-3 text-paragraph py-1 rounded-full hover:bg-[var(--btn)]/50 transition"
                      >
                        Figma
                      </a>
                    )}
                    {proj.links.behance?.trim() && (
                      <a
                        href={proj.links.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--btn)] text-sm px-3 text-paragraph py-1 rounded-full hover:bg-[var(--btn)]/50 transition"
                      >
                        Behance
                      </a>
                    )}
                    {proj.links.live?.trim() && (
                      <a
                        href={proj.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
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

      <div className=" section container bg-gradient-to-r from-[#10ABFF] to-[#4B45FF] mt-32 shadow-xl hover:shadow-2xl shadow-primary/30 rounded-2xl">
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
          className="flex flex-col lg:flex-row gap-4 mt-6 justify-center items-center  "
        >
          <a
            href="#contact"
            className=" px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-black text-primary font-semibold shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base  md:text-lg cursor-pointer"
          >
            Start a Project
          </a>
          <a
            href="#about"
            className="px-5 py-2 sm:px-6 sm:py-3 md:px-6 md:py-4
             border border-heading/20 text-heading font-semibold
             rounded-lg shadow-lg text-center
             text-sm sm:text-base md:text-lg
             transition-transform duration-300 hover:scale-105
             hover:bg-gradient-to-b hover:from-primary hover:to-blue-600 hover:text-white"
          >
            Get to Know Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
