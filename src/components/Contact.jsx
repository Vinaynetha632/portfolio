import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj8ufni", // 🔹 Replace
        "template_z9w1zh4", // 🔹 Replace
        form.current,
        "hCz-5eUqr4eRZq1Gs",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-5 sm:px-8 bg-[#0F172A]">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16
 items-center"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold
 font-bold text-white leading-snug"
          >
            Let's build something{" "}
            <span className="text-blue-500">extraordinary</span> together.
          </h2>

          <p
            className="text-gray-400 mt-6 max-w-md text-base sm:text-lg
"
          >
            Currently looking for opportunities to join a forward-thinking
            development team. Reach out via the form or social media.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Mail className="text-white" size={18} />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">
                  tiramdasuvinay123@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <MapPin className="text-white" size={18} />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400 text-sm">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111C2E] p-6 sm:p-8 rounded-3xl border border-blue-900/30 shadow-xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full mt-2 p-3 bg-[#1E293B] rounded-xl text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full mt-2 p-3 bg-[#1E293B] rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Message Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full mt-2 p-3 bg-[#1E293B] rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project Opportunity"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full mt-2 p-3 bg-[#1E293B] rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/40 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
