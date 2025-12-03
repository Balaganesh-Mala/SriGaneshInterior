import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const demoImg = "https://ik.imagekit.io/izqq5ffwt/wood-sideboard-green-living-room-with-copy-space.jpg?updatedAt=1763968065051";

const allProjects = [
  { id: 1, img: demoImg, name: "Luxury 3BHK Villa", category: "Full Home", details: "Elegant villa interiors with a modern luxury theme." },
  { id: 2, img: demoImg, name: "Modern Kitchen Setup", category: "Kitchen", details: "Parallel kitchen with premium fittings and lights." },
  { id: 3, img: demoImg, name: "Space Saving Wardrobe", category: "Wardrobes", details: "Floor-to-ceiling wardrobe, walnut finish, soft close." },
  { id: 4, img: demoImg, name: "Contemporary Living Design", category: "Living Room", details: "Modern TV panel, ambient lights, textured wall." },
  { id: 5, img: demoImg, name: "Elegant Dining Space", category: "Full Home", details: "Custom 6-seater dining unit with backdrop panels." },
  { id: 6, img: demoImg, name: "Minimal Bedroom Makeover", category: "Bedroom", details: "Minimal theme bedroom with pastel palette and storage bed." },
  { id: 7, img: demoImg, name: "Designer TV Unit", category: "Living Room", details: "Wall mounted TV unit with LED strip lighting." },
  { id: 8, img: demoImg, name: "Premium Wardrobe", category: "Bedroom", details: "Premium sliding wardrobe with mirror finish." },
  { id: 9, img: demoImg, name: "L-Shaped Kitchen", category: "Kitchen", details: "Classic L-shaped kitchen with storage lofts." }
];

export default function ProjectGrid({ visibleCount }) {
  const navigate = useNavigate();
  const projects = allProjects.slice(0, visibleCount);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          whileHover={{y:-4}}
          viewport={{once:true}}
          transition={{duration:0.4, delay:i * 0.07}}
          className="bg-white rounded-2xl shadow-sm overflow-hidden group border border-gray-100 cursor-pointer"
          onClick={() => navigate(`/projects/${p.id}`)}
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <FaArrowRight className="text-white text-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="p-5 text-left">
            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 text-xs rounded-full font-medium">
              {p.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mt-3">{p.name}</h3>

            <motion.button
              whileHover={{scale:1.05}}
              className="flex items-center gap-2 text-gray-700 mt-4 text-sm font-medium group-hover:underline"
            >
              View Details <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
