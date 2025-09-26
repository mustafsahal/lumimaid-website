import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Residential Cleaning', path: '/services/residential' },
    { name: 'Commercial Cleaning', path: '/services/commercial' },
    { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
    { name: 'Move-In/Move-Out', path: '/services/move-in-out' },
    { name: 'Airbnb Cleaning', path: '/services/airbnb' },
    { name: 'Post-Construction', path: '/services/post-construction' }
  ];

  const locations = [
    { name: 'Minneapolis', path: '/locations/minneapolis' },
    { name: 'St. Paul', path: '/locations/st-paul' },
    { name: 'Edina', path: '/locations/edina' },
    { name: 'Bloomington', path: '/locations/bloomington' },
    { name: 'Maple Grove', path: '/locations/maple-grove' },
    { name: 'Minnetonka', path: '/locations/minnetonka' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-teal-primary border-b border-teal-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center py-2">
            <div className="hidden md:flex items-center space-x-6 text-sm text-white">
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
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className="text-2xl font-poppins font-bold italic text-teal-primary group-hover:text-slate-navy transition-colors">
                LumiMaid
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' ? 'text-teal-primary' : 'text-slate-800 hover:text-teal-primary'
              }`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center space-x-1 text-slate-800 hover:text-teal-primary font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                onMouseEnter={() => setIsLocationsOpen(true)}
                className="flex items-center space-x-1 text-slate-800 hover:text-teal-primary font-medium transition-colors"
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLocationsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 z-50"
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => setIsLocationsOpen(false)}
                >
                  {locations.map((location) => (
                    <Link
                      key={location.path}
                      to={location.path}
                      onClick={() => setIsLocationsOpen(false)}
                      className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                    >
                      {location.name}
                    </Link>
                  ))}
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-1 text-xs text-slate-500 font-medium">House Cleaning Pages</div>
                  <Link
                    to="/house-cleaning-minneapolis"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    Minneapolis House Cleaning
                  </Link>
                  <Link
                    to="/house-cleaning-st-paul"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    St. Paul House Cleaning
                  </Link>
                  <Link
                    to="/house-cleaning-edina"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    Edina House Cleaning
                  </Link>
                  <Link
                    to="/house-cleaning-bloomington"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    Bloomington House Cleaning
                  </Link>
                  <Link
                    to="/house-cleaning-maple-grove"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    Maple Grove House Cleaning
                  </Link>
                  <Link
                    to="/house-cleaning-minnetonka"
                    onClick={() => setIsLocationsOpen(false)}
                    className="block px-4 py-2 text-slate-800 hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    Minnetonka House Cleaning
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' ? 'text-teal-primary' : 'text-slate-800 hover:text-teal-primary'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-teal-primary' : 'text-slate-800 hover:text-teal-primary'
              }`}
            >
              Contact
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${
                location.pathname.startsWith('/blog') ? 'text-teal-primary' : 'text-slate-800 hover:text-teal-primary'
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/book" 
              className="bg-teal-primary text-white px-6 py-2 rounded-lg hover:bg-teal-primary/90 transition-colors font-medium"
            >
              Book Now
            </Link>
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
              <Link to="/" className="text-left text-slate-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-slate-500 text-sm font-medium">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-slate-800 hover:text-teal-primary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-slate-500 text-sm font-medium">Locations</div>
                {locations.map((location) => (
                  <Link
                    key={location.path}
                    to={location.path}
                    className="block pl-4 text-slate-800 hover:text-teal-primary"
                  >
                    {location.name}
                  </Link>
                ))}
                <div className="text-slate-500 text-sm font-medium mt-4">House Cleaning Pages</div>
                <Link to="/house-cleaning-minneapolis" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  Minneapolis House Cleaning
                </Link>
                <Link to="/house-cleaning-st-paul" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  St. Paul House Cleaning
                </Link>
                <Link to="/house-cleaning-edina" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  Edina House Cleaning
                </Link>
                <Link to="/house-cleaning-bloomington" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  Bloomington House Cleaning
                </Link>
                <Link to="/house-cleaning-maple-grove" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  Maple Grove House Cleaning
                </Link>
                <Link to="/house-cleaning-minnetonka" className="block pl-4 text-slate-800 hover:text-teal-primary">
                  Minnetonka House Cleaning
                </Link>
              </div>
              <Link to="/about" className="text-left text-slate-800 hover:text-teal-primary font-medium">
                About
              </Link>
              <Link to="/contact" className="text-left text-slate-800 hover:text-teal-primary font-medium">
                Contact
              </Link>
              <Link to="/blog" className="text-left text-slate-800 hover:text-teal-primary font-medium">
                Blog
              </Link>
              <Link 
                to="/book" 
                className="bg-teal-primary text-white px-6 py-2 rounded-lg hover:bg-teal-primary/90 transition-colors font-medium text-left"
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;