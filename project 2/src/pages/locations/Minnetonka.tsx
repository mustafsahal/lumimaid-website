import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const Minnetonka = () => {
  const locationData = {
    city: "Minnetonka",
    state: "MN",
    description: "Premium house cleaning services for Minnetonka's lakeside community. Known for its beautiful lakes, excellent schools, and upscale neighborhoods, Minnetonka residents value quality and attention to detail. Our professional cleaning services are designed to meet the high standards expected in this prestigious community.",
    neighborhoods: [
      "Minnetonka Beach",
      "Spring Park",
      "Tonka Bay",
      "Woodland",
      "Deephaven",
      "Excelsior",
      "Shorewood",
      "Greenwood",
      "Hopkins",
      "Glen Lake",
      "Christmas Lake",
      "Lake Minnetonka",
      "Ridgedale",
      "Williston",
      "Minnetonka Mills"
    ],
    testimonials: [
      {
        name: "Elizabeth Parker",
        text: "Outstanding service for our lakefront home. LumiMaid understands the unique needs of waterfront properties.",
        rating: 5,
        service: "Residential Cleaning"
      },
      {
        name: "William Davis",
        text: "Professional deep cleaning before our holiday party. Every detail was perfect - our guests were impressed!",
        rating: 5,
        service: "Deep Cleaning"
      },
      {
        name: "Catherine Smith",
        text: "Reliable weekly cleaning that lets us enjoy our beautiful Minnetonka home without the stress of maintenance.",
        rating: 5,
        service: "Weekly Cleaning"
      }
    ],
    faqs: [
      {
        question: "Do you clean lakefront properties in Minnetonka?",
        answer: "Yes, we have extensive experience cleaning lakefront and waterfront properties around Lake Minnetonka. We understand the unique challenges like humidity, sand, and seasonal maintenance needs."
      },
      {
        question: "Can you handle luxury homes and high-end finishes?",
        answer: "Absolutely! Our team is trained to clean luxury homes with high-end finishes, custom millwork, and expensive surfaces. We use appropriate products and techniques to protect your investment."
      },
      {
        question: "Do you provide seasonal cleaning services?",
        answer: "Yes, we offer seasonal cleaning services including spring opening and fall closing for lake homes, holiday preparation cleaning, and seasonal deep cleaning to maintain your home year-round."
      }
    ],
    zipCodes: ["55305", "55331", "55343", "55345", "55391"]
  };

  return <LocationPageTemplate {...locationData} />;
};

export default Minnetonka;