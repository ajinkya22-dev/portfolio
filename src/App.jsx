import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypingText from './components/TypingText';
import profileImage from '/profile.png';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FiSun, FiMoon } from 'react-icons/fi';
import Footer from './components/Footer';

import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('Home');
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all duration-500`}>
            {/* Navbar */}
            <nav className="fixed w-full top-0 flex justify-center z-50 py-5 bg-opacity-60 backdrop-blur-lg">
                <div className="flex items-center gap-8 text-lg sm:text-xl font-medium">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveSection(item)}
                            className={`hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400 underline underline-offset-4' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="absolute right-8 text-2xl p-2 rounded-full hover:bg-gray-700 transition"
                >
                    {isDarkMode ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-gray-800" />}
                </button>
            </nav>

            {/* Section rendering */}
            <main className="pt-24">
                {activeSection === 'Home' && (
                    <section className="flex flex-col lg:flex-row items-center justify-between px-12 min-h-screen">
                        <motion.div
                            className="max-w-xl"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Hello, It's Me</h1>
                            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">Ajinkya Pathak</h2>
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">And I'm a <TypingText /></h3>
                            <p className="text-gray-400 mb-6 text-lg">
                                Cybersecurity enthusiast | Full-stack developer | Tech blogger
                            </p>

                            {/* Hire Me Button */}
                            <a
                                href="https://www.linkedin.com/in/ajinkya-pathak-820675326/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 mt-6 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
                            >
                                Hire Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ x: 150, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="rounded-full neon-circle overflow-hidden w-100 h-100 mt-10 lg:mt-0"
                        >
                            <img src={profileImage} alt="Ajinkya" className="w-full h-full object-cover rounded-full" />
                        </motion.div>
                    </section>
                )}
                {activeSection === 'About' && <About />}
                {activeSection === 'Projects' && <Projects isDarkMode={isDarkMode} />}
                {activeSection === 'Contact' && <Contact />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
