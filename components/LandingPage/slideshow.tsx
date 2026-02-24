'use client';

import { useState, useEffect } from 'react';

export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    '/slides/1.jpg',
    '/slides/2.jpg',
    '/slides/3.jpg',
  ];

  const slideTitles: { [key: number]: string } = {
    0: 'الصف الاول الثانوي جميع المواد',
    1: 'الصف الثاني الثانوي جميع المواد',
    2: 'الصف الثالث الثانوي جميع المواد',
  };
  
  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-xl shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, idx) => (  // ✅ Renamed loop variable to 'idx'
          <div key={idx} className="min-w-full font-bold h-full relative">
            <img src={src} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
            
            {/* ✅ Caption: use 'idx' from map + 'slideTitles' object */}
            <p className="absolute bottom-10 left-1/2 text-[10px]  -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg">
              {slideTitles[idx]}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2  -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}