import React from 'react'
import Certifications from './Certifications.jsx'
import Experience from './Experiance.jsx'
import { motion } from 'framer-motion'
import Footer from "./Footer.jsx";

function About() {
    return (
        <>
        <div className="px-6 py-12">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold mb-4  text-center ">About Me</h2>
                <p className="text-center max-w-2xl mx-auto text-lg">
                    👋 Hi, I’m Ajinkya Pathak, an IT engineer from PICT passionate about cybersecurity 🔐 and full stack development 💻.
                    I love building secure, scalable web apps using React & Node.js, while diving deep into Blue Team defense strategies.
                    I also run a tech blog 📝 called TechVerse, where I share insights on cybersecurity, blockchain, and more!
                    Let’s innovate & secure the digital world together! 🚀
                </p>
            </motion.div>

            <Certifications />
            <Experience />

        </div>

        </>
    )
}

export default About
