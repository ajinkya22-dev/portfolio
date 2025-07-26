import React from 'react'
import Certifications from './Certifications.jsx'
import { motion } from 'framer-motion'


function About() {
    return (
        <>
            <div className="px-6 py-12">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
                    <div className="max-w-2xl mx-auto text-lg text-justify leading-relaxed">
                        <p>
                            I'm <strong>Ajinkya Pathak</strong>, an Information Technology student at PICT with a solid foundation in cybersecurity and full-stack development. I specialize in building secure, scalable products using technologies like React and Node.js, while also exploring Blue Team defense strategies and real-world threat analysis to strengthen digital infrastructures.
                        </p>
                        <p className="mt-6">As the creator of <strong>TechVerse</strong>, I regularly publish insights on cybersecurity, blockchain, and emerging technologies. I’m passionate about open-source contribution and actively explore opportunities as a <strong>Full Stack Developer</strong> or <strong>Cybersecurity Analyst</strong>, bringing a unique blend of development expertise and a security-first mindset.</p>

                    </div>
                </motion.div>

                <Certifications />
                {/* <Experience /> */}
            </div>
        </>
    )
}

export default About
