import React from 'react';
import { Home, Building, Package, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Cleaning",
      description: "Professional house cleaning for Minneapolis and St. Paul homes. Regular weekly, bi-weekly, or monthly service.",
      features: [
        "Kitchen and bathroom deep cleaning",
        "Dusting and vacuuming all areas",
        "Floor mopping and sanitizing",
        "Trash removal and bed making"
      ],
      pricing: "$120-200",
      frequency: "per visit"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Cleaning",
      description: "Reliable commercial cleaning Twin Cities businesses trust. Offices, retail spaces, and medical facilities.",
      features: [
        "Daily, weekly, or monthly schedules",
        "Restroom and break room cleaning",
        "Carpet and hard floor maintenance",
        "Trash and recycling services"
      ],
      pricing: "$150-400",
      frequency: "per visit"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Move-In/Move-Out",
      description: "Comprehensive deep cleaning for moving transitions. Perfect for new homeowners and renters in Minneapolis.",
      features: [
        "Complete deep cleaning service",
        "Inside appliance cleaning",
        "Cabinet and drawer cleaning",
        "Light fixture and window cleaning"
      ],
      pricing: "$250-450",
      frequency: "one-time service"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your needs in Minneapolis and St. Paul. 
            All services include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={index === 0 ? "/20150226_DSC4916.jpg" : 
                       index === 1 ? "/20150226_DSC4916.jpg" : 
                       "/pexels-liliana-drew-9462307.jpg"} 
                  alt={`${service.title} service in Minneapolis`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
              <div className="text-teal-primary mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full"></div>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => scrollToSection('booking')}
                className="w-full bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
              </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Need a custom cleaning plan? We create tailored solutions for unique requirements.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-teal-primary text-teal-primary px-8 py-3 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-all"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;