import Footer from "./Footer.jsx";
import React from "react";

const projects = [
    {
        title: 'Chat Application',
        description:
            'Personal Chat Room or Workspace to share resources and hangout with friends. Built with React.js, Material-UI, and Firebase.',
        image: '/portfolio/Chat-application.png', // Add repo name if using GitHub Pages
        github: '#',
        demo: '#',
    },
    {
        title: 'Expense Tracker',
        description:
            'Online code & markdown editor with live preview. Built with React.js, supports GFM, toolbar, autosave.',
        image: '/portfolio/expense-tracker.png', // Add repo name if using GitHub Pages
        github: '#',
        demo: '#',
    },
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
