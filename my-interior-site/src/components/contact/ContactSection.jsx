import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            We're here to help you turn your home interior dreams into reality.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="w-6 h-6 text-red-600" />
              <p className="text-gray-800 font-medium">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineEnvelope className="w-6 h-6 text-red-600" />
              <p className="text-gray-800 font-medium">contact@interiors.com</p>
            </div>
          </div>

          <iframe
            className="w-full h-56 md:h-64 rounded-xl shadow"
            src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
          ></iframe>
        </motion.div>

        {/* CONTACT FORM */}
        <ContactForm />
      </div>
    </section>
  );
}
