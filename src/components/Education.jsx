import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Daffodil International University ",
      year: "2022 - 2025",
      description:
        "Currently pursuing an undergraduate degree in CSE with a strong focus on software development, problem-solving, and modern technologies.",
      icon: "university",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Engineering University School & College",
      year: "2018 - 2020",
      description:
        "Completed HSC in Science with GPA 5.00. Actively engaged in programming and tech-based skill development during this period.",
      icon: "college",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-[20px] top-0 w-[2px] bg-gray-200 dark:bg-gray-700 h-full origin-top z-0"
          ></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.2, type: "spring" }}
                className="absolute top-0 left-0 bg-primary rounded-full p-2 z-10 shadow-lg border-2 border-white dark:border-gray-800 w-10 h-10 flex items-center justify-center"
              >
                <span className="material-icons text-white text-sm">
                  {edu.icon}
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, translateX: 10 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 cursor-default"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full mb-3">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-3">
                  {edu.institution}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
