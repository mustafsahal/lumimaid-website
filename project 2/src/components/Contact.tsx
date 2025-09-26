import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const serviceAreas = [
    "Minneapolis", "St. Paul", "Bloomington", "Plymouth", "Minnetonka",
    "Eden Prairie", "Burnsville", "Eagan", "Woodbury", "Maple Grove",
    "Brooklyn Park", "Lakeville", "Blaine", "Roseville", "Coon Rapids"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Contact LumiMaid
            </h2>
            <p className="text-xl text-slate-600">
              Ready to schedule your cleaning service? Get in touch with us today for a free quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-teal-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Phone</h4>
                      <p className="text-slate-600">(612) 513-7035</p>
                      <p className="text-sm text-slate-500">Call or text for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-teal-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Email</h4>
                      <p className="text-slate-600">info@lumimaid.com</p>
                      <p className="text-sm text-slate-500">We respond within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-teal-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Business Hours</h4>
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
                      <h4 className="font-semibold text-slate-800">Emergency Service</h4>
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
                  <button className="bg-white text-teal-primary px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/10 transition-colors">
                    Call Now
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-primary transition-colors">
                    Email Us
                  </button>
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
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;