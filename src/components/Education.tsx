import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { educationData, certificationData } from '../data/educationData';
import Section from './ui/Section';

const Education: React.FC = () => {
  return (
    <Section 
      id="education" 
      title="Education & Certifications" 
      subtitle="Academic background and professional certifications"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
            <GraduationCap className="mr-2 h-6 w-6" />
            Education
          </h3>
          
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-slate-800">{item.degree}</h4>
                  <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-slate-600 mb-3">{item.institution}</p>
                {item.description && (
                  <p className="text-slate-500 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
            <Award className="mr-2 h-6 w-6" />
            Certifications
          </h3>
          
          <div className="space-y-5">
            {certificationData.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-600">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{cert.name}</h4>
                <p className="text-slate-600 mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">{cert.date}</span>
                  {cert.inProgress && (
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;