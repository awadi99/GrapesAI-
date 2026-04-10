import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Leaf3D(){
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

      <div className="absolute w-[500px] h-[500px] bg-green-400 opacity-25 blur-[180px] rounded-full"></div>

      <motion.div
  style={{ rotateX, rotateY }}
  animate={{
    y: [0, -50, 0],
    rotate: [0, 12, -12, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative z-10"
>
  <svg
    width="320"
    height="320"
    viewBox="0 0 24 24"
    fill="none"
    className="text-green-400 drop-shadow-[0_0_80px_rgba(34,197,94,1)]"
  >
    <path
      d="M12 2C7 7 4 10 4 14a8 8 0 0016 0c0-4-3-7-8-12z"
      fill="currentColor"
    />
  </svg>
</motion.div>

    </div>
  );
}