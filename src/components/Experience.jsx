import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#111C2E] to-[#0F172A] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl"
        >

          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">

            <div>
              <span className="inline-block text-xs tracking-wider bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full mb-4">
                ● ONGOING ROLE
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Software Developer Intern
              </h3>

              <p className="text-blue-400 mt-2 text-lg font-medium">
                Progmaster PVT LTD
              </p>
            </div>

            <div className="text-gray-400 text-sm md:text-right">
              <p className="font-medium text-gray-300">
                Jan 2026 - Present
              </p>
              <p>Remote</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Key Contributions */}
            <div>
              <h4 className="text-gray-300 text-sm tracking-wider mb-6">
                KEY CONTRIBUTIONS
              </h4>

              <ul className="space-y-4 text-gray-400 text-sm sm:text-base">
                <li>
                  • Developed responsive and user-friendly interfaces using React.js and Tailwind CSS.
                </li>
                <li>
                  • Implemented backend functionalities and REST APIs using Node.js and Express.js.
                </li>
                <li>
                  • Integrated MongoDB for data storage and optimized application performance.
                </li>
                <li>
                  • Collaborated with team members using Git and followed structured development workflows.
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-gray-300 text-sm tracking-wider mb-6">
                TECH STACK
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                  "JavaScript",
                  "Git",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-sm mt-6 italic">
                Contributing to building scalable, maintainable, and 
                performance-driven web applications in a collaborative environment.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}