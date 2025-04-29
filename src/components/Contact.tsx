import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send, Github } from 'lucide-react';
import Section from './ui/Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's connect and discuss how we can work together"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-6">Get In Touch</h3>
          <p className="text-slate-600 mb-8">
            I'm always open to discussing new projects, opportunities or partnerships. Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm text-slate-500 mb-1">Email</h4>
                <a href="mailto:enyamwena@gmail.com" className="text-blue-600 hover:underline">
                  enyamwena@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm text-slate-500 mb-1">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/elistair-nyamwena-b73187a7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/elistair-nyamwena
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Github className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm text-slate-500 mb-1">GitHub</h4>
                <a 
                  href="https://github.com/Nyamwena"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/elistair
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm text-slate-500 mb-1">Phone</h4>
                <p className="text-slate-800">+263778357253</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            
            <div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
            </div>
            
            {submitMessage && (
              <div 
                className={`mt-4 p-3 rounded-lg ${
                  submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;