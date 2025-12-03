import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menuName) => {
    setDropdownOpen(dropdownOpen === menuName ? null : menuName);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm backdrop-blur-md bg-white/80">
        <nav className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Devi Varahi Global Exims"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-lg">
            {navLinks.map((item) => (
              <li key={item.name} className="relative">

                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center gap-1 hover:text-orange-600 transition"
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>

                    {/* DROPDOWN (ON CLICK) */}
                    <AnimatePresence>
                      {dropdownOpen === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-8 w-52 bg-white shadow-lg rounded-lg py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(null)}
                              >
                                {subItem.name}
                                <FaChevronRight className="text-xs text-gray-500" />
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.href} className="hover:text-orange-600 transition">
                    {item.name}
                  </Link>
                )}

              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <motion.button
            onClick={() => setDropdownOpen(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex px-5 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
          >
            Get Free Estimate
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden block">
            <Bars3Icon className="w-7 h-7 text-gray-900" />
          </button>
        </nav>
      </header>

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
                alt="Devi Varahi Global Exims"
                className="h-8 w-auto object-contain"
              />
              <button onClick={() => setMobileOpen(false)}>
                <XMarkIcon className="w-7 h-7 text-gray-800" />
              </button>
            </div>

            {/* Drawer Links */}
            <ul className="flex flex-col gap-6 text-lg font-medium p-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex justify-between items-center text-gray-900"
                      >
                        {item.name}
                        <ChevronDownIcon className="w-5 h-5" />
                      </button>

                      {dropdownOpen === item.name && (
                        <ul className="ml-4 mt-2 flex flex-col gap-2">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className="text-gray-600 text-base"
                                onClick={() => setMobileOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-900 block"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              onClick={() => {
                setMobileOpen(false);
                setModalOpen(true);
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="block mx-6 mt-2 mb-6 px-5 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition w-full"
            >
              Get Free Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ESTIMATE FORM MODAL (Web3Forms) */}
      <EstimateFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
