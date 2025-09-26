import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Phone, ArrowRight, MapPin, Home, Building, Sparkles } from 'lucide-react';

interface CityPageProps {
  cityName: string;
  description: string;
  neighborhoods: string[];
  zipCodes: string[];
}

const CityCleaningPage: React.FC<CityPageProps> = ({ 
  cityName, 
  description, 
  neighborhoods, 
  zipCodes 
}) => {
  React.useEffect(() => {
    // Update page title and meta description
    document.title = `House Cleaning ${cityName}, MN | LumiMaid Cleaning Services`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `LumiMaid provides premium residential and commercial cleaning services in ${cityName}, MN. Trusted, insured, and satisfaction guaranteed.`);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = `LumiMaid provides premium residential and commercial cleaning services in ${cityName}, MN. Trusted, insured, and satisfaction guaranteed.`;
      document.head.appendChild(meta);
    }

    // Add schema markup for local business and service
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": `LumiMaid Cleaning Services - ${cityName}`,
          "description": `Professional house cleaning services in ${cityName}, Minnesota`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": "MN",
            "postalCode": zipCodes.join(", ")
          },
          "telephone": "(612) 513-7035",
          "email": "info@lumimaid.com",
          "url": `https://lumimaid.com/house-cleaning-${cityName.toLowerCase().replace(' ', '-')}`,
          "priceRange": "$120-$450",
          "areaServed": {
            "@type": "City",
            "name": `${cityName}, MN`
          },
          "serviceArea": neighborhoods.map(n => `${n}, ${cityName}, MN`),
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200"
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-16:00"
          ]
        },
        {
          "@type": "Service",
          "name": `House Cleaning Services in ${cityName}`,
          "description": `Professional residential and commercial cleaning services for ${cityName} homeowners and businesses`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "LumiMaid Cleaning Services"
          },
          "areaServed": {
            "@type": "City", 
            "name": `${cityName}, MN`
          },
          "serviceType": "House Cleaning",
          "offers": {
            "@type": "Offer",
            "price": "120",
            "priceCurrency": "USD"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [cityName, neighborhoods, zipCodes]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: `${cityName}, MN`,
      rating: 5,
      text: "LumiMaid has been cleaning our home for over a year now. They're always punctual, thorough, and professional. I can't recommend them enough!",
      service: "Residential Cleaning"
    },
    {
      name: "Mike Chen", 
      location: `${cityName}, MN`,
      rating: 5,
      text: "Outstanding service! Our home has never looked better. The team is reliable and uses eco-friendly products.",
      service: "Deep Cleaning"
    },
    {
      name: "Jennifer Williams",
      location: `${cityName}, MN`, 
      rating: 5,
      text: "Used LumiMaid for our move-out cleaning and they exceeded expectations. Every detail was perfect!",
      service: "Move-Out Cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Trusted House Cleaning Services in {cityName}, MN
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book"
                className="bg-teal-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Service Now
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-teal-primary text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary hover:text-white transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Professional Cleaning Services for {cityName} Homeowners & Businesses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Residential Cleaning</h3>
                <p className="text-slate-600">
                  Regular house cleaning for {cityName} families. Weekly, bi-weekly, or monthly service.
                </p>
                <Link 
                  to="/services/residential"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Deep Cleaning</h3>
                <p className="text-slate-600">
                  Comprehensive deep cleaning for {cityName} homes. Perfect for spring cleaning or special occasions.
                </p>
                <Link 
                  to="/services/deep-cleaning"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Move-In/Move-Out</h3>
                <p className="text-slate-600">
                  Complete cleaning for {cityName} residents moving in or out. Get your deposit back guaranteed.
                </p>
                <Link 
                  to="/services/move-in-out"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Commercial Cleaning</h3>
                <p className="text-slate-600">
                  Professional office cleaning for {cityName} businesses. Flexible scheduling available.
                </p>
                <Link 
                  to="/services/commercial"
                  className="text-teal-primary hover:text-teal-primary/80 font-medium inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {cityName} Neighborhoods We Serve
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
              What {cityName} Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                    <div className="text-sm text-teal-primary">{testimonial.service}</div>
                  </div>
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
              Ready for a Cleaner Home in {cityName}?
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Join your neighbors in {cityName} who trust LumiMaid for their cleaning needs. 
              Professional, reliable, and satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book"
                className="bg-white text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/10 transition-colors"
              >
                Book Service Now
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

export default CityCleaningPage;