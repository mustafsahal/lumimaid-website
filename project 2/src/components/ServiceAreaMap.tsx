import React from 'react';
import { MapPin, Home, Building, Navigation } from 'lucide-react';

const ServiceAreaMap = () => {
  const neighborhoods = [
    'Uptown', 'Linden Hills', 'St. Louis Park', 'Edina', 'Bloomington', 
    'Maple Grove', 'Minnetonka', 'Hopkins', 'Plymouth', 'Burnsville',
    'Eagan', 'Woodbury', 'Roseville', 'Coon Rapids', 'Brooklyn Park'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-navy mb-8 tracking-wide">
              Proudly Serving Minneapolis–St. Paul
            </h2>
            <p className="text-xl text-slate-600 font-inter leading-relaxed">
              Professional cleaning services throughout the Twin Cities metro area
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-primary/5 to-slate-navy/5 rounded-3xl p-12 shadow-lg">
            {/* Map Legend */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
              <h3 className="text-2xl font-poppins font-bold text-slate-navy mb-6 flex items-center space-x-3">
                <Navigation className="w-6 h-6 text-teal-primary" />
                <span>Service Coverage</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-teal-primary rounded-full"></div>
                  <span className="text-sm font-inter text-slate-600">Primary Service Areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-fresh-green rounded-full"></div>
                  <span className="text-sm font-inter text-slate-600">Extended Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="w-4 h-4 text-warm-gold" />
                  <span className="text-sm font-inter text-slate-600">200+ Homes Cleaned</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-slate-navy" />
                  <span className="text-sm font-inter text-slate-600">50+ Businesses</span>
                </div>
              </div>
            </div>
            
            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3 group">
                  <MapPin className="w-5 h-5 text-teal-primary group-hover:text-warm-gold transition-colors" />
                  <span className="font-inter font-medium text-slate-navy">{neighborhood}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-slate-600 font-inter mb-6">
                  <strong className="text-slate-navy">Don't see your neighborhood?</strong> We're always expanding our service area. 
                  Contact us to check if we can serve your location!
                </p>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-teal-primary text-white px-8 py-4 rounded-xl font-inter font-semibold hover:bg-teal-primary/90 transition-all"
                >
                  Check Your Area
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;