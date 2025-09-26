import React from 'react';
import ServiceAreaMap from '../../components/ServiceAreaMap';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const Minneapolis = () => {
  const locationData = {
    city: "Minneapolis",
    state: "MN",
    description: "Professional house cleaning services for Minneapolis residents and businesses. As Minnesota's largest city, Minneapolis deserves cleaning services that match its vibrant energy and high standards. Our local team understands the unique needs of Minneapolis homes and offices, from historic neighborhoods to modern downtown condos.",
    neighborhoods: [
      "Downtown Minneapolis",
      "Northeast Minneapolis",
      "North Loop",
      "Uptown",
      "Linden Hills",
      "Southwest Minneapolis",
      "Seward",
      "Longfellow",
      "Powderhorn",
      "Whittier",
      "Phillips",
      "Marcy-Holmes",
      "Como",
      "Prospect Park",
      "Cedar-Riverside"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        text: "LumiMaid has been cleaning our Uptown condo for over a year. They're always professional and thorough. Highly recommend!",
        rating: 5,
        service: "Residential Cleaning"
      },
      {
        name: "Mike Chen",
        text: "Outstanding commercial cleaning for our downtown Minneapolis office. The team is reliable and uses eco-friendly products.",
        rating: 5,
        service: "Commercial Cleaning"
      },
      {
        name: "Jennifer Williams",
        text: "Used LumiMaid for our move-out cleaning in Northeast Minneapolis. Every detail was perfect - got our full deposit back!",
        rating: 5,
        service: "Move-Out Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you serve all Minneapolis neighborhoods?",
        answer: "Yes, we provide cleaning services throughout Minneapolis including downtown, Uptown, Northeast, North Loop, and all surrounding neighborhoods. Our team is familiar with the unique characteristics of each area."
      },
      {
        question: "What makes Minneapolis cleaning different?",
        answer: "Minneapolis homes face unique challenges like harsh winters, spring pollen, and urban dust. We adjust our cleaning methods seasonally and use products that work well in Minnesota's climate conditions."
      },
      {
        question: "Do you offer parking solutions for Minneapolis cleanings?",
        answer: "Yes, our team is experienced with Minneapolis parking challenges. We handle street parking, ramp parking, and can coordinate with building management for downtown locations."
      }
    ],
    zipCodes: ["55401", "55402", "55403", "55404", "55405", "55406", "55407", "55408", "55409", "55410", "55411", "55412", "55413", "55414", "55415", "55416", "55417", "55418", "55419", "55454", "55455"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default Minneapolis;