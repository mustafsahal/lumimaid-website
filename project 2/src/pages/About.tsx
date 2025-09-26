import React from 'react';
import { Users, Heart, Sparkles, Shield, Award, Clock } from 'lucide-react';

const About = () => {
  React.useEffect(() => {
    document.title = 'About LumiMaid Cleaning Services | Minneapolis House Cleaning';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about LumiMaid Cleaning Services - Minneapolis and St. Paul\'s trusted house cleaning company. Family-owned, insured, and committed to excellence since 2019.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About LumiMaid Cleaning Services
            </h1>
            <p className="text-xl text-slate-600 mb-12">
              Serving Minneapolis and St. Paul with premium cleaning services since 2019. We're committed to
              creating clean, healthy spaces for families and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  LumiMaid was founded in 2019 with a simple mission: to provide exceptional cleaning services 
                  that give our clients more time to focus on what matters most to them. As a family-owned 
                  business, we understand the challenges of balancing work, family, and maintaining a clean home.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  What started as a small team serving a few neighborhoods in Minneapolis has grown into 
                  the Twin Cities' most trusted cleaning service, serving hundreds of satisfied customers 
                  across Minneapolis, St. Paul, and surrounding communities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We're proud to be a local business that contributes to our community while helping 
                  families and businesses maintain clean, healthy environments.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">5+ Years Experience</h3>
                      <p className="text-slate-600 text-sm">Serving the Twin Cities since 2019</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">200+ Happy Clients</h3>
                      <p className="text-slate-600 text-sm">Trusted by families and businesses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Fully Insured & Bonded</h3>
                      <p className="text-slate-600 text-sm">Complete peace of mind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Why Choose LumiMaid?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide exceptional cleaning services that give our clients more time to focus on what matters most to them, 
                  while maintaining the highest standards of professionalism and care.
                </p>
                
                <h3 className="text-2xl font-semibold text-slate-800">Our Promise</h3>
                <p className="text-slate-600 leading-relaxed">
                  We promise to treat your home or business with the same care and attention we would give our own. 
                  Every cleaning is backed by our 100% satisfaction guarantee.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-teal-primary mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Reliability and punctuality you can count on</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-teal-primary mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Attention to detail in every cleaning task</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-teal-primary mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-teal-primary mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Eco-friendly products safe for families and pets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Team</h2>
            <p className="text-xl text-slate-600 mb-12">
              Every member of our cleaning team is carefully selected, thoroughly trained, and committed to excellence.
            </p>
            
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-10 h-10 text-teal-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Background Checked</h3>
                  <p className="text-slate-600 text-sm">All team members undergo thorough background checks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-10 h-10 text-teal-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Professionally Trained</h3>
                  <p className="text-slate-600 text-sm">Comprehensive training in cleaning techniques and safety</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-10 h-10 text-teal-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Passionate & Caring</h3>
                  <p className="text-slate-600 text-sm">Dedicated to providing exceptional service with a smile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;