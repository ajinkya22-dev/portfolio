import React from 'react'
import { motion } from 'framer-motion'
import Footer from "./Footer.jsx";

const cards = [
    { title: 'CyberSecurity Analyst', org: 'IBM', color: 'bg-green-600', logo: '/portfolio/ibm.png' },
    { title: 'Fullstack Developer', org: 'IBM', color: 'bg-rose-500', logo: '/portfolio/ibm.png' },
    { title: 'JAVA - DSA', org: 'GeeksForGeeks', color: 'bg-green-600', logo: '/portfolio/gfg.png' },
];


function Certifications() {
    return (
     <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-2xl font-semibold text-center mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((cert, i) => (
                    <div key={i} className={`rounded-xl p-4 ${cert.color} text-white shadow-md`}>
                        <img src={cert.logo} alt="" className="h-12 mx-auto mb-2" />
                        <h4 className="text-lg font-semibold text-center">{cert.title}</h4>
                        <p className="text-sm text-center">{cert.org}</p>
                    </div>
                ))}
            </div>
        </motion.div>

    )
}

export default Certifications
