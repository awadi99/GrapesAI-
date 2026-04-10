import { motion } from "framer-motion";
import { FaUpload, FaSearch, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-green-400" />,
      title: "Upload Leaf Image",
      desc: "Upload a clear image of the grape leaf to start the detection process."
    },
    {
      icon: <FaSearch className="text-teal-400" />,
      title: "AI Analysis",
      desc: "Our AI model analyzes the image to detect diseases using advanced algorithms."
    },
    {
      icon: <FaCheckCircle className="text-sky-400" />,
      title: "Get Results & Solution",
      desc: "Receive accurate results along with smart treatment recommendations."
    }
  ];

  return (

    
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden"
    
    id="howitworks">


<div className="absolute inset-0 overflow-hidden">

{[...Array(80)].map((_, i) => {
  const size = Math.random() * 3 + 1; // random size
  return (
    <span
      key={i}
      className="absolute bg-white rounded-full opacity-60 animate-floatStar"
      style={{
        width: size + "px",
        height: size + "px",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        animationDuration: 6 + Math.random() * 6 + "s",
        animationDelay: Math.random() * 5 + "s",
      }}
    />
  );
})}

</div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-sky-500 opacity-10 blur-3xl"></div>

      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl font-bold">
          How It Works ⚡
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Follow these simple steps to detect grape leaf diseases and protect your crops using AI.
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-10 relative z-10 max-w-6xl mx-auto">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl backdrop-blur-xl 
            bg-gradient-to-br from-white/5 via-white/5 to-white/10 
            border border-white/10 
            shadow-[0_0_60px_rgba(34,197,94,0.2)] 
            hover:shadow-[0_0_100px_rgba(56,189,248,0.3)] 
            transition duration-300 text-center"
          >

            
            <div className="text-sm text-gray-400 mb-2">
              Step {i + 1}
            </div>

            
            <div className="text-4xl mb-4 flex justify-center">
              {step.icon}
            </div>

            
            <h3 className="text-xl font-semibold mb-2">
              {step.title}
            </h3>

            
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}