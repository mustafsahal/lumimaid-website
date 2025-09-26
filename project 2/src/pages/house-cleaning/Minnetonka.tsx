import React from 'react';
import CityCleaningPage from './[city]';
import { cities } from '../../data/cities';

const MinnetonkaHouseCleaning = () => {
  const cityData = cities.find(city => city.slug === 'minnetonka')!;
  
  return (
    <CityCleaningPage
      cityName={cityData.name}
      description={cityData.description}
      neighborhoods={cityData.neighborhoods}
      zipCodes={cityData.zipCodes}
    />
  );
};

export default MinnetonkaHouseCleaning;