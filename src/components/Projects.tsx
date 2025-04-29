import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import Section from './ui/Section';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <Section
      id="projects"
      title="Selected Projects"
      subtitle="Showcasing my best work and technical capabilities"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
              selectedProject === index ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Project Header */}
            <div
              className="cursor-pointer"
              onClick={() => toggleProject(index)}
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="opacity-80 text-sm">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details (Expanded) */}
            {selectedProject === index && (
              <div className="p-6 animate-fadeIn">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Overview</h4>
                <p className="text-slate-700 mb-6">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;