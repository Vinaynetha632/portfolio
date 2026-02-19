import { motion } from "framer-motion";
import { CheckCircle, Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-14 sm:py-20 px-5 sm:px-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111C2E] border border-blue-900/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 shadow-xl"
        >
          {/* LEFT SIDE */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-4">
              Ready to review my CV?
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
              Check out my professional experience, education, and technical
              certifications in detail.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm sm:text-base">
                <CheckCircle className="text-blue-500" size={18} />
                Updated for 2026
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm sm:text-base">
                <CheckCircle className="text-blue-500" size={18} />
                ATS-Friendly Format
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm sm:text-base">
                <CheckCircle className="text-blue-500" size={18} />
                Project Highlights
              </div>
            </div>

            {/* DOWNLOAD BUTTON */}
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-medium transition shadow-lg shadow-blue-600/40"
            >
              Download Resume (PDF)
              <Download size={18} />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-[#1E293B] rounded-2xl flex items-center justify-center border border-dashed border-gray-600">
            <div className="text-center text-gray-400">
              <FileText size={36} className="mx-auto mb-3" />
              <p className="text-xs sm:text-sm tracking-wide">RESUME PREVIEW</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
