import React from 'react';
import { skillsData } from '../data/skillsData';
import Section from './ui/Section';
import { Code, Server, Database, Monitor, Cpu, Globe } from 'lucide-react';

type SkillCategoryIconProps = {
  category: string;
};

const SkillCategoryIcon: React.FC<SkillCategoryIconProps> = ({ category }) => {
  switch (category) {
    case 'Frameworks & Languages':
      return <Code className="h-6 w-6 text-blue-600" />;
    case 'Databases':
      return <Database className="h-6 w-6 text-blue-600" />;
    case 'DevOps & Cloud':
      return <Server className="h-6 w-6 text-blue-600" />;
    case 'Front-end':
      return <Monitor className="h-6 w-6 text-blue-600" />;
    case 'IoT & Hardware':
      return <Cpu className="h-6 w-6 text-blue-600" />;
    case 'Best Practices':
      return <Globe className="h-6 w-6 text-blue-600" />;
    default:
      return <Code className="h-6 w-6 text-blue-600" />;
  }
};

const SkillLevel: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className={`h-2 w-5 rounded-sm ${
            value <= level ? 'bg-blue-600' : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Skills Snapshot"
      subtitle="Technical expertise and proficiencies"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-5">
              <SkillCategoryIcon category={category.category} />
              <h3 className="text-lg font-bold text-slate-800 ml-3">{category.category}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">{skill.name}</span>
                    {skill.level && <SkillLevel level={skill.level} />}
                  </div>
                  {!skill.level && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.items?.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;