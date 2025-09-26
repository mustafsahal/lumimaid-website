import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import existing components
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TestimonialsUpgraded from './components/TestimonialsUpgraded';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';

// Import new components
import HowItWorks from './components/HowItWorks';
import PricingHighlight from './components/PricingHighlight';
import GuaranteeBanner from './components/GuaranteeBanner';
import ProfessionalTeam from './components/ProfessionalTeam';
import PricingCalculator from './components/PricingCalculator';
import BeforeAfter from './components/BeforeAfter';

// Import service areas component
import ServiceAreas from './components/ServiceAreas';

// Import new pages
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import BookPage from './pages/Book';

// Import service pages
import ResidentialCleaning from './pages/services/ResidentialCleaning';
import CommercialCleaning from './pages/services/CommercialCleaning';
import DeepCleaning from './pages/services/DeepCleaning';
import MoveInOut from './pages/services/MoveInOut';
import AirbnbCleaning from './pages/services/AirbnbCleaning';
import PostConstruction from './pages/services/PostConstruction';

// Import location pages
import Minneapolis from './pages/locations/Minneapolis';
import StPaul from './pages/locations/StPaul';
import Edina from './pages/locations/Edina';
import Bloomington from './pages/locations/Bloomington';
import MapleGrove from './pages/locations/MapleGrove';
import Minnetonka from './pages/locations/Minnetonka';

// Import house cleaning city pages
import MinneapolisHouseCleaning from './pages/house-cleaning/Minneapolis';
import StPaulHouseCleaning from './pages/house-cleaning/StPaul';
import EdinaHouseCleaning from './pages/house-cleaning/Edina';
import BloomingtonHouseCleaning from './pages/house-cleaning/Bloomington';
import MapleGroveHouseCleaning from './pages/house-cleaning/MapleGrove';
import MinnetonkaHouseCleaning from './pages/house-cleaning/Minnetonka';

// Import blog pages
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Home page component
const HomePage = () => {
  React.useEffect(() => {
    document.title = 'House Cleaning Services in Minneapolis, MN | LumiMaid';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LumiMaid provides premium residential and commercial cleaning services in Minneapolis and the Twin Cities. Trusted, insured, and guaranteed.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'LumiMaid provides premium residential and commercial cleaning services in Minneapolis and the Twin Cities. Trusted, insured, and guaranteed.';
      document.head.appendChild(meta);
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LumiMaid Cleaning Services",
      "image": "https://lumimaid.com/logo.jpg",
      "description": "Professional residential and commercial cleaning services in Minneapolis and St. Paul",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MN",
        "addressLocality": "Minneapolis"
      },
      "telephone": "(612) 513-7035",
      "email": "info@lumimaid.com",
      "url": "https://lumimaid.com",
      "priceRange": "$120-$450",
      "serviceArea": [
        "Minneapolis, MN",
        "St. Paul, MN",
        "Bloomington, MN",
        "Plymouth, MN",
        "Minnetonka, MN"
      ],
      "services": [
        "House Cleaning",
        "Commercial Cleaning", 
        "Move-in/Move-out Cleaning",
        "Deep Cleaning"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-16:00"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main>
      <Hero />
      <HowItWorks />
      <PricingHighlight />
      <PricingCalculator />
      <BeforeAfter />
      <About />
      <Services />
      <TestimonialsUpgraded />
      <GuaranteeBanner />
      <ProfessionalTeam />
      <ServiceAreas />
      <BookingForm />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          
          {/* Service Pages */}
          <Route path="/services/residential" element={<ResidentialCleaning />} />
          <Route path="/services/commercial" element={<CommercialCleaning />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/services/move-in-out" element={<MoveInOut />} />
          <Route path="/services/airbnb" element={<AirbnbCleaning />} />
          <Route path="/services/post-construction" element={<PostConstruction />} />
          
          {/* Location Pages */}
          <Route path="/locations/minneapolis" element={<Minneapolis />} />
          <Route path="/locations/st-paul" element={<StPaul />} />
          <Route path="/locations/edina" element={<Edina />} />
          <Route path="/locations/bloomington" element={<Bloomington />} />
          <Route path="/locations/maple-grove" element={<MapleGrove />} />
          <Route path="/locations/minnetonka" element={<Minnetonka />} />
          
          {/* House Cleaning City Pages */}
          <Route path="/house-cleaning-minneapolis" element={<MinneapolisHouseCleaning />} />
          <Route path="/house-cleaning-st-paul" element={<StPaulHouseCleaning />} />
          <Route path="/house-cleaning-edina" element={<EdinaHouseCleaning />} />
          <Route path="/house-cleaning-bloomington" element={<BloomingtonHouseCleaning />} />
          <Route path="/house-cleaning-maple-grove" element={<MapleGroveHouseCleaning />} />
          <Route path="/house-cleaning-minnetonka" element={<MinnetonkaHouseCleaning />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;