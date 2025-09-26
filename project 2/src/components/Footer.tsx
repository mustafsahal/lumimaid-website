import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-primary to-fresh-green rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="text-2xl font-poppins font-bold italic text-white">
                LumiMaid
              </span>
            </div>
            <p className="text-slate-300">
              Professional cleaning services for Minneapolis and St. Paul. 
              Trusted, insured, and bonded with 100% satisfaction guarantee.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-teal-primary rounded-full flex items-center justify-center hover:bg-teal-primary/90 cursor-pointer transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-teal-primary rounded-full flex items-center justify-center hover:bg-teal-primary/90 cursor-pointer transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-teal-primary rounded-full flex items-center justify-center hover:bg-teal-primary/90 cursor-pointer transition-colors">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-slate-300 hover:text-white text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-slate-300 hover:text-white text-left transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-slate-300 hover:text-white text-left transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-slate-300 hover:text-white text-left transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-slate-300 hover:text-white text-left transition-colors"
              >
                Contact
              </button>
              <Link to="/blog" className="text-left text-slate-300 hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Residential Cleaning
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Commercial Cleaning
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Move-In/Move-Out
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Deep Cleaning
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                One-Time Service
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <Phone className="w-4 h-4 text-teal-primary" />
                <span className="text-slate-300">(612) 513-7035</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-primary" />
                <span className="text-slate-300">info@lumimaid.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-primary mt-1" />
                <div className="text-slate-300">
                  <p>Serving Minneapolis</p>
                  <p>and St. Paul Metro</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors w-full"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 LumiMaid Cleaning Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;