import { MdOutlineBedroomParent } from "react-icons/md";
import { motion } from "framer-motion";
import ServiceLayout from "./ServiceLayout";
import ServiceHeader from "./ServiceHeader";
import wardrobeImg from "../../assets/images/sampleImage.jpg";

export default function Wardrobes() {
  return (
    <ServiceLayout>
      <ServiceHeader
        title="Wardrobes"
        subtitle="Smart storage solutions that enhance elegance and space utilization."
        image={wardrobeImg}
      />

      <div className="max-w-screen-lg mx-auto py-16 px-6 text-center space-y-6">
        <motion.div
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="inline-flex text-6xl text-red-600 mb-3"
        >
          <MdOutlineBedroomParent />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900">Custom Wardrobes & Storage</h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Personalized wardrobe interiors with premium hardware, modern finishes,
          and floor-to-ceiling storage options.
        </p>

        <motion.button
          whileHover={{scale:1.05}}
          className="mt-6 px-5 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
        >
          Get Quote
        </motion.button>
      </div>
    </ServiceLayout>
  );
}
