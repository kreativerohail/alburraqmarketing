import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import bur from "../assets/bur.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const projects = [
    { name: "Paradise Valley", path: "/paradise-valley" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center px-4 py-5 z-50">
      <motion.div
        layout
        transition={{ duration: 0.4 }}
        className="w-[90%] max-w-4xl bg-[#111] text-white rounded-[40px] px-4  shadow-xl"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between relative min-h-[50px] md:min-h-[60px]">

          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3">

            {/* Logo */}
            <img
              src={bur}
              alt="Al Burraq Logo"
              className="h-8 sm:h-10 md:h-8 w-auto object-contain transition duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            />

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

            {/* Projects Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-white transition">
                Projects
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl p-4 flex flex-col gap-3"
                  >
                    {projects.map((item, index) => (
                      <Link key={index} to={item.path}>
                        <button className="text-left hover:bg-gray-800 px-4 py-2 rounded-lg transition w-full">
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                Book a Call
                <FiArrowUpRight />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md transition hover:scale-105"
            >
              {menuOpen ? (
                <FaTimes className="text-black text-lg" />
              ) : (
                <FaBars className="text-black text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden flex flex-col gap-6 mt-6 text-lg font-medium"
            >
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>

              {/* Mobile Projects */}
              <div>
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="flex justify-between w-full"
                >
                  <span>Projects</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                </button>

                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-3 mt-4 pl-4 text-base"
                    >
                      {projects.map((item, index) => (
                        <Link key={index} to={item.path}>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact">
                <button className="w-full bg-white text-black py-4 rounded-full text-lg font-semibold flex justify-center items-center gap-2 mt-4">
                  Book a Call
                  <FiArrowUpRight />
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}