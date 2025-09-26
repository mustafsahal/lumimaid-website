import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "/20150226_DSC4916.jpg",
      title: "Kitchen Deep Clean",
      description: "From cluttered to pristine modern kitchen perfection"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "/20150226_DSC4916.jpg",
      title: "Modern Kitchen Restoration",
      description: "Professional cleaning for luxury Minneapolis kitchens"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "/20150226_DSC4916.jpg",
      title: "High-End Home Cleaning",
      description: "Maintaining the beauty of modern Minneapolis homes"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-800 mb-8 tracking-wide">
              See the LumiMaid Difference
            </h2>
            <p className="text-xl text-slate-600 font-inter leading-relaxed">
              Real transformations from our Minneapolis cleaning services
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-inter font-semibold">
                      Before
                    </span>
                  </div>
                  <img 
                    src={beforeAfterImages[currentSlide].before}
                    alt="Before cleaning transformation"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                
                {/* After */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-fresh-green text-white px-4 py-2 rounded-full text-sm font-inter font-semibold">
                      After
                    </span>
                  </div>
                  <img 
                    src={beforeAfterImages[currentSlide].after}
                    alt="After cleaning transformation"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-poppins font-bold text-slate-800 mb-3">
                  {beforeAfterImages[currentSlide].title}
                </h3>
                <p className="text-slate-600 font-inter">
                  {beforeAfterImages[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-teal-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;