import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: {
    starting: string;
    description: string;
  };
  faqs: FAQ[];
  serviceType: string;
  keywords: string[];
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  features,
  pricing,
  faqs,
  serviceType,
  keywords
}) => {
  React.useEffect(() => {
    // Update page title and meta description
    document.title = `${title} | LumiMaid Cleaning Services Minneapolis`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Professional ${title.toLowerCase()} in Minneapolis and St. Paul. ${description.substring(0, 120)}...`);
    }

    // Add service-specific schema markup
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
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
      "serviceType": serviceType,
      "areaServed": [
        "Minneapolis, MN",
        "St. Paul, MN",
        "Edina, MN",
        "Bloomington, MN",
        "Maple Grove, MN",
        "Minnetonka, MN"
      ],
      "offers": {
        "@type": "Offer",
        "price": pricing.starting,
        "priceCurrency": "USD"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [title, description, serviceType, pricing.starting]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book"
                className="bg-teal-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-teal-primary text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary hover:text-white transition-all"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/20150226_DSC4916.jpg" 
                    alt={`Beautiful modern kitchen showcasing ${serviceType.toLowerCase()} results in Minneapolis`}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  What's Included
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {description}
                </p>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Pricing</h3>
                <div className="text-3xl font-bold text-teal-primary mb-2">
                  {pricing.starting}
                </div>
                <p className="text-slate-600 mb-6">{pricing.description}</p>
                <Link 
                  to="/book"
                  className="w-full bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Frequently Asked Questions
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
              Ready to Get Started?
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Join hundreds of satisfied customers across Minneapolis and St. Paul. 
              Book your {title.toLowerCase()} service today!
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

export default ServicePageTemplate;