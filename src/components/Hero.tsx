import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profilePic from "../images/nyamwena.png";


const Hero: React.FC = () => {
  const scrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                Elistair Nyamwena
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-700 font-medium mb-6">
                Software Engineer
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-2xl text-justify">
                I’m a proactive and results-driven Software Engineer with a BSc (Hons) in Computer Science and 5+ years of experience delivering high-quality web and enterprise solutions. In my current role as Systems Manager at Reformed Church University,
                I lead software development, architecture planning, technology evaluations and performance optimizations for systems supporting over 1000+ users.
                I thrive on collaborating with cross-functional teams to turn complex requirements into elegant, maintainable code.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </a>
              </div>
              
              <div className="flex gap-6">
                <a href="https://github.com/Nyamwena/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/elistair-nyamwena-b73187a7/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:enyamwena@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">

              <img 
                src={profilePic}
                alt="Elistair Nyamwena" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button onClick={scrollToNext} className="text-blue-600 hover:text-blue-700">
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;