import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const DeepCleaning = () => {
  const serviceData = {
    title: "Deep Cleaning Services Minneapolis",
    subtitle: "Comprehensive deep cleaning for Minneapolis homes. Perfect for spring cleaning, special occasions, or getting back on track.",
    description: "Our deep cleaning service goes beyond regular maintenance to tackle every corner of your home. This comprehensive service is perfect for spring cleaning, preparing for special events, or when you need to reset your home's cleanliness. We clean areas often overlooked in regular cleaning, ensuring your home is thoroughly sanitized and spotless from top to bottom.",
    features: [
      "Inside appliance cleaning (oven, refrigerator, microwave)",
      "Cabinet and drawer interior cleaning",
      "Baseboards and window sill deep cleaning",
      "Light fixture and ceiling fan cleaning",
      "Door frame and switch plate sanitization",
      "Grout and tile deep scrubbing",
      "Inside window cleaning (where accessible)",
      "Detailed bathroom sanitization including behind toilet",
      "Closet and pantry organization cleaning",
      "All regular cleaning tasks included"
    ],
    pricing: {
      starting: "Starting at $200",
      description: "Deep cleaning rates depend on home size and condition. Most homes range from $200-350 for a comprehensive deep clean."
    },
    faqs: [
      {
        question: "How often should I get deep cleaning?",
        answer: "Most homeowners benefit from deep cleaning 2-4 times per year, typically with seasonal changes. It's also recommended before starting regular cleaning service or after extended periods without professional cleaning."
      },
      {
        question: "How long does deep cleaning take?",
        answer: "Deep cleaning typically takes 4-8 hours depending on your home's size and condition. Larger homes or those that haven't been professionally cleaned recently may require additional time."
      },
      {
        question: "Can I combine deep cleaning with regular service?",
        answer: "Absolutely! Many clients start with a deep cleaning and then transition to regular weekly or bi-weekly maintenance cleaning. This ensures your home stays consistently clean with less intensive future cleanings."
      }
    ],
    serviceType: "Deep Cleaning",
    keywords: ["deep cleaning Minneapolis", "spring cleaning St Paul", "thorough house cleaning", "detailed cleaning service Minneapolis"],
    heroImage: {
      src: "/ChatGPT Image Sep 26, 2025, 11_06_35 AM.png",
      alt: "Deep cleaning bathroom service in Minneapolis"
    }
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default DeepCleaning;