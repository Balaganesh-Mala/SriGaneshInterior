import FAQItem from "./FAQItem";
import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to complete home interiors?",
      answer:
        "Most home interior projects take 30–45 days depending on size, complexity, and materials chosen.",
    },
    {
      question: "Do you offer modular kitchen designs?",
      answer:
        "Yes, we offer a complete range of modular kitchen layouts including L-shape, U-shape, straight, parallel, and island kitchens.",
    },
    {
      question: "Can I customize my furniture?",
      answer:
        "Absolutely! All our designs are fully customizable. You can choose materials, finishes, colors, and layout as per your need.",
    },
    {
      question: "What is the cost of interior design?",
      answer:
        "The cost depends on your requirements. We offer free estimates to help you plan your budget.",
    },
    {
      question: "Do you provide warranty?",
      answer:
        "Yes, we provide up to 10 years warranty depending on the materials and services opted.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
