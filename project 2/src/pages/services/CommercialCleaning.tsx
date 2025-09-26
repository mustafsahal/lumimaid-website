import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const CommercialCleaning = () => {
  const serviceData = {
    title: "Commercial Office Cleaning Minneapolis",
    subtitle: "Professional commercial cleaning services for Twin Cities businesses. Reliable, thorough, and customized to your schedule.",
    description: "Keep your workplace clean, healthy, and professional with our comprehensive commercial cleaning services. We work with offices, retail spaces, medical facilities, and other commercial properties throughout Minneapolis and St. Paul. Our trained team understands the unique needs of business environments and provides flexible scheduling to minimize disruption to your operations.",
    features: [
      "Daily, weekly, or monthly cleaning schedules",
      "Office and workspace sanitization",
      "Restroom deep cleaning and restocking",
      "Break room and kitchen area cleaning",
      "Carpet vacuuming and hard floor maintenance",
      "Trash and recycling removal",
      "Window and glass surface cleaning",
      "Disinfection of high-touch surfaces",
      "Flexible scheduling including after-hours service"
    ],
    pricing: {
      starting: "Starting at $150",
      description: "Commercial cleaning rates vary based on square footage, frequency, and specific requirements. Most offices range from $150-400 per visit."
    },
    faqs: [
      {
        question: "Can you clean during business hours?",
        answer: "Yes, we offer flexible scheduling including during business hours, after hours, and weekends. We work around your schedule to minimize disruption to your business operations."
      },
      {
        question: "Do you provide cleaning supplies and equipment?",
        answer: "Yes, we bring all necessary cleaning supplies, equipment, and eco-friendly products. We can also work with your preferred products if you have specific requirements or sensitivities."
      },
      {
        question: "Are you insured for commercial properties?",
        answer: "Absolutely. We carry comprehensive commercial liability insurance and are bonded. We can provide certificates of insurance for your property management company or building owner as needed."
      }
    ],
    serviceType: "Commercial Cleaning",
    keywords: ["commercial cleaning Minneapolis", "office cleaning St Paul", "business cleaning service", "janitorial services Twin Cities"],
    image: {
      src: "/luxury-kitchen-ideas.jpg",
      alt: "Commercial office cleaning service in Minneapolis"
    }
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default CommercialCleaning;