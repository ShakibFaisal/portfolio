import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img from "../assets/img.jpeg";
import gsap from "gsap";
import { FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  const shapeRef1 = useRef(null);
  const shapeRef2 = useRef(null);

  useEffect(() => {
    gsap.to(shapeRef1.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(shapeRef2.current, {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 items-start"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded-full border border-green-200 dark:border-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-sm font-medium text-green-800 dark:text-green-300">
              Available for work
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white leading-tight">
            Junior Frontend
            <span className="text-primary"> Developer</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Skilled in React.js and modern JavaScript, passionate about building
            clean, responsive, and user-friendly web interfaces. Turning ideas
            into smooth, interactive experiences.
          </p>
          <div className="flex items-center gap-8 pt-4">
            {/* <div>
                            <p className="text-3xl font-bold text-primary">1</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Years Exp.
                            </p>
                        </div> */}
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              href="#projects"
            >
              View My Work
              <span className="material-icons text-xl">arrow_forward</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              href="/Faisal-frontend.pdf"
              download="Faisal_Resume.pdf" // Optional: customize file name
            >
              <span className="material-icons text-xl">download</span>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        <div className="relative flex justify-center items-center">
          <div
            ref={shapeRef1}
            className="absolute w-40 h-40 bg-primary/20 dark:bg-primary/10 blur-3xl rounded-full -top-10 -right-10"
          ></div>
          <div
            ref={shapeRef2}
            className="absolute w-56 h-56 bg-teal-500/20 dark:bg-teal-500/10 blur-3xl rounded-full bottom-0 -left-10"
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          >
            <div className="absolute inset-0 border-4 border-primary rounded-full -rotate-45"></div>
            <div className="absolute inset-2 md:inset-4 bg-gray-200 dark:bg-gray-800 rounded-full p-2">
              <img
                alt="Portrait of Faisal"
                className="w-full h-full object-cover rounded-full"
                src={img}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-0 md:top-12 md:-right-4 flex items-center gap-2 bg-gray-200/50 dark:bg-gray-900/70 backdrop-blur-sm p-2 px-4 rounded-full border border-gray-300 dark:border-gray-700 shadow-lg"
          >
            <FaReact className="h-6 w-6 text-cyan-500 " />

            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              React
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-16 -right-4 md:bottom-24 md:-right-8 
             flex items-center gap-2 bg-gray-200/50 dark:bg-gray-900/70 
             backdrop-blur-sm p-2 px-4 rounded-full border 
             border-gray-300 dark:border-gray-700 shadow-lg"
          >
            <FaJs className="h-6 w-6 text-yellow-400" />

            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              JavaScript
            </span>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 -left-4 md:bottom-12 md:-left-8 
             flex items-center gap-2 bg-gray-200/50 dark:bg-gray-900/70 
             backdrop-blur-sm p-2 px-4 rounded-full border 
             border-gray-300 dark:border-gray-700 shadow-lg"
          >
            <SiMongodb className="h-6 w-6 text-green-600" />

            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              MongoDB
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
