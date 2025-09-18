import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-b border-primary/10 backdrop-blur-md shadow-md z-50 fixed top-0 left-0"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 text-3xl font-extrabold"
        >
          <span className="text-heading font-light">Ema</span>
          <span className="text-primary font-medium">Kelly</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-paragraph hover:text-primary transition-all"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Let’s Talk Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="ml-4 px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition cursor-pointer"
          >
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-100"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden h-[100vh] backdrop-blur-md shadow-md p-6 flex flex-col gap-8"
        >
          <ul className="flex flex-col gap-6 text-paragraph font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Let’s Talk Button in Mobile */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition text-center cursor-pointer"
          >
            Let’s Talk
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Nav;
