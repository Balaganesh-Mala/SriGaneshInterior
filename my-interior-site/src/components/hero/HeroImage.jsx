import { motion } from "framer-motion";

export default function HeroImage({ src }) {
  return (
    <div className="w-full flex justify-center md:justify-end">
      <motion.img
        src={src}
        alt="Interior Design Banner"
        className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
