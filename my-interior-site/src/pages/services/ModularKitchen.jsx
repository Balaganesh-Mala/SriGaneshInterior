import { FaKitchenSet } from "react-icons/fa6";
import { motion } from "framer-motion";
import ServiceLayout from "./ServiceLayout";
import ServiceHeader from "./ServiceHeader";
import kitchenImg from "../../assets/images/sampleImage.jpg"; // placeholder for now

export default function ModularKitchen() {
  return (
    <ServiceLayout>
      <ServiceHeader
        title="Modular Kitchen"
        subtitle="Beautiful, durable and space-optimized kitchen designs for modern homes."
        image={kitchenImg}
      />

      <div className="max-w-screen-lg mx-auto py-16 px-6 text-center space-y-6">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="inline-flex justify-center mb-4 text-5xl text-red-600"
        >
          <FaKitchenSet />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900">Custom Modular Kitchens</h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Tailor-made modular kitchens equipped with soft-close channels, premium hinges,
          durable finishes, and personalized 3D layout planning.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.96}}
            className="px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
          >
            Get Quote
          </motion.button>
        </div>
      </div>
    </ServiceLayout>
  );
}
