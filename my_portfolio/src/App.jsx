
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">

      {/* Professional Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo / Name */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Harshitha R
            </h1>
            <p className="text-xs text-slate-500">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#about"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Resume Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition duration-300 shadow-sm"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h2 className="font-semibold text-slate-800">
              Harshitha R
            </h2>

            <p className="text-sm text-slate-500">
              Building modern web applications with React & Tailwind CSS.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Harshitha R. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
