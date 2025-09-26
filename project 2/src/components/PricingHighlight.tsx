import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingHighlight = () => {
  const services = [
    {
      name: "Residential Cleaning",
      price: "From $129",
      description: "Professional house cleaning",
      popular: false
    },
    {
      name: "Deep Cleaning",
      price: "From $199", 
      description: "Thorough deep cleaning",
      popular: true
    },
    {
      name: "Move-Out Cleaning",
      price: "From $249",
      description: "Moving cleaning service",
      popular: false
    },
    {
      name: "Airbnb / STR",
      price: "From $149",
      description: "Short-term rental turnover",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-navy mb-8 tracking-wide">
            </h2>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-800 mb-8 tracking-wide">
              Starting Prices
            </h2>
            <p className="text-xl text-slate-600 font-inter leading-relaxed">
              Transparent pricing with no hidden fees. Get your exact quote today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative ${
                service.popular ? 'border-2 border-teal-primary transform scale-105' : 'border border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warm-gold text-white px-4 py-2 rounded-full text-sm font-inter font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-poppins font-bold text-slate-navy mb-3">
                </h3>
                <h3 className="text-xl font-poppins font-bold text-slate-800 mb-3">
                  {service.name}
                </h3>
                <div className="text-3xl font-poppins font-bold text-teal-primary mb-3">
                  {service.price}
                </div>
                <p className="text-slate-600 mb-6 font-inter">{service.description}</p>
                <button 
                  onClick={() => window.location.href = '/book'}
                  className={`w-full px-6 py-4 rounded-xl font-inter font-semibold transition-all flex items-center justify-center space-x-2 ${
                    service.popular 
                      ? 'bg-teal-primary text-white hover:bg-teal-primary/90' 
                      : 'bg-teal-primary/10 text-teal-primary hover:bg-teal-primary hover:text-white'
                  }`}
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-teal-primary text-teal-primary px-8 py-4 rounded-xl font-inter font-semibold hover:bg-teal-primary hover:text-white transition-all"
            >
              Get Exact Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHighlight;