import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Contact() {
    return (
        <motion.div
            className="px-6 py-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-5xl">Contact Me</h2>
            <p className="text-center mb-6">
                Feel free to reach out to me via any of the platforms below.
            </p>
            <div className="flex justify-center gap-6 text-3xl">
                <a href="https://github.com/ajinkya22-dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ajinkya-pathak-820675326/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/ajinkya_pathak_07/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://wa.me/918208690147" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
        </motion.div>
    )
}

export default Contact
