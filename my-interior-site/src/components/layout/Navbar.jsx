import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { FaChevronRight } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";
import EstimateFormModal from "../contact/EstimateFormModal";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Modular Kitchen", href: "/modular-kitchen" },
      { name: "Wardrobes", href: "/wardrobes" },
      { name: "Full Interior", href: "/full-home" },
      { name: "TV Units", href: "/tv-units" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm md:bg-white/80 md:backdrop-blur-lg">

        <nav className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Sri Ganesh"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {!item.dropdown ? (
                  <a
                    href={item.href}
                    className="hover:text-red-600 transition"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button className="flex items-center gap-1 hover:text-red-600 transition">
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                )}

                {/* HOVER DROPDOWN */}
                {item.dropdown && hoveredMenu === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute left-0 top-7 w-52 bg-white shadow-lg rounded-lg py-3 z-40"
                  >
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={subItem.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                          <FaChevronRight className="text-xs text-gray-500" />
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA BUTTON */}
          <motion.button
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Get Free Estimate
          </motion.button>

          {/* MOBILE ICONS (HAMBURGER) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden block"
          >
            <Bars3Icon className="w-7 h-7 text-gray-900" />
          </button>
        </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-xl z-[999] md:hidden"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b">
              <img
                src={Logo}
                alt="Sri Ganesh"
                className="h-8 w-auto object-contain"
              />
              <button onClick={() => setMobileOpen(false)}>
                <XMarkIcon className="w-7 h-7 text-gray-800" />
              </button>
            </div>

            {/* Drawer Links */}
            <ul className="flex flex-col gap-6 text-lg font-medium p-6">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {!item.dropdown ? (
                    <a
                      href={item.href}
                      className="block"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <details className="group">
                      <summary className="cursor-pointer flex justify-between items-center">
                        {item.name}
                        <ChevronDownIcon className="w-5 h-5 inline-block" />
                      </summary>
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a
                              href={subItem.href}
                              className="text-gray-600 text-base"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ul>

            {/* Drawer CTA */}
            <motion.button
              onClick={() => {
                setMobileOpen(false);
                setModalOpen(true);
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="block mx-6 mt-2 mb-6 px-5 py-2 bg-red-600 text-white rounded-lg shadow"
            >
              Get Free Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* ESTIMATE FORM MODAL */}
      <EstimateFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
