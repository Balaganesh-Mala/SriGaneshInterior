import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Interior<span className="text-red-500">Pro</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Transforming spaces with modern, functional and personalized interior
            designs crafted to perfection.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaLinkedinIn className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaYoutube className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li>Modular Kitchen</li>
            <li>Wardrobes</li>
            <li>Interior Design</li>
            <li>False Ceiling</li>
            <li>Painting</li>
            <li>Civil Work</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <div className="flex items-start gap-3 mb-4">
            <HiOutlinePhone className="w-6 h-6 text-red-500" />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <HiOutlineEnvelope className="w-6 h-6 text-red-500" />
            <p>contact@interiorpro.com</p>
          </div>

          <div className="flex items-start gap-3">
            <HiOutlineMapPin className="w-6 h-6 text-red-500" />
            <p>Hyderabad, Telangana, India</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} InteriorPro — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
