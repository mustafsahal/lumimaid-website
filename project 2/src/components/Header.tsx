import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">LumiMaid</h1>
            <div className="hidden md:flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(612) 513-7035</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@lumimaid.com</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Now
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t bg-white">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-slate-700 hover:text-blue-600 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-700 hover:text-blue-600 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-slate-700 hover:text-blue-600 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-slate-700 hover:text-blue-600 font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-slate-700 hover:text-blue-600 font-medium">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('booking')} 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;