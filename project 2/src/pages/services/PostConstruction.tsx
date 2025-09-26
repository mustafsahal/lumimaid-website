import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PostConstruction = () => {
  const serviceData = {
    title: "Post-Construction Cleaning Minneapolis",
    subtitle: "Professional construction cleanup services in Minneapolis and St. Paul. Safe, thorough cleaning after renovation or construction projects.",
    description: "Construction and renovation projects leave behind dust, debris, and residue that requires specialized cleaning. Our post-construction cleaning service safely removes construction dust, paint splatters, adhesive residue, and other building materials while protecting your new surfaces. We have the equipment and expertise to handle everything from small renovations to large construction projects.",
    features: [
      "Construction dust and debris removal",
      "Paint splatter and adhesive residue removal",
      "Window and glass surface cleaning",
      "Floor cleaning and protection",
      "Light fixture and ceiling cleaning",
      "HVAC vent and filter cleaning",
      "Cabinet and fixture detail cleaning",
      "Bathroom and kitchen sanitization",
      "Specialized equipment for heavy-duty cleaning",
      "Safe disposal of construction debris"
    ],
    pricing: {
      starting: "Starting at $300",
      description: "Post-construction cleaning rates vary significantly based on project size and debris level. Most projects range from $300-800."
    },
    faqs: [
      {
        question: "When should I schedule post-construction cleaning?",
        answer: "Schedule cleaning after all construction work is complete but before moving in furniture or belongings. This ensures the most thorough cleaning and protects your belongings from construction dust."
      },
      {
        question: "Do you handle hazardous materials?",
        answer: "We handle typical construction debris and dust, but we don't remove hazardous materials like asbestos or lead paint. These require specialized hazmat services. We can recommend certified professionals for hazardous material removal."
      },
      {
        question: "How long does post-construction cleaning take?",
        answer: "Timing varies greatly based on project size and debris level. Small renovations may take 4-6 hours, while large construction projects can take 1-3 days. We'll provide a detailed estimate after assessing your project."
      }
    ],
    serviceType: "Post-Construction Cleaning",
    keywords: ["post construction cleaning Minneapolis", "renovation cleanup St Paul", "construction debris removal", "after construction cleaning Minneapolis"]
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default PostConstruction;