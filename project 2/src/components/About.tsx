import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              About LumiMaid Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Serving Minneapolis and St. Paul with premium cleaning services since 2019. 
              We're committed to creating clean, healthy spaces for families and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Trusted Team</h3>
              <p className="text-slate-600">
                Background-checked, trained professionals who treat your home with respect and care.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-teal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Family-Owned</h3>
              <p className="text-slate-600">
                Local Minneapolis business that understands the community and values long-term relationships.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-teal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Quality Focused</h3>
              <p className="text-slate-600">
                Using eco-friendly products and proven methods to deliver exceptional results every time.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose LumiMaid?</h3>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800">Our Mission</h4>
                <p className="text-slate-600">
                  To provide exceptional cleaning services that give our clients more time to focus on what matters most to them, 
                  while maintaining the highest standards of professionalism and care.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800">Our Values</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• Reliability and punctuality you can count on</li>
                  <li>• Attention to detail in every cleaning task</li>
                  <li>• Transparent pricing with no hidden fees</li>
                  <li>• Eco-friendly products safe for families and pets</li>
                </ul>
              </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/ChatGPT Image Sep 26, 2025, 11_06_35 AM.png" 
                  alt="Professional LumiMaid cleaning team with uniforms and professional equipment"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;