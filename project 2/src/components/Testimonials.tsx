import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Minneapolis, MN",
      rating: 5,
      text: "LumiMaid has been cleaning our home for over a year now. They're always punctual, thorough, and professional. I can't recommend them enough!",
      service: "Residential Cleaning"
    },
    {
      name: "Mike Chen",
      location: "St. Paul, MN", 
      rating: 5,
      text: "Outstanding commercial cleaning service! Our office has never looked better. The team is reliable and uses eco-friendly products.",
      service: "Commercial Cleaning"
    },
    {
      name: "Jennifer Williams",
      location: "Minnetonka, MN",
      rating: 5,
      text: "Used LumiMaid for our move-out cleaning and they exceeded expectations. Every detail was perfect - got our full deposit back!",
      service: "Move-Out Cleaning"
    },
    {
      name: "David Rodriguez",
      location: "Bloomington, MN",
      rating: 5,
      text: "Professional, trustworthy, and incredibly detailed. LumiMaid gives us peace of mind and more time with our family. Worth every penny!",
      service: "Weekly Cleaning"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what satisfied customers across 
            Minneapolis and St. Paul have to say about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-20" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.location}</div>
                <div className="text-sm text-blue-600 mt-1">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/pexels-mart-production-7415122.jpg" 
                alt="Happy Minneapolis family enjoying clean home"
                className="w-full h-48 object-cover opacity-20"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join 200+ Happy Customers
            </h3>
            <p className="text-blue-100 mb-6">
              Experience the LumiMaid difference with our satisfaction guarantee. 
              If you're not completely happy, we'll make it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                ⭐ 4.9/5 Average Rating
              </div>
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                🏆 200+ Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;