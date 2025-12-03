import { HiOutlineHome } from "react-icons/hi2";
import { motion } from "framer-motion";
import ServiceLayout from "./ServiceLayout";
import ServiceHeader from "./ServiceHeader";
import fullImg from "../../assets/images/sampleImage.jpg";

export default function FullHome() {
  return (
    <ServiceLayout>
      <ServiceHeader
        title="Full Home Interiors"
        subtitle="End-to-end interior design for your 2BHK, 3BHK or villas."
        image={fullImg}
      />

      <div className="text-center py-16 px-6 max-w-screen-lg mx-auto space-y-6">
        <motion.div
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="inline-flex text-6xl text-red-600"
        >
          <HiOutlineHome />
        </motion.div>

        <h2 className="text-3xl font-bold">Complete Home Transformation</h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We design your living room, bedroom, kitchen, storage, painting and decor
          with personalized designer assistance.
        </p>

        <motion.button
          whileHover={{scale:1.05}}
          className="px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
        >
          Get Quote
        </motion.button>
      </div>
    </ServiceLayout>
  );
}
