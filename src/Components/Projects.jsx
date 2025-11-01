import Footer from "./Footer.jsx";
import React from "react";
import ExpenseTracker from "../assets/expense-tracker.png";
import Blog from "../assets/blog.png";
import MediConnect from "../assets/MediConnect.png"
const projects = [

    {
        title: 'Expense Tracker',
        description:
            'Online code & markdown editor with live preview. Built with React.js, supports GFM, toolbar, autosave.',
        image: ExpenseTracker, // Add repo name if using GitHub Pages
        github: 'https://github.com/ajinkya22-dev/ExpenseManager',
        demo: 'https://expensemanager22.vercel.app/dashboard',

    },
    {
        title: 'HealthCare Management',
        description:
            'Secure healthcare management system ensuring encrypted records, private interactions, and seamless patient care.',
        image: MediConnect, // Add repo name if using GitHub Pages
        github: 'https://github.com/ajinkya22-dev/HealthCare',
        demo: 'https://mediconnect22.vercel.app/',
    },
    {
        title: 'Network Data Monitoring System',
        description:
            'Real-time network monitoring and anomaly-detection system using Wireshark CLI, ML-based traffic analysis with MongoDB persistence, and a live React + Socket.IO dashboard for KPIs and packet logs.',
        image: MediConnect,
        github: 'https://github.com/ajinkya22-dev/Network-Monitoring-System'
    },
    {
        title: 'HealthCare Management',
        description:
            'Secure healthcare management system ensuring encrypted records, private interactions, and seamless patient care.',
        image: MediConnect,
        github: 'https://github.com/ajinkya22-dev/HealthCare',
        demo: 'https://mediconnect22.vercel.app/',
    },
    {
        title: 'My Blog',
        description: 'TechVerse is my personal blog where I share practical insights on cybersecurity, blockchain, and emerging technologies',
        image: Blog,
        github: 'https://github.com/ajinkya22-dev/Blog',
        demo:  'https://techverse224.wordpress.com/',
    }
];


const Projects = ({ isDarkMode }) => {
    return (
        <section className={`min-h-screen w-full px-8 py-20 flex flex-col items-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Here are a few projects I’ve worked on recently:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`rounded-lg shadow-lg p-6 text-center transition-all border ${isDarkMode ? 'bg-gray-800 border-purple-500' : 'bg-white border-gray-300'}`}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-contain mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className="flex justify-center gap-4">
                            <a href={project.github} target="_blank" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm">GitHub</a>
                            <a href={project.demo} target="_blank" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm">Demo</a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
