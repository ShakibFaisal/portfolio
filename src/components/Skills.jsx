import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { PiSelectionForegroundFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = containerRef.current.querySelectorAll(".skill-section");
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".skill-card"), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  const SkillCard = ({ icon: Icon, name, level, color }) => (
    <motion.div
      whileHover={{ y: -5, borderColor: "#2dd4bf" }}
      className="skill-card bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center flex flex-col items-center justify-between aspect-square hover:border-teal-accent/50 transition-colors"
    >
      <Icon size={45} className="mb-2" color={color} />
      <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
        <motion.div
          custom={level}
          variants={progressVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-1.5 rounded-full"
          style={{ background: color }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
   <section id="skills" ref={containerRef} className="bg-gray-100 dark:bg-gray-900 antialiased py-16">

      <div className="min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">

            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Skills</h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">My technical expertise</p>
            </motion.div>

            <div className="space-y-16">

              {/* Frontend */}
              <section className="skill-section">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-teal-accent pl-4">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillCard icon={FaJs} name="JavaScript" level="80%" color="#f7df1e" />
                  <SkillCard icon={FaReact} name="React.js" level="90%" color="#61dafb" />
                  <SkillCard icon={SiNextdotjs} name="Next.js" level="75%" color="#67DBFB" />
                  <SkillCard icon={SiTailwindcss} name="Tailwind CSS" level="95%" color="#06b6d4" />
                  <SkillCard icon={FaHtml5} name="HTML5" level="95%" color="#e34c26" />
                  <SkillCard icon={FaCss3Alt} name="CSS3" level="90%" color="#264de4" />
                </div>
              </section>

              {/* Backend */}
              <section className="skill-section">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-teal-accent pl-4">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillCard icon={FaNodeJs} name="Node.js" level="70%" color="#3c873a" />
                  <SkillCard icon={SiExpress} name="Express.js" level="75%" color="#9ca3af" />
                </div>
              </section>

              {/* Database */}
              <section className="skill-section">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-teal-accent pl-4">Database</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillCard icon={SiMongodb} name="MongoDB" level="80%" color="#4db33d" />
                  <SkillCard icon={SiFirebase} name="Firebase" level="65%" color="#ffcb2b" />
                </div>
              </section>

              {/* Tools */}
              <section className="skill-section">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-teal-accent pl-4">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillCard icon={FaGitAlt} name="Git" level="85%" color="#f1502f" />
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
