import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const Bloomington = () => {
  const locationData = {
    city: "Bloomington",
    state: "MN",
    description: "Reliable house cleaning services for Bloomington families and businesses. Home to the Mall of America and a thriving business community, Bloomington combines suburban comfort with urban convenience. Our cleaning services are designed to help busy Bloomington residents maintain beautiful homes while enjoying all the city has to offer.",
    neighborhoods: [
      "East Bloomington",
      "West Bloomington",
      "Oxboro",
      "Penn Lake",
      "Valley View",
      "Pondview",
      "Bloomington Ferry",
      "Indian Mounds",
      "Dred Scott",
      "Hillcrest",
      "Oak Grove",
      "Normandale",
      "Bush Lake",
      "Nine Mile Creek",
      "Hyland Hills"
    ],
    testimonials: [
      {
        name: "Karen Miller",
        text: "Fantastic cleaning service for our East Bloomington home. The team is always punctual and thorough.",
        rating: 5,
        service: "Bi-weekly Cleaning"
      },
      {
        name: "Steven Garcia",
        text: "LumiMaid helped us prepare our West Bloomington house for sale. The deep cleaning made all the difference!",
        rating: 5,
        service: "Deep Cleaning"
      },
      {
        name: "Nancy Brown",
        text: "Professional office cleaning near Mall of America. Our employees appreciate the clean, healthy work environment.",
        rating: 5,
        service: "Commercial Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you clean homes near Mall of America?",
        answer: "Yes, we provide cleaning services throughout Bloomington including areas near Mall of America. We're familiar with the traffic patterns and can schedule around busy shopping seasons."
      },
      {
        question: "Can you handle Bloomington's diverse housing types?",
        answer: "Absolutely! Bloomington has everything from condos and townhomes to large single-family houses. Our team adapts our services to match your specific property type and cleaning needs."
      },
      {
        question: "Do you offer commercial cleaning for Bloomington businesses?",
        answer: "Yes, we provide comprehensive commercial cleaning services for Bloomington's many businesses, from small offices to larger commercial spaces. We understand the professional standards expected in this business-friendly community."
      }
    ],
    zipCodes: ["55420", "55425", "55431", "55437", "55438"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default Bloomington;