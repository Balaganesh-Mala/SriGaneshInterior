import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdVerified, MdHandyman } from "react-icons/md";
import { FiBox, FiLayout } from "react-icons/fi";

const serviceDetails = [
  {
    title: "Modular Kitchen Designs",
    desc: "Ergonomic, space-optimized kitchens with premium hardware and sleek finishes.",
    icon: MdHandyman,
    features: ["Soft-close channels", "Premium hinges", "Custom layouts"]
  },
  {
    title: "Wardrobe & Storage",
    desc: "Smart storage solutions designed to enhance space without compromising aesthetics.",
    icon: FiBox,
    features: ["Floor-to-ceiling storage", "Custom finish", "Modern handles"]
  },
  {
    title: "False Ceiling & Lighting",
    desc: "Layered ceiling with ambient LED lighting to transform your home ambiance.",
    icon: MdVerified,
    features: ["LED profiles", "Ambient lights", "Modern layering"]
  },
  {
    title: "Full Home Interiors",
    desc: "Complete home transformation including living, bedroom, and utility spaces.",
    icon: FiLayout,
    features: ["Personalized theme", "Material selection", "Room layouts"]
  },
  {
    title: "Painting & Wall Setup",
    desc: "Premium wall finishes including paint, wallpaper, and texture concepts.",
    icon: MdVerified,
    features: ["Luxury textures", "Premium palette", "Designer wallpapers"]
  },
  {
    title: "Inspection & Handover",
    desc: "Final quality check + clean handover process to ensure perfection in every detail.",
    icon: FaArrowRight,
    features: ["Quality assurance", "Damage check", "Clean delivery"]
  }
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-2 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{opacity:0, y:25}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
        >
          Interior Design Services We Offer
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:35}}
              whileInView={{opacity:1, y:0}}
              whileHover={{y:-6}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:i*0.1}}
              className="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm p-7 flex flex-col justify-between h-full group"
            >

              {/* Top Content */}
              <div>
                <div className="flex items-center gap-3 mb-5 text-red-600 text-3xl">
                  <item.icon />
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-base mb-5">{item.desc}</p>

                {/* Small feature bullets */}
                <ul className="space-y-2 mb-4">
                  {item.features.map((f,idx)=>(
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <MdVerified className="text-green-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="flex items-center justify-between text-red-600 font-medium mt-4 text-lg hover:text-red-700 transition">
                <span className="group-hover:underline">Learn More</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
