import React from 'react';
import CityCleaningPage from './[city]';
import { cities } from '../../data/cities';

const StPaulHouseCleaning = () => {
  const cityData = cities.find(city => city.slug === 'st-paul')!;
  
  return (
    <CityCleaningPage
      cityName={cityData.name}
      description={cityData.description}
      neighborhoods={cityData.neighborhoods}
      zipCodes={cityData.zipCodes}
    />
  );
};

export default StPaulHouseCleaning;