import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Azzamahdy.
            </span>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/azzamahdyr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/azzamahdyr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Azzamahdy Ahmad Rafikri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;