import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Modular Kitchen", href: "/modular-kitchen" },
      { name: "Wardrobes", href: "/wardrobes" },
      { name: "Full Home Interior", href: "/full-home" },
      { name: "TV Units", href: "/tv-units" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a className="text-2xl font-semibold text-gray-900" href="/">
          <img
            src={Logo}
            alt="Sri Ganesh"
            className="h-10 w-auto object-contain"
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
              {!item.dropdown ?
                <a className="hover:text-red-600 transition" href={item.href}>
                  {item.name}
                </a>
              : <button className="flex items-center gap-1 hover:text-red-600 transition">
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              }

              {/* Hover Dropdown */}
              {item.dropdown && hoveredMenu === index && (
                <motion.ul
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute left-0 top-6 w-48 bg-white shadow-lg rounded-md py-3 z-40"
                >
                  {item.dropdown.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Get Free Estimate
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden block"
        >
          {mobileOpen ?
            <XMarkIcon className="w-7 h-7" />
          : <Bars3Icon className="w-7 h-7" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {!item.dropdown ?
                    <a href={item.href} className="block">
                      {item.name}
                    </a>
                  : <details className="group">
                      <summary className="cursor-pointer flex justify-between">
                        {item.name}
                        <ChevronDownIcon className="w-5 h-5 inline-block" />
                      </summary>

                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a
                              href={subItem.href}
                              className="text-gray-600 text-base"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  }
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block mt-8 text-center px-5 py-2 bg-red-600 text-white rounded-lg shadow"
            >
              Get Free Estimate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
