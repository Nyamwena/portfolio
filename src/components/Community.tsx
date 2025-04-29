import React from 'react';
import { communityData } from '../data/communityData';
import Section from './ui/Section';
import { Users, BookOpen, MessageSquare } from 'lucide-react';

const iconMap = {
  contributor: <BookOpen className="h-10 w-10 text-blue-500" />,
  speaker: <MessageSquare className="h-10 w-10 text-blue-500" />,
  organizer: <Users className="h-10 w-10 text-blue-500" />
};

const Community: React.FC = () => {
  return (
    <Section
      id="community"
      title="Open Source & Community"
      subtitle="Contributions and involvement in the tech community"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communityData.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-50 rounded-xl p-6 shadow-md flex flex-col transition-transform hover:translate-y-[-5px]"
          >
            <div className="mb-4">
              {iconMap[item.type as keyof typeof iconMap]}
            </div>
            
            <div className="mb-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {item.type}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">{item.title}</h3>
            </div>
            
            <p className="text-slate-600 flex-grow">{item.description}</p>
            
            {item.date && (
              <div className="mt-4 text-sm text-slate-500">
                {item.date}
              </div>
            )}
            
            {item.link && (
              <div className="mt-4">
                <a 
                  href={item.link} 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Community;