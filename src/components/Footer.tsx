import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Code className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">Elistair Nyamwena</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-slate-700 mb-8" />
        
        <div className="text-center text-slate-400 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <p>
            &copy; {currentYear} Elistair Nyamwena. All rights reserved.
          </p>
          <span className="hidden md:block mx-4">•</span>
          <p className="flex items-center">
            Built with <Heart className="h-4 w-4 text-red-400 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;