import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const MoveInOut = () => {
  const serviceData = {
    title: "Move-In/Move-Out Cleaning Minneapolis",
    subtitle: "Professional moving cleaning services in Minneapolis and St. Paul. Get your deposit back or start fresh in your new home.",
    description: "Moving is stressful enough without worrying about cleaning. Our move-in/move-out cleaning service ensures your old home is spotless for the next occupants (helping secure your deposit return) or your new home is perfectly clean before you settle in. We provide thorough, detailed cleaning that meets the highest standards expected by landlords and property managers.",
    features: [
      "Complete interior cleaning of all rooms",
      "Inside appliance cleaning (refrigerator, oven, dishwasher)",
      "Cabinet and drawer interior cleaning",
      "Closet and storage area cleaning",
      "Light fixture and ceiling fan cleaning",
      "Window cleaning (interior)",
      "Baseboard and trim detailed cleaning",
      "Bathroom deep sanitization",
      "Kitchen deep cleaning including inside cabinets",
      "Floor deep cleaning and sanitization"
    ],
    pricing: {
      starting: "Starting at $250",
      description: "Move-in/out cleaning rates vary by property size and condition. Most properties range from $250-450 for complete service."
    },
    faqs: [
      {
        question: "Do you guarantee deposit return?",
        answer: "While we can't guarantee deposit return (as this depends on other factors), our thorough cleaning meets or exceeds most landlord and property management cleaning requirements. We provide detailed documentation of our work if needed."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking 1-2 weeks in advance, especially during peak moving seasons (summer months and month-end). However, we often accommodate last-minute requests based on availability."
      },
      {
        question: "Can you clean while movers are there?",
        answer: "We prefer to clean after all belongings are removed for the most thorough job. However, we can coordinate with your moving schedule and work around movers if necessary."
      }
    ],
    serviceType: "Move-in/Move-out Cleaning",
    keywords: ["move out cleaning Minneapolis", "move in cleaning St Paul", "rental cleaning service", "deposit cleaning Minneapolis"]
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default MoveInOut;