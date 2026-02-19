import { Code, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0F172A] fixed top-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Code size={18} className="text-white" />
          </div>

          <h1 className="text-white font-semibold text-base sm:text-lg hover:text-blue-400 transition">
            Vinay Tiramdasu
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#resume" className="hover:text-white transition">
              Resume
            </a>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg transition shadow-md shadow-blue-600/40"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111C2E] px-5 pb-6 pt-4 space-y-4 text-gray-300"
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Projects
          </a>

          <a
            href="#resume"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Resume
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg mt-4"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
