import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import img from  '../assets/img2.jpeg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const shapeRef1 = useRef(null);
    const shapeRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(shapeRef1.current, {
                y: 30,
                x: 10,
                rotation: 10,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(shapeRef2.current, {
                y: -40,
                x: -20,
                rotation: -15,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section  ref={sectionRef} id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative">
            <div ref={shapeRef1} className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div ref={shapeRef2} className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/20 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition-transform hover:rotate-6"></div>
                        <img
                        src={img}
                            alt="Faisal coding"
                            className="relative rounded-2xl shadow-xl w-full object-cover transform transition-transform hover:-translate-y-2"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, staggerChildren: 0.2 }}
                        className="space-y-6"
                    >
                        <motion.h3
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            A Passionate Junior Frontend Developer based in Bangladesh
                        </motion.h3>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            Start coding at 2024. As a Junior Frontend Developer, I specialize in building responsive, user-friendly web applications using React.js and modern CSS frameworks like Tailwind. I'm passionate about clean code and creating intuitive user experiences.
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            I am constantly learning new technologies and best practices to improve my skills. My goal is to contribute to impactful projects and grow as a developer in a collaborative environment.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                            >
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Problem Solver</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Analytical approach to challenges</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                            >
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Fast Learner</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Adapting to new tech quickly</p>
                            </motion.div>
                        </div>

                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            Read More
                        </motion.button> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
