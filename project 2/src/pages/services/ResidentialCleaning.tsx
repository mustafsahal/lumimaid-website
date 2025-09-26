import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ResidentialCleaning = () => {
  const serviceData = {
    title: "Residential House Cleaning Minneapolis",
    subtitle: "Professional home cleaning services for busy families in Minneapolis and St. Paul. Trusted, insured, and satisfaction guaranteed.",
    description: "Our residential cleaning service is designed for busy homeowners who want to come home to a spotless house without the hassle. We provide comprehensive cleaning that covers every room, using eco-friendly products safe for your family and pets. From regular maintenance cleaning to deep seasonal cleans, we customize our service to fit your lifestyle and budget.",
    features: [
      "Kitchen cleaning including appliances, countertops, and sink",
      "Bathroom sanitization and deep cleaning",
      "Dusting all surfaces, furniture, and baseboards",
      "Vacuuming carpets and mopping hard floors",
      "Bed making and trash removal",
      "Window sill and light fixture cleaning",
      "Eco-friendly cleaning products",
      "Flexible scheduling (weekly, bi-weekly, monthly)"
    ],
    pricing: {
      starting: "Starting at $120",
      description: "Pricing varies based on home size, frequency, and specific needs. Most homes range from $120-200 per visit."
    },
    faqs: [
      {
        question: "How long does a typical house cleaning take?",
        answer: "Most residential cleanings take 2-4 hours depending on the size of your home and the level of cleaning required. We'll provide an accurate time estimate during your initial consultation."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "No, you don't need to be home. Many of our clients provide us with a key or garage code so we can clean while they're at work. We're fully insured and bonded for your peace of mind."
      },
      {
        question: "What's the difference between regular and deep cleaning?",
        answer: "Regular cleaning focuses on maintenance tasks like dusting, vacuuming, and bathroom/kitchen cleaning. Deep cleaning includes everything in regular cleaning plus detailed work like inside appliances, baseboards, light fixtures, and other areas not covered in routine cleaning."
      }
    ],
    serviceType: "Residential Cleaning",
    keywords: ["house cleaning Minneapolis", "residential cleaning St Paul", "home cleaning service", "maid service Minneapolis"],
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default ResidentialCleaning;