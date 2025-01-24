"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Header({ nav = true }: { nav?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Site Branding */}
          <div className="shrink-0 mr-4">
            <Link className="block" href="/" aria-label="Cruip">
              <div className="flex items-center gap-4 font-bold">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="108.567%"
                      gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                      id="logo1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="108.567%"
                      gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                      id="logo1-d">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%" />
                      <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <path
                      d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z"
                      id="logo1-a"
                    />
                    <path
                      d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z"
                      id="logo1-c"
                    />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlinkHref="#logo1-a" />
                    <use fill="url(#logo1-d)" opacity=".961" xlinkHref="#logo1-c" />
                  </g>
                </svg>
                Ivan Starčević
              </div>
            </Link>
          </div>

          {/* MOBILE MENU (md:hidden) */}
          {/* <div className="md:hidden block">
            {/* HAMBURGER BUTTON (fixed position, so it's always visible) */}
          {/* <div className="fixed top-2 right-4 z-[60]">
              <Hamburger toggled={isMenuOpen} toggle={toggleMenu} color="#fff" size={24} label="Toggle menu" />
            </div> */}

          {/* AnimatePresence for overlay & sidebar */}
          {/*  */}
          {/* <AnimatePresence> */}
          {/* {isMenuOpen && (
                <>
                  <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 bg-black z-40"
                    onClick={closeMenu}
                  />

                  <motion.nav
                    key="sidebar"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 right-0 bottom-0 w-2/5 max-w-sm bg-slate-800 shadow-xl p-8 z-50">
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="flex flex-col space-y-12 text-lg text-white mt-10">
                      <motion.li variants={itemVariants}>
                        <Link href="/about" onClick={closeMenu}>
                          About
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants}>
                        <Link href="/projects" onClick={closeMenu}>
                          Projects
                        </Link>
                      </motion.li>
                      <motion.li variants={itemVariants}>
                        <Link href="/contact" onClick={closeMenu}>
                          Contact
                        </Link>
                      </motion.li>
                    </motion.ul>
                  </motion.nav>
                </>
              )} */}
          {/* </AnimatePresence> */}
          {/* </div> */}

          {/* DESKTOP NAVIGATION */}
          {/* {nav && (
            <nav className="hidden md:flex grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    className="font-medium text-gray-200 hover:text-white px-3 lg:px-5 py-2 transition duration-150 ease-in-out"
                    href="/about">
                    About
                  </Link>
                </li>
                <li className="ml-3">
                  <Link
                    className="font-medium text-gray-200 hover:text-white px-3 lg:px-5 py-2 transition duration-150 ease-in-out"
                    href="/projects">
                    Projects
                  </Link>
                </li>
                <li className="ml-3">
                  <Link
                    className="font-medium text-gray-200 hover:text-white px-3 lg:px-5 py-2 transition duration-150 ease-in-out"
                    href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav> */}
          {/* )} */}
        </div>
      </div>
    </header>
  );
}
