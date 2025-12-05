import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP animation for logo on mount
    gsap.fromTo(logoRef.current,
      { rotation: -180, scale: 0 },
      { rotation: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="py-8 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <div ref={logoRef} className="bg-primary p-2 rounded-lg cursor-pointer" onMouseEnter={() => gsap.to(logoRef.current, { rotation: 360, duration: 0.5 })}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white"
          >Faisal Mollah</span>
        </motion.div>
        <nav
          className="hidden md:flex items-center bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm p-2 rounded-full border border-gray-300 dark:border-gray-700"
        >
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#3B82F6" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            variants={itemVariants}
            whileHover={{ rotate: 180 }}
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <span
              className="material-icons text-xl text-gray-700 dark:text-gray-200"
            >{isDarkMode ? 'dark_mode' : 'wb_sunny'}</span>
          </motion.button>
        </nav>
        <motion.button
          variants={itemVariants}
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <span className="material-icons text-2xl text-gray-900 dark:text-white"
          >menu</span>
        </motion.button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 flex flex-col"
        >
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="p-4 text-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
