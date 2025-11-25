import { motion } from "framer-motion";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaCalculator } from "react-icons/fa";

export default function EstimateCards() {
  const cards = [
    {
      Icon: HiOutlineHomeModern,
      title: "Get Free Home Interior Estimate",
      text: "Know the approximate budget for your dream home interiors in minutes.",
      btn: "Get Free Estimate",
      link: "#contact",
    },
    {
      Icon: FaCalculator,
      title: "Modular Kitchen Cost Calculator",
      text: "Calculate the estimated cost for your modular kitchen instantly.",
      btn: "Calculate Now",
      link: "#contact",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Get Instant Estimates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <item.Icon className="w-12 h-12 text-red-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">{item.text}</p>

              <a
                href={item.link}
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
              >
                {item.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
