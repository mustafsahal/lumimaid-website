import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const MapleGrove = () => {
  const locationData = {
    city: "Maple Grove",
    state: "MN",
    description: "Professional house cleaning services for Maple Grove's growing community. One of Minnesota's fastest-growing cities, Maple Grove combines family-friendly neighborhoods with modern amenities. Our cleaning services help busy families maintain their beautiful homes while enjoying everything this vibrant community offers.",
    neighborhoods: [
      "Central Maple Grove",
      "North Maple Grove",
      "South Maple Grove",
      "East Maple Grove",
      "West Maple Grove",
      "Maple Grove Village",
      "Arbor Lakes",
      "The Grove",
      "Rush Creek",
      "Fernbrook",
      "Zachary Lane",
      "Hemlock Lane",
      "Bass Lake",
      "Fish Lake",
      "Weaver Lake"
    ],
    testimonials: [
      {
        name: "Michelle Johnson",
        text: "Excellent cleaning service for our Arbor Lakes home. LumiMaid helps us keep up with our busy family schedule.",
        rating: 5,
        service: "Weekly Cleaning"
      },
      {
        name: "Brian Thompson",
        text: "Professional and reliable team. They've been cleaning our Maple Grove home for two years - always consistent quality.",
        rating: 5,
        service: "Bi-weekly Cleaning"
      },
      {
        name: "Amanda Lee",
        text: "Great move-in cleaning service when we relocated to Maple Grove. Made our transition so much easier!",
        rating: 5,
        service: "Move-In Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you serve all of Maple Grove's neighborhoods?",
        answer: "Yes, we provide cleaning services throughout Maple Grove including newer developments like Arbor Lakes and established neighborhoods. Our team is familiar with the area's diverse housing styles."
      },
      {
        question: "Can you accommodate Maple Grove's busy family schedules?",
        answer: "Absolutely! We understand Maple Grove families are often juggling work, school activities, and community events. We offer flexible scheduling to work around your family's needs."
      },
      {
        question: "Do you clean new construction homes in Maple Grove?",
        answer: "Yes, we provide both post-construction cleaning for newly built homes and regular maintenance cleaning for new homeowners. We're experienced with the cleaning needs of Maple Grove's many new developments."
      }
    ],
    zipCodes: ["55311", "55369"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default MapleGrove;