import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Phone, CheckCircle, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LocationPageProps {
  city: string;
  state: string;
  description: string;
  neighborhoods: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  zipCodes: string[];
}

const LocationPageTemplate: React.FC<LocationPageProps> = ({
  city,
  state,
  description,
  neighborhoods,
  testimonials,
  faqs,
  zipCodes
}) => {
  React.useEffect(() => {
    // Update page title and meta description
    document.title = `House Cleaning ${city}, ${state} | LumiMaid Cleaning Services`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Professional house cleaning services in ${city}, ${state}. Trusted residential and commercial cleaners. Book your cleaning service today!`);
    }

    // Add location-specific schema markup
    const locationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `LumiMaid Cleaning Services - ${city}`,
      "description": `Professional cleaning services in ${city}, ${state}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": zipCodes.join(", ")
      },
      "telephone": "(612) 555-0123",
      "email": "info@lumimaid.com",
      "url": `https://lumimaid.com/locations/${city.toLowerCase().replace(' ', '-')}`,
      "priceRange": "$120-$450",
      "serviceArea": neighborhoods.map(n => `${n}, ${city}, ${state}`),
      "services": [
        "House Cleaning",
        "Commercial Cleaning",
        "Deep Cleaning",
        "Move-in/Move-out Cleaning"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-16:00"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(locationSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [city, state, neighborhoods, zipCodes]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              House Cleaning Services in {city}, {state}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book"
                className="bg-teal-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Book a Cleaning in {city}
              </Link>
              <a 
                href="tel:(612)513-7035"
                className="border-2 border-teal-primary text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Trusted Cleaning Services in {city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Residential Cleaning</h3>
                <p className="text-slate-600 mb-4">
                  Professional house cleaning for {city} homes. Weekly, bi-weekly, or monthly service.
                </p>
                <Link 
                  to="/services/residential"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Commercial Cleaning</h3>
                <p className="text-slate-600 mb-4">
                  Office and commercial cleaning services for {city} businesses.
                </p>
                <Link 
                  to="/services/commercial"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Deep Cleaning</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive deep cleaning services for {city} properties.
                </p>
                <Link 
                  to="/services/deep-cleaning"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Neighborhoods We Serve in {city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              What {city} Customers Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-teal-primary">{testimonial.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Cleaning Services FAQ - {city}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for a Cleaner Home in {city}?
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Join your neighbors in {city} who trust LumiMaid for their cleaning needs. 
              Professional, reliable, and satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book"
                className="bg-white text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/10 transition-colors"
              >
                Book Cleaning in {city}
              </Link>
              <a 
                href="tel:(612)513-7035"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-primary transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (612) 513-7035</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPageTemplate;