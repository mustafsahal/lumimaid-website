import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award, Users, ArrowRight, Phone } from 'lucide-react';

const Pricing = () => {
  React.useEffect(() => {
    // Add schema markup for all services
    const services = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Basic Residential Cleaning",
        "category": "House Cleaning",
        "description": "Essential cleaning service including bathrooms, kitchen surfaces, dusting, and floors",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ],
        "offers": {
          "@type": "Offer",
          "price": "129",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "129",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Deep Clean Service",
        "category": "Deep Cleaning",
        "description": "Comprehensive cleaning including basic service plus baseboards, appliance exteriors, and detail work",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ],
        "offers": {
          "@type": "Offer",
          "price": "199",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "199",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Move-In/Move-Out Cleaning",
        "category": "Moving Cleaning",
        "description": "Complete moving cleaning including deep clean plus inside fridge, oven, and cabinets",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ],
        "offers": {
          "@type": "Offer",
          "price": "249",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "249",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Cleaning Plans",
        "category": "Commercial Cleaning",
        "description": "Custom commercial cleaning plans for offices, salons, gyms with flexible schedules",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Airbnb/Short-Term Rental Cleaning",
        "category": "Vacation Rental Cleaning",
        "description": "Professional turnover cleaning for Airbnb and short-term rental properties",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ],
        "offers": {
          "@type": "Offer",
          "price": "149",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "149",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Post-Construction Cleaning",
        "category": "Construction Cleanup",
        "description": "Specialized cleaning service for post-construction and renovation cleanup",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LumiMaid Cleaning Services",
          "telephone": "(612) 555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "MN",
            "addressLocality": "Minneapolis"
          }
        },
        "areaServed": [
          "Minneapolis, MN",
          "St. Paul, MN"
        ],
        "offers": {
          "@type": "Offer",
          "price": "299",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "299",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      }
    ];

    // Add all service schemas to the page
    services.forEach((service, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `service-schema-${index}`;
      script.textContent = JSON.stringify(service);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      services.forEach((_, index) => {
        const existingScript = document.getElementById(`service-schema-${index}`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      });
    };
  }, []);

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Transparent Pricing for Minneapolis Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional cleaning services with upfront pricing. No hidden fees, 
              no surprises - just exceptional cleaning at fair rates.
            </p>
          </div>

          {/* Residential Tiers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Residential Cleaning Services
            </h3>
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <img 
                src="/luxury-kitchen-ideas.jpg" 
                alt="Beautiful clean kitchen showcasing LumiMaid's residential cleaning quality"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h4 className="text-xl font-bold mb-2">Premium Results, Every Time</h4>
                  <p className="text-slate-200">Experience the LumiMaid difference in your Minneapolis home</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Basic Cleaning */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Basic</h4>
                  <p className="text-slate-600 mb-4">
                    Essential cleaning for regular maintenance
                  </p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Starting at $129
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Bathroom cleaning and sanitization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Kitchen surfaces and countertops</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Dusting all accessible surfaces</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Floor vacuuming and mopping</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book"
                    className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                    aria-label="Book Basic Cleaning Service"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-teal-primary text-teal-primary px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center text-lg"
                    aria-label="Request exact quote for Basic Cleaning"
                  >
                    Request Exact Quote
                  </Link>
                </div>
              </div>

              {/* Deep Clean */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Deep Clean</h4>
                  <p className="text-slate-600 mb-4">
                    Comprehensive cleaning for a fresh start
                  </p>
                  <div className="text-3xl font-bold text-teal-primary mb-2">
                    Starting at $199
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Everything in Basic cleaning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Baseboards and window sills</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Appliance exterior cleaning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Detailed work and hard-to-reach areas</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book"
                    className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                    aria-label="Book Deep Cleaning Service"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-teal-primary text-teal-primary px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center text-lg"
                    aria-label="Request exact quote for Deep Cleaning"
                  >
                    Request Exact Quote
                  </Link>
                </div>
              </div>

              {/* Move-In/Move-Out */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Move-In/Move-Out</h4>
                  <p className="text-slate-600 mb-4">
                    Complete cleaning for moving transitions
                  </p>
                  <div className="text-3xl font-bold text-teal-primary mb-2">
                    Starting at $249
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Everything in Deep Clean</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Inside refrigerator cleaning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Inside oven and microwave</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Cabinet interiors and drawers</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book"
                    className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                    aria-label="Book Move-In/Move-Out Cleaning Service"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-teal-primary text-teal-primary px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center text-lg"
                    aria-label="Request exact quote for Move-In/Move-Out Cleaning"
                  >
                    Request Exact Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Block */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Commercial Cleaning Services
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">Custom Plans</h4>
                  <p className="text-slate-300 mb-4">
                    Tailored commercial cleaning for offices, salons, gyms, and more
                  </p>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    Quote Only
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">Offices and professional spaces</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">Salons and beauty establishments</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">Gyms and fitness centers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">Flexible scheduling options</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                  aria-label="Request a commercial cleaning proposal"
                >
                  <span>Request a Proposal</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Specialty Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Specialty Cleaning Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Airbnb/STR */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Airbnb/STR</h4>
                  <p className="text-slate-600 mb-4">
                    Fast turnovers for short-term rentals
                  </p>
                  <div className="text-3xl font-bold text-teal-primary mb-2">
                    Starting at $149<span className="text-lg text-slate-500">/turn</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Same-day turnover available</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Linen change and restocking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Guest-ready presentation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Property condition reporting</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book"
                    className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                    aria-label="Book Airbnb Cleaning Service"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-teal-primary text-teal-primary px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center text-lg"
                    aria-label="Request exact quote for Airbnb Cleaning"
                  >
                    Request Exact Quote
                  </Link>
                </div>
              </div>

              {/* Post-Construction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Post-Construction</h4>
                  <p className="text-slate-600 mb-4">
                    Specialized cleanup after renovations
                  </p>
                  <div className="text-3xl font-bold text-teal-primary mb-2">
                    Starting at $299
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Construction dust removal</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Paint and adhesive cleanup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Window and fixture cleaning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Debris removal and disposal</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/book"
                    className="w-full bg-teal-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg"
                    aria-label="Book Post-Construction Cleaning Service"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border-2 border-teal-primary text-teal-primary px-6 py-4 rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center text-lg"
                    aria-label="Request exact quote for Post-Construction Cleaning"
                  >
                    Request Exact Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-teal-primary" aria-hidden="true" />
                <span className="text-slate-700 font-semibold">Insured & Bonded</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-teal-primary" aria-hidden="true" />
                <span className="text-slate-700 font-semibold">Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-teal-primary" aria-hidden="true" />
                <span className="text-slate-700 font-semibold">Background-Checked Pros</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers across Minneapolis and St. Paul. 
              Book your cleaning service today or get a custom quote for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-teal-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2"
                aria-label="Book any cleaning service"
              >
                <span>Book Service Now</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:(612)513-7035"
                className="border-2 border-teal-primary text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors flex items-center justify-center space-x-2"
                aria-label="Call LumiMaid Cleaning Services"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call (612) 513-7035</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;