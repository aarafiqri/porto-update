import React, { useRef, useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Generate placeholders for gallery
  const images = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/400/600?random=${20 + i}`);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    sliderRef.current.classList.add('cursor-grabbing');
    sliderRef.current.classList.remove('cursor-grab');
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (!sliderRef.current) return;
    setIsDown(false);
    sliderRef.current.classList.remove('cursor-grabbing');
    sliderRef.current.classList.add('cursor-grab');
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    setIsDown(false);
    sliderRef.current.classList.remove('cursor-grabbing');
    sliderRef.current.classList.add('cursor-grab');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="galeri" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Memoar Kisah</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 text-sm">Geser untuk melihat lebih banyak</p>
        </div>

        <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-8 cursor-grab scrollbar-hide select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-none w-80 md:w-96 aspect-[3/4] relative group">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;