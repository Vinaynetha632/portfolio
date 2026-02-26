import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack Chat Application",
    description:
      "A real-time full-stack chat application built using the MERN stack. It features user authentication, one-to-one messaging, real-time communication with WebSockets, and scalable backend architecture. The project focuses on performance, security, and seamless user experience.",
    image: "/Project1.jpeg",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demo: "https://chat-application-eight-kappa.vercel.app/",
    github: "https://github.com/Vinaynetha632/Chat-application",
  },
  {
    title: "Arya Arcade Constructions",
    description:
      "A fully responsive and modern website developed for Arya Arcade — a contemporary space designed for comfort, style, and community engagement. The platform showcases services, amenities, and booking features with a seamless user experience across all devices.",
    image: "/Project2.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://arya-arcade.vercel.app/",
    github: "https://github.com/Vinaynetha632/Arya-Arcade",
  },
  {
    title: "Ping Pong Game",
    description:
      "A simple yet engaging Ping Pong game built using JavaScript. Players control the paddle to keep the ball in play, showcasing real-time rendering, game logic implementation, and responsive keyboard interactions.",
    image: "/Project3.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://vinaynetha632.github.io/ping-pong-game/",
    github: "https://github.com/Vinaynetha632/ping-pong-game",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-20 px-5 sm:px-8 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              A selection of my recent work
            </p>
          </div>

          <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2 transition text-sm sm:text-base">
            View All <ExternalLink size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-auto pt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm transition shadow-md shadow-blue-600/40"
                  >
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0F172A] hover:bg-[#243247] transition"
                  >
                    <Github size={18} className="text-gray-300" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
