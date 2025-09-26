import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const StPaul = () => {
  const locationData = {
    city: "St. Paul",
    state: "MN",
    description: "Trusted house cleaning services for St. Paul residents and businesses. Minnesota's capital city deserves exceptional cleaning services that respect its historic charm while meeting modern standards. Our experienced team provides reliable, thorough cleaning for St. Paul's diverse neighborhoods and business districts.",
    neighborhoods: [
      "Downtown St. Paul",
      "Cathedral Hill",
      "Summit Hill",
      "Grand Avenue",
      "Highland Park",
      "Mac-Groveland",
      "Merriam Park",
      "Hamline-Midway",
      "Frogtown",
      "North End",
      "East Side",
      "West Side",
      "Como Park",
      "Midway",
      "Battle Creek"
    ],
    testimonials: [
      {
        name: "David Rodriguez",
        text: "Professional service in our Highland Park home. LumiMaid gives us peace of mind and more time with our family.",
        rating: 5,
        service: "Weekly Cleaning"
      },
      {
        name: "Lisa Thompson",
        text: "Excellent deep cleaning service for our Summit Hill Victorian. They respect the historic details while getting everything spotless.",
        rating: 5,
        service: "Deep Cleaning"
      },
      {
        name: "Robert Kim",
        text: "Reliable commercial cleaning for our downtown St. Paul office. Always on time and thorough.",
        rating: 5,
        service: "Commercial Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you clean historic homes in St. Paul?",
        answer: "Absolutely! We have extensive experience cleaning St. Paul's beautiful historic homes, especially in neighborhoods like Summit Hill and Cathedral Hill. We use appropriate products and techniques that protect historic surfaces and details."
      },
      {
        question: "Can you handle St. Paul's unique architecture?",
        answer: "Yes, our team is experienced with St. Paul's diverse architecture from Victorian mansions to modern condos. We adapt our cleaning methods to suit different home styles and their specific needs."
      },
      {
        question: "Do you serve the entire St. Paul metro area?",
        answer: "We serve all St. Paul neighborhoods and many surrounding communities. If you're unsure about service to your area, please call us - we're always expanding our coverage area."
      }
    ],
    zipCodes: ["55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55116", "55117", "55118", "55119", "55130", "55144", "55155", "55161", "55164", "55165", "55166", "55168", "55169", "55170", "55171", "55172", "55175", "55177", "55187", "55188", "55191"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default StPaul;