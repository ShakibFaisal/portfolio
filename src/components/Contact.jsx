import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const shapeRef1 = useRef(null);
    const shapeRef2 = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(shapeRef1.current, {
                y: -30,
                x: 20,
                rotation: 180,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(shapeRef2.current, {
                y: 30,
                x: -20,
                rotation: -180,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., EmailJS)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: "email", text: "faisalshakib015@gmail.com", label: "Email" },
        { icon: "phone", text: "+880 1830790231", label: "Phone" },
        { icon: "location_on", text: "Dhaka, Bangladesh", label: "Location" }
    ];

    const socialLinks = [
        { icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn11ss_dQ6bbABmHIvwvPBbSoym12tUl0qY6l0Vvwmq2ZNtcLdBsozcSG9ttkp81BUHkVtKcFEQINX3jH36MaNve6Z4i5tOe7bSEssGSi087V9Wfx4Nlgtp1J-zTgCn03xixhXJAHsuoMEopyWgzWQMTgF4eb6K5scg9u8JfZDfbcCp4JttZ7GbEHfl_p85XXfDLClVSqG6hXpBDlFaXrSyZkJnewZ6sotjKrN1Y0EpFG75TKa1EPIn0wABPgJWxIJepMX1GUP2Vkg", label: "LinkedIn", url: "https://www.linkedin.com/in/faisal-mollah/" },
        { icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn11ss_dQ6bbABmHIvwvPBbSoym12tUl0qY6l0Vvwmq2ZNtcLdBsozcSG9ttkp81BUHkVtKcFEQINX3jH36MaNve6Z4i5tOe7bSEssGSi087V9Wfx4Nlgtp1J-zTgCn03xixhXJAHsuoMEopyWgzWQMTgF4eb6K5scg9u8JfZDfbcCp4JttZ7GbEHfl_p85XXfDLClVSqG6hXpBDlFaXrSyZkJnewZ6sotjKrN1Y0EpFG75TKa1EPIn0wABPgJWxIJepMX1GUP2Vkg", label: "GitHub", url: "https://github.com/ShakibFaisal" },
        { icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn11ss_dQ6bbABmHIvwvPBbSoym12tUl0qY6l0Vvwmq2ZNtcLdBsozcSG9ttkp81BUHkVtKcFEQINX3jH36MaNve6Z4i5tOe7bSEssGSi087V9Wfx4Nlgtp1J-zTgCn03xixhXJAHsuoMEopyWgzWQMTgF4eb6K5scg9u8JfZDfbcCp4JttZ7GbEHfl_p85XXfDLClVSqG6hXpBDlFaXrSyZkJnewZ6sotjKrN1Y0EpFG75TKa1EPIn0wABPgJWxIJepMX1GUP2Vkg", label: "Facebook", url: "https://www.facebook.com/faisal.islam.540665" }
    ];

    return (
        <section ref={containerRef} id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
            <div ref={shapeRef1} className="absolute top-10 right-10 w-20 h-20 bg-blue-200/40 dark:bg-blue-900/40 rounded-full blur-xl pointer-events-none"></div>
            <div ref={shapeRef2} className="absolute bottom-10 left-10 w-24 h-24 bg-teal-200/40 dark:bg-teal-900/40 rounded-full blur-xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Let's Talk About Your Project
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary">
                                        <span className="material-icons">{info.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{info.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Find me on social media</p>
                            <div className="flex gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={link.url}
                                        className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                                    >
                                        <span className="material-icons text-sm">{link.label[0]}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-gray-900 dark:text-white resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, x: [0, -5, 5, -5, 5, 0] }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message
                                <span className="material-icons">send</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
