import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import Section from './ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    // Reset animation state
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What colleagues and clients say about my work"
      className="bg-slate-50"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg relative">
          <div className="absolute top-6 left-6 text-blue-200 z-0 opacity-30">
            <Quote className="h-24 w-24" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div
              className="min-h-[220px] flex items-center transition-opacity duration-500"
              style={{ opacity: isAnimating ? 0.5 : 1 }}
            >
              <div>
                <p className="text-slate-700 text-lg mb-8 italic relative">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonialsData[currentIndex].avatar}
                      alt={testimonialsData[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-800">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {testimonialsData[currentIndex].title}, {testimonialsData[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white shadow hover:bg-blue-50 text-blue-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex space-x-2 items-center">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600 w-5' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white shadow hover:bg-blue-50 text-blue-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;