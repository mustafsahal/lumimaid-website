import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsUpgraded = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Uptown, Minneapolis",
      rating: 5,
      text: "LumiMaid has been cleaning our home for over a year now. They're always punctual, thorough, and professional. I can't recommend them enough!",
      service: "Weekly Cleaning",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Mike Chen",
      location: "Highland Park, St. Paul", 
      rating: 5,
      text: "Outstanding service! Our office has never looked better. The team is reliable and uses eco-friendly products that don't irritate our employees.",
      service: "Commercial Cleaning",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jennifer Williams",
      location: "Edina, MN",
      rating: 5,
      text: "Used LumiMaid for our move-out cleaning and they exceeded expectations. Every detail was perfect - we got our full security deposit back!",
      service: "Move-Out Cleaning",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Rodriguez",
      location: "Maple Grove, MN",
      rating: 5,
      text: "Professional, trustworthy, and incredibly detailed. LumiMaid gives us peace of mind and more time with our family. Worth every penny!",
      service: "Bi-weekly Cleaning",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-navy mb-8 tracking-wide">
          </h2>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-800 mb-8 tracking-wide">
            See Why Minneapolis Families Trust LumiMaid
          </h2>
          <p className="text-xl text-slate-600 font-inter leading-relaxed max-w-2xl mx-auto">
            Real reviews from satisfied customers across the Twin Cities metro area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-teal-primary/30 absolute top-6 right-6" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-warm-gold" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 italic leading-relaxed font-inter">"{testimonial.text}"</p>
              
              <div className="border-t border-gray-100 pt-6 flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-teal-primary/20"
                />
                <div>
                  <div className="font-poppins font-bold text-slate-navy">{testimonial.name}</div>
                  <div className="font-poppins font-bold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 font-inter">{testimonial.location}</div>
                  <div className="text-sm text-teal-primary font-inter font-semibold">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-primary to-slate-navy text-white rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Join 200+ Happy Customers
            </h3>
            <p className="text-teal-100 mb-8 text-lg font-inter leading-relaxed">
              Experience the LumiMaid difference with our satisfaction guarantee. 
              If you're not completely happy, we'll make it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-inter font-semibold border border-white/20">
                ⭐ 4.9/5 Average Rating
              </div>
              <div className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-inter font-semibold border border-white/20">
                🏆 200+ Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsUpgraded;