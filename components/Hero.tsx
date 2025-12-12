import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-0 overflow-hidden">
      <div className="absolute inset-0 z-0 md:hidden opacity-10 pointer-events-none">
         {/* Background pattern for mobile purely decorative */}
         <img src="https://picsum.photos/1080/1920?random=1" alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-0 order-2 md:order-1 z-10 bg-gradient-to-b from-yellow-50/50 to-white md:bg-none">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent leading-tight tracking-tight">
              <span className="block">Azzamahdy</span>
              <span className="block">Ahmad</span>
              <span className="block">Rafikri</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-900 font-medium mb-4">
              Future Auditor & Lifetime Learner
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
              Selalu bersemangat dalam menciptakan nilai-nilai baik dalam hidupnya.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="group flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Kontak
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/azzamahdyr/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Image Content - Full Height */}
        <div className="relative h-[50vh] md:h-screen order-1 md:order-2 w-full overflow-hidden">
          <div className="absolute inset-0 bg-yellow-600/10 z-10 mix-blend-multiply md:hidden"></div>
          <img 
            // Using placeholder as requested for code generation, 
            // In a real scenario, this would be ./images/azzam.png
            src="https://picsum.photos/800/1200?random=10" 
            alt="Azzamahdy Portrait" 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          {/* Decorative Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-50/80 via-transparent to-transparent md:bg-gradient-to-r md:from-yellow-50 md:via-transparent md:to-transparent z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;