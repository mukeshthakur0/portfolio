import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold mb-16"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none border border-zinc-700 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none border border-zinc-700 focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none border border-zinc-700 focus:border-blue-500"
            />

            <button
              className="w-full bg-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-700 duration-300"
            >
              Send Message
            </button>

          </form>

          <div className="flex justify-center gap-8 mt-10 text-3xl">

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-blue-500"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;