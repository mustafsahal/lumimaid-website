import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ServiceAreaMap from '../components/ServiceAreaMap';

const Contact = () => {
  React.useEffect(() => {
    document.title = 'Contact LumiMaid Cleaning Services | Minneapolis House Cleaning';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact LumiMaid Cleaning Services for professional house cleaning in Minneapolis and St. Paul. Call (612) 555-0123 or email for a free quote.');
    }
  }, []);

  const serviceAreas = [
    "Minneapolis", "St. Paul", "Bloomington", "Plymouth", "Minnetonka",
    "Eden Prairie", "Burnsville", "Eagan", "Woodbury", "Maple Grove",
    "Brooklyn Park", "Lakeville", "Blaine", "Roseville", "Coon Rapids",
    "Edina", "Hopkins", "Richfield", "Crystal", "New Hope"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Contact LumiMaid
            </h1>
            <p className="text-xl text-slate-600">
              Ready to schedule your cleaning service? Get in touch with us today for a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-teal-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-800">Phone</h3>
                        <p className="text-slate-600">(612) 513-7035</p>
                        <p className="text-sm text-slate-500">Call or text for immediate assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-teal-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-800">Email</h3>
                        <p className="text-slate-600">info@lumimaid.com</p>
                        <p className="text-sm text-slate-500">We respond within 4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-teal-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-800">Business Hours</h3>
                        <div className="text-slate-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-teal-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-800">Emergency Service</h3>
                        <p className="text-slate-600">24/7 for urgent cleaning needs</p>
                        <p className="text-sm text-slate-500">Additional fees may apply</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-primary text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Free Quote Guarantee</h3>
                  <p className="text-teal-100 mb-6">
                    Get a detailed, no-obligation quote for your cleaning needs. 
                    All estimates are completely free with no hidden costs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:(612)513-7035"
                      className="bg-white text-teal-primary px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/10 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:info@lumimaid.com"
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-primary transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Areas & Map */}
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-6 h-6 text-teal-primary" />
                    <h3 className="text-2xl font-bold text-slate-800">Service Areas</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6">
                    We proudly serve the entire Minneapolis-St. Paul metropolitan area:
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="bg-white px-3 py-2 rounded-lg text-center text-sm font-medium text-slate-700">
                        {area}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-500 mt-6">
                    Don't see your city? Contact us - we may still be able to serve your area!
                  </p>
                </div>

                <ServiceAreaMap />
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
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  How do I get a quote for cleaning services?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  You can get a free quote by calling us at (612) 555-0123, emailing info@lumimaid.com, 
                  or using our online booking form. We'll ask about your home size, cleaning frequency, 
                  and any special requirements to provide an accurate estimate.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  What areas do you serve?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We serve Minneapolis, St. Paul, and most surrounding suburbs including Bloomington, 
                  Edina, Minnetonka, Maple Grove, and many others. If you're unsure about service 
                  to your area, please contact us.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  How far in advance should I book?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We recommend booking 1-2 weeks in advance for regular cleaning services. 
                  For special services like deep cleaning or move-in/out cleaning, 
                  booking 2-3 weeks ahead ensures your preferred date and time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;