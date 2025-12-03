import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Heading */}
      <section className="pt-4 pb-16 bg-gray-50 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let’s design your dream interior today. Reach out and our team will assist you.
          </p>
        </motion.div>
      </section>

      {/* Contact Layout */}
      <section className="max-w-screen-md mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6 text-left"
          >
            <ContactInfoCard icon={<FaPhoneAlt />} text="+91 98765 43210" />
            <ContactInfoCard icon={<FaEnvelope />} text="contact@interiors.com" />
            <ContactInfoCard icon={<FaMapMarkerAlt />} text="Hyderabad, Telangana, India" />
          </motion.div>

          {/* Right Form */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      
    </div>
  );
}

function ContactInfoCard({ icon, text }) {
  return (
    <div className="flex items-start gap-4 bg-white shadow-sm border border-gray-100 p-5 rounded-2xl text-gray-800">
      <div className="text-red-600 text-2xl shrink-0 mt-1">{icon}</div>
      <p className="font-medium">{text}</p>
    </div>
  );
}
