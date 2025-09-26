import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import ServiceAreaMap from './ServiceAreaMap';
import { cities } from '../data/cities';

const ServiceAreas = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              House Cleaning Service Areas
            </h2>
            <p className="text-xl text-slate-600">
              Professional cleaning services throughout the Minneapolis-St. Paul metro area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div key={city.slug} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-teal-primary" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    {city.name} House Cleaning
                  </h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {city.description.substring(0, 120)}...
                </p>
                <div className="flex flex-col space-y-2">
                  <Link
                    to={`/house-cleaning-${city.slug}`}
                    className="text-teal-primary hover:text-teal-primary/80 font-medium flex items-center space-x-1"
                  >
                    <span>House Cleaning in {city.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/locations/${city.slug}`}
                    className="text-slate-500 hover:text-slate-700 text-sm flex items-center space-x-1"
                  >
                    <span>View {city.name} Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="mb-12">
              <ServiceAreaMap />
            </div>
            <p className="text-slate-600 mb-6">
              Don't see your city? We serve many additional communities throughout the Twin Cities metro area.
            </p>
            <Link
              to="/contact"
              className="bg-teal-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors"
            >
              Contact Us About Your Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;