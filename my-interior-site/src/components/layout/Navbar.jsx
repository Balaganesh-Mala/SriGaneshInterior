import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">
        <nav className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-9" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">
            {navLinks.map((item) => (
              <li key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setDesktopDropdown(
                          desktopDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center gap-1 hover:text-orange-600"
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {desktopDropdown === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="absolute top-8 left-0 w-52 bg-white rounded-lg shadow-lg py-2"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                to={sub.href}
                                onClick={() => setDesktopDropdown(null)}
                                className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100"
                              >
                                {sub.name}
                                <FaChevronRight className="text-xs" />
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.href} className="hover:text-orange-600">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block px-5 py-2 bg-orange-600 text-white rounded-lg"
          >
            Get Free Estimate
          </button>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Bars3Icon className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[998]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white z-[999]"
            >
              <div className="flex justify-between p-5 border-b">
                <img src={Logo} className="h-8" />
                <button onClick={() => setMobileOpen(false)}>
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>

              <ul className="p-6 space-y-5">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            )
                          }
                          className="w-full flex justify-between"
                        >
                          {item.name}
                          <ChevronDownIcon className="w-5 h-5" />
                        </button>

                        {mobileDropdown === item.name && (
                          <ul className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-gray-600"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="mx-6 mb-6 w-[calc(100%-3rem)] py-2 bg-orange-600 text-white rounded-lg"
              >
                Get Free Estimate
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <EstimateFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
