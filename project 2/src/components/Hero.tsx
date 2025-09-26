import React from 'react';
import { CheckCircle, Shield, Award, Clock, Users } from 'lucide-react';

const Hero = () => {
  const locationBadges = [
    'Minneapolis', 'St. Paul', 'Edina', 'Bloomington', 'Maple Grove', 'Minnetonka'
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-8 pt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-navy leading-tight tracking-wide">
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-slate-800 leading-tight tracking-wide">
                Trusted House Cleaning in Minneapolis–St. Paul
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-inter">
                Bonded, insured, and guaranteed premium residential and commercial cleaning services.
              </p>
              <p className="text-lg text-teal-primary font-inter font-semibold tracking-wide">
                Trusted by 200+ Minneapolis families
              </p>
              
              {/* Location Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {locationBadges.map((location, index) => (
                  <span key={index} className="bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-inter font-medium border border-teal-primary/20">
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button 
                onClick={() => window.location.href = '/book'}
                className="bg-teal-primary text-white px-10 py-5 rounded-xl text-lg font-inter font-semibold hover:bg-teal-primary/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Book a Cleaning
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-teal-primary text-teal-primary px-10 py-5 rounded-xl text-lg font-inter font-semibold hover:bg-teal-primary hover:text-white transition-all"
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/20150226_DSC4916.jpg" 
                alt="Beautiful modern kitchen showcasing LumiMaid's premium cleaning results in Minneapolis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Row */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-fresh-green/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-fresh-green" />
              </div>
              <span className="text-sm font-inter font-semibold text-slate-navy">Bonded & Insured</span>
              <span className="text-sm font-inter font-semibold text-slate-800">Bonded & Insured</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-teal-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-primary" />
              </div>
              <span className="text-sm font-inter font-semibold text-slate-800">Background-Checked Pros</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-warm-gold" />
              </div>
              <span className="text-sm font-inter font-semibold text-slate-800">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-teal-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-teal-primary" />
              </div>
              <span className="text-sm font-inter font-semibold text-slate-800">Trusted by 200+ Local Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;