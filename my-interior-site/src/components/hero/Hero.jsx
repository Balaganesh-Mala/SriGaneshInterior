import { motion } from "framer-motion";
import HeroImage from "./HeroImage"; // ✔ correct import for component
import heroBanner from "../../assets/images/heroBanner.jpg"; // ✔ correct import for image

const Hero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Transform Your Home With <br />
            <span className="text-red-600">Modern Interior Design</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            We create elegant interior spaces that fit your lifestyle. From modular kitchens 
            to full home interiors — we deliver premium designs at affordable prices.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-7 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition text-lg font-medium"
          >
            Get Free Consultation
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE COMPONENT */}
        <HeroImage src={heroBanner} /> 
      </div>
    </section>
  );
};

export default Hero;
