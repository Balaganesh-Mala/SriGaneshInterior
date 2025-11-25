import { motion } from "framer-motion";

const FeatureCard = ({ Icon, title, value }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Icon className="w-14 h-14 text-red-600 mb-3" />
      <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
      <p className="text-gray-600 mt-1">{title}</p>
    </motion.div>
  );
};

export default FeatureCard;
