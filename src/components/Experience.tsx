import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import Section from './ui/Section';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <Section 
      id="experience" 
      title="Professional Experience" 
      subtitle="My professional journey and roles"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Tabs for larger screens */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3">
          <div className="sticky top-24 space-y-2">
            {experienceData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'hover:bg-blue-50 text-slate-700'
                }`}
              >
                <p className="font-medium">{item.company}</p>
                <p className="text-sm opacity-80">{item.role}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile dropdown */}
        <div className="md:hidden w-full mb-6">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(parseInt(e.target.value))}
            className="w-full p-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {experienceData.map((item, index) => (
              <option key={index} value={index}>
                {item.role} at {item.company}
              </option>
            ))}
          </select>
        </div>
        
        {/* Content */}
        <div className="md:col-span-8 lg:col-span-9">
          <div className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-blue-800">{experienceData[activeTab].role}</h3>
              <div className="flex items-center text-blue-600 mt-2 sm:mt-0">
                <Briefcase className="w-5 h-5 mr-2" />
                <span>{experienceData[activeTab].company}</span>
              </div>
            </div>
            
            <div className="flex items-center text-slate-500 mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{experienceData[activeTab].period}</span>
            </div>
            
            <ul className="space-y-4">
              {experienceData[activeTab].achievements.map((achievement, index) => (
                <li key={index} className="flex">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-slate-700">{achievement}</span>
                </li>
              ))}
            </ul>
            
            {experienceData[activeTab].technologies && (
              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experienceData[activeTab].technologies?.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;