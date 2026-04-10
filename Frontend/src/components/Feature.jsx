import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaBrain } from "react-icons/fa";
import { fadeIn } from "../utils/motion";

export default function Features() {
  const features = [
    {
      icon: <FaLeaf className="text-green-400" />,
      title: "Accurate Detection",
      desc: "Identify grape leaf diseases using advanced AI models with high accuracy.",
      extra:
        "Our system analyzes leaf patterns, color variations, and textures to detect diseases at an early stage.",
    },
    {
      icon: <FaBolt className="text-green-400" />,
      title: "Fast Processing",
      desc: "Get instant results in seconds with optimized AI performance.",
      extra:
        "The model processes uploaded images in real-time, ensuring quick feedback for immediate action.",
    },
    {
      icon: <FaBrain className="text-green-400" />,
      title: "Smart Solutions",
      desc: "Receive intelligent treatment suggestions for healthier crops.",
      extra:
        "Provides actionable insights and recommended treatments to improve crop health and yield.",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden"
    id="features"
    >

      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-sky-500 opacity-10 blur-3xl"></div>

      


      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", "spring", 0, 1)}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold  ">
          Powerful Features 🌿
        </h2>

        <p className="text-gray-400 mt-4">
          Advanced AI tools designed for modern agriculture
        </p>
      </motion.div>

      
      <div className="grid md:grid-cols-3 gap-10 relative z-10">

        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", "spring", i * 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-2xl backdrop-blur-xl 
            bg-gradient-to-br from-white/5 via-white/5 to-white/10 
            border border-green-400/30 
            shadow-[0_0_60px_rgba(34,197,94,0.3)] 
            hover:shadow-[0_0_100px_rgba(56,189,248,0.4)] 
            hover:border-teal-400/60
            transition duration-300"
          >

            {/* Icon */}
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            
            <p className="text-gray-400 text-sm mb-2">
              {item.desc}
            </p>

            
            <p className="text-gray-500 text-xs leading-relaxed">
              {item.extra}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}