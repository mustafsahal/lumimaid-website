import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const Edina = () => {
  const locationData = {
    city: "Edina",
    state: "MN",
    description: "Premium house cleaning services for Edina's upscale homes and businesses. Known for its excellent schools and beautiful neighborhoods, Edina residents expect the highest quality in all services, including house cleaning. Our professional team delivers meticulous attention to detail that matches Edina's high standards.",
    neighborhoods: [
      "Country Club District",
      "Morningside",
      "Cahill Village",
      "Highlands",
      "Indian Hills",
      "Interlachen",
      "Parkwood Knolls",
      "Sunnyslope",
      "White Oaks",
      "Cornelia",
      "Braemar Hills",
      "Chapel Hill",
      "Edinborough",
      "South Edina",
      "West Edina"
    ],
    testimonials: [
      {
        name: "Margaret Anderson",
        text: "LumiMaid provides exceptional service for our Country Club District home. Their attention to detail is unmatched.",
        rating: 5,
        service: "Residential Cleaning"
      },
      {
        name: "James Wilson",
        text: "Professional and reliable cleaning for our Morningside property. They understand the quality we expect in Edina.",
        rating: 5,
        service: "Deep Cleaning"
      },
      {
        name: "Patricia Davis",
        text: "Outstanding move-in cleaning for our new Edina home. Everything was perfect when we arrived with our belongings.",
        rating: 5,
        service: "Move-In Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you specialize in luxury home cleaning?",
        answer: "Yes, we have extensive experience cleaning Edina's upscale homes. Our team is trained to handle high-end finishes, luxury appliances, and delicate surfaces with the care they deserve."
      },
      {
        question: "Can you accommodate busy Edina family schedules?",
        answer: "Absolutely! We understand Edina families have demanding schedules with work, school activities, and community involvement. We offer flexible scheduling including evenings and weekends to fit your lifestyle."
      },
      {
        question: "Do you provide eco-friendly cleaning in Edina?",
        answer: "Yes, we use eco-friendly, non-toxic cleaning products that are safe for families, pets, and the environment. This is especially important for Edina's environmentally conscious residents."
      }
    ],
    zipCodes: ["55410", "55424", "55435", "55436"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default Edina;