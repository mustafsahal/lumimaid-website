import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-primary to-slate-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 tracking-wide">
            100% Satisfaction Guaranteed
          </h2>
          
          <p className="text-2xl text-teal-100 mb-10 font-inter">
            — or we'll return free
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-teal-100 mb-10">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-fresh-green" />
              <span className="font-inter font-medium">Fully Insured & Bonded</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-fresh-green" />
              <span className="font-inter font-medium">Background-Checked Team</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-fresh-green" />
              <span className="font-inter font-medium">Eco-Friendly Products</span>
            </div>
          </div>
          
          <div className="mt-10">
            <button 
              onClick={() => window.location.href = '/book'}
              className="bg-white text-teal-primary px-12 py-5 rounded-xl text-lg font-inter font-bold hover:bg-gray-50 transition-all shadow-xl transform hover:scale-105"
            >
              Book Your Guaranteed Clean
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;