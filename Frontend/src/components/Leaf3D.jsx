import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Leaf3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center"
    >

      {/* 🌈 Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-400 opacity-20 blur-[200px] rounded-full"></div>

      {/* 🍃 YOUR IMAGE LEAF */}
      <motion.img
        src="/image/icon.png"  // 👉 put your image in public folder
        alt="leaf"
        style={{ rotateX, rotateY }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-[400px] drop-shadow-[0_0_60px_rgba(34,197,94,0.8)]"
      />

    </div>
  );
}