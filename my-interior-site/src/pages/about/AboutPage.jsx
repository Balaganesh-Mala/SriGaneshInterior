import { motion } from "framer-motion";
import {
  FaUsers,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaPalette,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaAward />, label: "Projects Delivered", value: "600+" },
    { icon: <FaUsers />, label: "Happy Clients", value: "55,000+" },
    { icon: <FaPalette />, label: "Design Studios", value: "75+" },
    { icon: <FaHandshake />, label: "Professional Experts", value: "400+" },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Vision",
      text: "To become the most trusted interior design brand delivering lifestyle-based home transformations.",
    },
    {
      icon: <FaChartLine />,
      title: "Mission",
      text: "We provide premium, personalized, affordable, and space-optimized designs with durable execution.",
    },
    {
      icon: <FaHandshake />,
      title: "Core Values",
      text: "Innovation, transparency, quality delivery, customer happiness, and long-term service support.",
    },
  ];

  return (
    <div className="bg-white">
      

      {/* HEADER / HERO */}
      <section className="pt-0 pb-16 bg-gray-50 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold text-gray-900">About InteriorsPro</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting lifestyle-based premium interiors for modern Indian homes.
          </p>
        </motion.div>
      </section>

      {/* COMPANY INTRO */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Founded in 2014, InteriorsPro has redefined how India experiences home
          interiors by combining personalization, modular innovation, and reliable
          execution.
        </motion.p>
      </section>

      {/* VISION / MISSION / VALUES CARDS */}
      <section className="bg-white py-10">
        <div className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center space-y-4"
            >
              <div className="text-4xl text-red-600 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-3xl text-red-600 flex justify-center">
                {item.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {item.label}
              </h2>
              <p className="text-2xl font-semibold text-gray-800">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert designers, skilled execution teams, and professional
            architects working to transform homes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-5xl mx-auto">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow border border-gray-100 p-5"
            >
              <div className="text-5xl text-gray-400 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Designer {i + 1}
              </h3>
              <p className="text-sm text-gray-600">Interior Specialist</p>
              <motion.button
                onClick={() => navigate("/projects")}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-4 text-red-600 font-medium text-sm hover:underline"
              >
                View Portfolio <FaChartLine />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
