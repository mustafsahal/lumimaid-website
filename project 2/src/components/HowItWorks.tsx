import React from 'react';
import { Calendar, Users, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-16 h-16" />,
      title: "Book Online",
      description: "Choose your service and schedule online or by phone. Quick and easy booking process."
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "We Clean",
      description: "Professional, insured cleaners arrive on time with all supplies and equipment."
    },
    {
      icon: <Home className="w-16 h-16" />,
      title: "Relax & Enjoy",
      description: "Come home to a spotless space and enjoy your free time with family."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-navy mb-8 tracking-wide">
            </h2>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-800 mb-8 tracking-wide">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 font-inter leading-relaxed">
              Getting your home professionally cleaned is simple with LumiMaid
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-teal-primary/10 rounded-2xl flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-warm-gold text-white rounded-full flex items-center justify-center font-poppins font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-slate-navy">{step.title}</h3>
                <h3 className="text-2xl font-poppins font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-inter">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;