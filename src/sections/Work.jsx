import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Example: import from src/assets
import kolo from "../assets/Images/kolofund.jpg";
import healthaxis from "../assets/Images/healthaxis.png";
import checkAi from "../assets/Images/checkAi.png";

const allCaseStudies = [
  {
    id: 1,
    title: "FinTech App Redesign",
    subtitle: "Improving financial accessibility through design",
    problem:
      "Users struggled with complex financial data visualization and poor mobile experience",
    process:
      "Conducted user interviews, created personas, wireframed solutions, and prototyped interactions",
    outcome:
      "40% increase in user engagement and 60% reduction in support tickets",
    tags: ["UX Research", "Prototyping", "Mobile Design"],
    image: kolo,
    imageAlt: "Fintech app mockups",
    link: "https://www.behance.net/your-behance-link",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    subtitle: "Streamlining the shopping experience",
    problem: "High cart abandonment rate and confusing checkout flow",
    process:
      "A/B tested different flows, redesigned checkout process, and implemented accessibility improvements",
    outcome:
      "25% increase in conversion rate and improved accessibility score to AAA",
    tags: ["Conversion Optimization", "Accessibility", "Frontend"],
    image: checkAi,
    imageAlt: "E-commerce app mockups",
    link: "https://www.behance.net/your-behance-link",
  },
  {
    id: 3,
    title: "Healthaxis Dashboard",
    subtitle: "Making patient data intuitive and accessible",
    problem: "Doctors struggled with cluttered dashboards and slow data access",
    process:
      "Redesigned information hierarchy, introduced visual alerts, and optimized loading times",
    outcome: "30% faster task completion and higher user satisfaction scores",
    tags: ["Dashboard", "Healthcare", "Data Visualization"],
    image: healthaxis,
    imageAlt: "Healthcare dashboard mockups",
    link: "https://www.behance.net/your-behance-link",
  },
  {
    id: 4,
    title: "Learning Management System",
    subtitle: "Enhancing online learning engagement",
    problem: "Students found navigation confusing and content hard to track",
    process:
      "Simplified navigation, added progress tracking, and gamification elements",
    outcome: "45% increase in course completion rates",
    tags: ["EdTech", "Gamification", "Frontend"],
    image: "/images/lms-mock.png",
    imageAlt: "Learning management system mockups",
    link: "https://www.behance.net/your-behance-link",
  },
];

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [expanded, setExpanded] = useState(false);

  // Slice array to show only selected items
  const visibleStudies = allCaseStudies.slice(0, visibleCount);

  // Toggle Show More / Show Less
  const toggleView = () => {
    if (expanded) {
      setVisibleCount(2); // collapse
      setExpanded(false);
    } else {
      setVisibleCount(allCaseStudies.length); // expand all
      setExpanded(true);
    }
  };

  return (
    <section id="work" className="section  text-white py-16 px-6 md:px-20">
      <div className="container max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-thin">
            Case<span className="text-primary font-medium">Studies</span>
          </h2>
          <p className="text-sm text-gray-300 mt-3">
            Deep dives into design challenges and the solutions that made a
            difference
          </p>
        </header>

        {/* Case Studies */}
        <div className="space-y-20">
          {visibleStudies.map((c, idx) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid gap-8 items-center md:grid-cols-2"
            >
              {/* Text Block */}
              <div
                className={`${
                  idx % 2 === 0 ? "order-1" : "order-2 md:col-start-2"
                } flex flex-col gap-6`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">{c.title}</h3>
                  <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                    {c.subtitle}
                  </p>
                </div>

                <div className="space-y-4 text-gray-200">
                  <div>
                    <h4 className="font-medium">Problem</h4>
                    <p className="text-sm text-gray-300 mt-1">{c.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-medium">Process</h4>
                    <p className="text-sm text-gray-300 mt-1">{c.process}</p>
                  </div>

                  <div>
                    <h4 className="font-medium">Outcome</h4>
                    <p className="text-sm text-gray-300 mt-1">{c.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-neutral-800 text-gray-300 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-cyan-300 text-sm hover:underline gap-2"
                  aria-label={`View full case study for ${c.title}`}
                >
                  View full case study
                  <FiArrowRight />
                </a>
              </div>

              {/* Image Block */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`${
                  idx % 2 === 0 ? "order-2" : "order-1 md:col-start-1"
                } flex justify-center`}
              >
                <div className="w-full max-w-[520px] border border-white/10 bg-gradient-to-tr from-[#0f1724]/60 to-[#0b0b0b]/40 p-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/30 transition-shadow">
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    className="rounded-lg object-cover w-full h-[420px] md:h-[360px]"
                  />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleView}
            className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-[#10ABFF] to-[#4B45FF] text-paragraph font-semibold shadow-lg hover:bg-bg-gradient-to-b  transition-transform duration-300 hover:scale-105 text-center 
               text-sm sm:text-base md:text-lg cursor-pointer"
          >
            {expanded ? "Show Less work" : "Show More Work"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
