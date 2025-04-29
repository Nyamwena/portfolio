import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;