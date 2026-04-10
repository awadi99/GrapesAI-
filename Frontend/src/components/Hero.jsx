import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import Leaf3D from "./Leaf3D";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white"
    >

      
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#22c55e,#14b8a6,#38bdf8,#a3e635)] bg-[length:300%_300%] animate-gradientSlow opacity-25 blur-3xl"></div>

      
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      
      <motion.div
        className="pointer-events-none fixed w-[250px] h-[250px] rounded-full blur-[100px] opacity-60"
        style={{
          left: mouseX,
          top: mouseY,
          background:
            "radial-gradient(circle, rgba(34,197,94,0.8), rgba(20,184,166,0.6), rgba(56,189,248,0.4))",
          transform: "translate(-50%, -50%)",
        }}
      />

      
      <div className="relative z-10 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight">
          Smart GrapesAI <br />
            <span className="bg-gradient-to-r from-green-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
            for  Grape Leaf Disease Detection 🍇
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-md">
          GrapesAI analyzes grape leaf images to identify diseases with high precision and provides actionable treatment recommendations.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/result"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-sky-400 text-black font-bold shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:scale-105 transition"
            >
              Start Detection
            </Link>


          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <Leaf3D/>

      </div>

    </section>
  );
}