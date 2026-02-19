import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={30} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={30} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={30} className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact size={30} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress size={30} className="text-gray-300" /> },
  { name: "Python", icon: <FaPython size={30} className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-14 sm:py-20 px-5 sm:px-8 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Technical Expertise
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E293B] rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#243247] transition-all duration-300 shadow-md"
            >
              <div className="p-3 sm:p-4 rounded-xl bg-[#0F172A]">
                {skill.icon}
              </div>
              <h3 className="text-white font-medium text-sm sm:text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
