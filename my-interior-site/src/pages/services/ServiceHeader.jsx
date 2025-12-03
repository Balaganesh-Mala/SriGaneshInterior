import { motion } from "framer-motion";

export default function ServiceHeader({ title, subtitle, image }) {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh]">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover brightness-50"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-3"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
