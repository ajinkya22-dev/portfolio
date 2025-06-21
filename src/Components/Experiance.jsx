import React from 'react'
import { motion } from 'framer-motion'

function Experience() {
    return (
        <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-2xl font-semibold text-center mb-4">Experience</h3>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
                <p>
                    <strong>Internship at XYZ Security Labs</strong> – Worked on SOC analysis and log monitoring.
                    Built automation scripts using Python to streamline threat analysis pipelines.
                </p>
            </div>
        </motion.div>
    )
}

export default Experience
