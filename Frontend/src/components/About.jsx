import { motion,useMotionValue } from "framer-motion";

export default function About() {



  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

  }
  const team = [
    {
      name: "Aditya Waghmare",
      role: "Full Stack Developer & Model Developer",
      desc: "Worked on frontend and backend development, and contributed to building and training the AI model."
    },
    {
      name: "Vinayak Teil",
      role: "Android & Model Developer",
      desc: "Developed the Android application, integrated backend services, and contributed to AI model development."
    },
    {
      name: "Bhushan Mote",
      role: "Backend & Model Developer",
      desc: "Focused on backend development and played a key role in designing and developing the AI model."
    },
    {
      name: "Kalpesh Kulkarni",
      role: "Research & Model Developer",
      desc: "Conducted research on disease detection models and assisted in improving and developing the AI model."
    }
  ];
  return (
    <section id="about" className=" inset-0 contrast-110 relative py-32 px-6 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#042f2e] text-white overflow-hidden
    "
      onMouseMove={handleMouseMove}>


      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-sky-500 opacity-10 blur-3xl"></div>
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-400 opacity-10 blur-[120px] rounded-full"></div>


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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >


        <h2 className="text-5xl font-bold ">
          About GrapesAI 🤖
        </h2>


        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
          GrapesAI is an AI-powered system designed to detect grape leaf diseases
          using advanced machine learning techniques. It helps farmers identify
          diseases at an early stage and provides smart treatment solutions to
          improve crop health and productivity.
        </p>

        <p className="text-gray-400 mt-4 text-sm">
          Our mission is to bring technology and agriculture together to build
          smarter, more efficient, and sustainable farming solutions 🌿
        </p>


        <div className="mt-16">

          <h3 className="text-2xl font-semibold mb-6 text-teal-300">
            Our Team 👨‍💻
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition"
              >
                <h4 className="text-lg font-semibold text-green-300">
                  {member.name}
                </h4>

                <p className="text-sm text-teal-300 mt-1">
                  {member.role}
                </p>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </motion.div>

    </section>
  );
}