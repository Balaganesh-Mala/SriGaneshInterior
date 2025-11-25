import { motion } from "framer-motion";

const ServiceIconCard = ({ Icon, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <Icon className="w-10 h-10 text-red-600 mb-3" />
      <h4 className="text-gray-700 font-medium text-sm">{title}</h4>
    </motion.div>
  );
};

export default ServiceIconCard;
