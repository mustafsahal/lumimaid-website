import React from 'react';
import { Shield, Users, Award, CheckCircle } from 'lucide-react';

const ProfessionalTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Meet Your Professional Cleaning Team
            </h2>
            <p className="text-xl text-slate-600">
              Uniformed, trained, and equipped with professional-grade tools for exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/ChatGPT Image Sep 26, 2025, 11_06_35 AM.png" 
                alt="Professional LumiMaid cleaning team in uniforms with professional equipment"
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Why Our Team Makes the Difference
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our professional cleaning team arrives in uniform with commercial-grade equipment, 
                  ensuring consistent, high-quality results every time. Each team member is thoroughly 
                  vetted, trained, and committed to exceeding your expectations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-teal-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Background Checked</h4>
                    <p className="text-slate-600 text-sm">Thorough screening for your peace of mind</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-teal-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Professionally Trained</h4>
                    <p className="text-slate-600 text-sm">Certified in cleaning techniques and safety</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-teal-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Uniformed & Branded</h4>
                    <p className="text-slate-600 text-sm">Professional appearance you can trust</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Fully Equipped</h4>
                    <p className="text-slate-600 text-sm">Commercial-grade tools and supplies</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-primary/10 rounded-lg p-6">
                <h4 className="font-semibold text-slate-800 mb-3">Professional Equipment Includes:</h4>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• Commercial-grade vacuum cleaners</li>
                  <li>• Professional floor cleaning machines</li>
                  <li>• Eco-friendly cleaning solutions</li>
                  <li>• Specialized tools for every surface</li>
                  <li>• Safety equipment and protective gear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTeam;