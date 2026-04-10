import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative px-6 py-16 bg-[#020617] text-white overflow-hidden border-t border-white/10"
    >

      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-400 opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400 opacity-10 blur-[150px] rounded-full"></div>


      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10"
      >

        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
            GrapesAI 🍇
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            AI-powered grape leaf disease detection system helping farmers
            improve crop health and productivity using smart technology.
          </p>
        </motion.div>

        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-teal-300">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#howitworks" className="hover:text-white transition">how it works</a></li>
          </ul>
        </motion.div>

        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-green-300">
            Features
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>AI Disease Detection</li>
            <li>Real-time Analysis</li>
            <li>Smart Solutions</li>
            <li>Farmer Friendly UI</li>
          </ul>
        </motion.div>

        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-sky-300">
            Connect With Us
          </h3>

          <div className="flex gap-4 text-xl">

            <a href="https://github.com/awadi99" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-green-400 hover:text-black transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/aditya-waghmare-95271b25a/" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-teal-400 hover:text-black transition">
              <FaLinkedin />
            </a>

            <a className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-sky-400 hover:text-black transition">
              <FaInstagram />
            </a>

          </div>
        </motion.div>

      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm"
      >
        © 2026 GrapesAI. Built by AW Group
      </motion.div>

    </motion.footer>
  );
}