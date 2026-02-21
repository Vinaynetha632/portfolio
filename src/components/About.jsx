import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 px-5 sm:px-8 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg leading-relaxed text-center px-2 sm:px-0 space-y-6"
        >
          <p>
            I am an Electronics and Communication Engineering (ECE) graduate 
            currently working as a <span className="text-white font-medium">
            Software Developer Intern at Progmaster</span>. I contribute to building 
            scalable and user-centric web applications by implementing frontend 
            features and backend functionalities.
          </p>

          <p>
            Through my internship experience, I have strengthened my skills in 
            full stack development, clean coding practices, version control, 
            debugging, and performance optimization within a structured 
            development environment.
          </p>

          <p>
            I am passionate about modern web technologies and continuously refine 
            my skills to build efficient, maintainable, and production-ready 
            applications that deliver meaningful user experiences.
          </p>
        </motion.div>

        {/* Education & Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-14 sm:mt-16 text-gray-300">

          {/* Education */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Education
            </h3>

            <div className="space-y-6 text-gray-400">
              <div>
                <p className="font-medium text-white">B.Tech – ECE</p>
                <p>Mahatma Gandhi University</p>
                <p>CGPA: 7.0</p>
                <p>2021 – 2025</p>
              </div>

              <div>
                <p className="font-medium text-white">Intermediate</p>
                <p>Prathibha Junior College</p>
                <p>CGPA: 6.5</p>
                <p>2019 – 2021</p>
              </div>
            </div>
          </div>

          {/* Divider (Desktop Only) */}
          <div className="hidden md:block border-l border-white/10"></div>

          {/* Location */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Location
            </h3>
            <p className="text-gray-400 text-lg">Hyderabad, India</p>
            <p className="text-gray-500 mt-2">
              Actively Seeking Full-Time Opportunities
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}