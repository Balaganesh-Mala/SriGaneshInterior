import { MdTv } from "react-icons/md";
import { motion } from "framer-motion";
import ServiceLayout from "./ServiceLayout";
import ServiceHeader from "./ServiceHeader";
import tvImg from "../../assets/images/sampleImage.jpg";

export default function TvUnits() {
  return (
    <ServiceLayout>
      <ServiceHeader
        title="TV Units"
        subtitle="Entertainment units that uplift your living space."
        image={tvImg}
      />

      <div className="text-center py-16 px-6 max-w-screen-lg mx-auto space-y-6">
        <motion.div
          initial={{opacity:0, y:6}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="inline-flex text-6xl text-red-600"
        >
          <MdTv />
        </motion.div>

        <h2 className="text-3xl font-bold">Modern TV & Entertainment Units</h2>

        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Wall-mounted, sleek, elegant designs with lighting and storage options.
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
