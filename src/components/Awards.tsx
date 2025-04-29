import React from 'react';
import { awardsData } from '../data/awardsData';
import Section from './ui/Section';
import { Award } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <Section
      id="awards"
      title="Awards & Recognition"
      subtitle="Honors received for technical excellence and innovation"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-600 flex items-start"
          >
            <div className="mr-4 mt-1">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{award.title}</h3>
              <p className="text-slate-600 mb-3">{award.organization}</p>
              <p className="text-slate-700">{award.description}</p>
              
              <div className="mt-4 flex items-center">
                <span className="text-sm text-slate-500">{award.year}</span>
                {award.link && (
                  <a 
                    href={award.link} 
                    className="ml-4 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Learn more
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Awards;