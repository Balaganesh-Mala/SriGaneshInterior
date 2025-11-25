import { motion } from "framer-motion";

const ServiceCard = ({ Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-10 h-10 text-red-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
