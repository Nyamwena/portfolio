import React from 'react';
import { blogData } from '../data/blogData';
import Section from './ui/Section';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Section
      id="blog"
      title="Blog & Insights"
      subtitle="Articles and thoughts on technology and development"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <article 
            key={index}
            className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <div className="mb-3">
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">
                  {post.title}
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">
                  {post.date}
                </span>
                
                <a 
                  href={post.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm group-hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View All Articles
        </a>
      </div>
    </Section>
  );
};

export default Blog;