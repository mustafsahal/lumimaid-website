import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AirbnbCleaning = () => {
  const serviceData = {
    title: "Airbnb & Short-Term Rental Cleaning Minneapolis",
    subtitle: "Professional turnover cleaning for Airbnb hosts in Minneapolis and St. Paul. Fast, reliable service to keep your guests happy and reviews positive.",
    description: "Maximize your Airbnb success with our specialized short-term rental cleaning service. We understand the unique needs of vacation rental properties and provide fast, thorough turnovers between guests. Our service ensures your property is guest-ready with attention to detail that leads to 5-star reviews and repeat bookings.",
    features: [
      "Same-day or next-day turnover cleaning",
      "Complete linen and towel change",
      "Kitchen deep cleaning and restocking",
      "Bathroom sanitization and restocking",
      "Living area reset and staging",
      "Trash removal and fresh bag placement",
      "Basic amenity restocking (toilet paper, soap, etc.)",
      "Property condition reporting",
      "Flexible scheduling for back-to-back bookings",
      "Emergency cleaning for last-minute bookings"
    ],
    pricing: {
      starting: "Starting at $80",
      description: "Airbnb cleaning rates based on property size and turnover frequency. Most properties range from $80-150 per turnover."
    },
    faqs: [
      {
        question: "How quickly can you turn over my property?",
        answer: "We typically complete turnovers within 2-4 hours depending on property size. For same-day turnovers, we recommend booking as soon as you know your checkout/check-in schedule."
      },
      {
        question: "Do you provide linens and amenities?",
        answer: "We change and wash linens if you provide them. We can also restock basic amenities like toilet paper, soap, and towels. For full amenity management, we offer additional services at competitive rates."
      },
      {
        question: "Can you handle last-minute bookings?",
        answer: "Yes! We understand the nature of short-term rentals and offer emergency cleaning services. While we can't guarantee availability, we do our best to accommodate urgent requests, especially for our regular clients."
      }
    ],
    serviceType: "Airbnb Cleaning",
    keywords: ["Airbnb cleaning Minneapolis", "vacation rental cleaning St Paul", "short term rental cleaning", "turnover cleaning service Minneapolis"]
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default AirbnbCleaning;