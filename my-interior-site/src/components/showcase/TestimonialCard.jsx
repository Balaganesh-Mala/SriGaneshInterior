import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, message, image, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
    >
      {/* User Image */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border"
        />
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

          <div className="flex text-yellow-400 mt-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4" />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Message */}
      <p className="text-gray-600 leading-relaxed">{message}</p>
    </motion.div>
  );
};

export default TestimonialCard;
