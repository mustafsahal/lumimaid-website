import React, { useState, useEffect } from 'react';
import { Calculator, Home, Users, DollarSign, Info } from 'lucide-react';

interface PricingData {
  basePrice: number;
  perSqFt: number;
  roomMultiplier: number;
  description: string;
}

const PricingCalculator = () => {
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('2');
  const [bathrooms, setBathrooms] = useState<string>('2');
  const [serviceType, setServiceType] = useState<string>('regular');
  const [frequency, setFrequency] = useState<string>('one-time');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);

  const serviceTypes: Record<string, PricingData> = {
    regular: {
      basePrice: 200, // Based on your 1BR rate
      perSqFt: 0.02,
      roomMultiplier: 1.0,
      description: 'Standard cleaning including all main areas'
    },
    deep: {
      basePrice: 280, // 40% premium over regular
      perSqFt: 0.03,
      roomMultiplier: 1.4,
      description: 'Comprehensive deep cleaning with detailed work'
    },
    'move-out': {
      basePrice: 320, // 60% premium over regular
      perSqFt: 0.04,
      roomMultiplier: 1.6,
      description: 'Complete move-out cleaning including appliances'
    },
    commercial: {
      basePrice: 180,
      perSqFt: 0.08,
      roomMultiplier: 0.9,
      description: 'Professional office and commercial space cleaning'
    }
  };

  const frequencyDiscounts: Record<string, { discount: number; label: string }> = {
    'one-time': { discount: 0, label: 'One-Time Service' },
    'weekly': { discount: 0.15, label: 'Weekly (15% off)' },
    'bi-weekly': { discount: 0.10, label: 'Bi-Weekly (10% off)' },
    'monthly': { discount: 0.05, label: 'Monthly (5% off)' }
  };

  const addons = [
    { id: 'inside-oven', name: 'Inside Oven Cleaning', price: 25 },
    { id: 'inside-fridge', name: 'Inside Refrigerator', price: 30 },
    { id: 'inside-cabinets', name: 'Inside Cabinets', price: 40 },
    { id: 'garage', name: 'Garage Cleaning', price: 50 },
    { id: 'basement', name: 'Basement Cleaning', price: 35 },
    { id: 'windows-exterior', name: 'Exterior Windows', price: 60 },
    { id: 'carpet-shampoo', name: 'Carpet Shampooing', price: 80 },
    { id: 'wall-washing', name: 'Wall Washing', price: 45 },
    { id: 'light-fixtures', name: 'Light Fixture Deep Clean', price: 25 },
    { id: 'pet-hair', name: 'Pet Hair Removal', price: 20 }
  ];

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  useEffect(() => {
    calculatePrice();
  }, [squareFootage, bedrooms, bathrooms, serviceType, frequency, selectedAddons]);

  const calculatePrice = () => {
    const sqFt = parseInt(squareFootage) || 0;
    const bedroomCount = parseInt(bedrooms) || 0;
    const bathroomCount = parseInt(bathrooms) || 0;
    
    if (bedroomCount === 0) {
      setEstimatedPrice(0);
      return;
    }

    // Use your actual bedroom-based pricing
    let basePrice = 200; // 1 bedroom base
    if (bedroomCount === 1) basePrice = 200;
    else if (bedroomCount === 2) basePrice = 240;
    else if (bedroomCount === 3) basePrice = 320;
    else if (bedroomCount >= 4) basePrice = 400; // Extrapolated

    // Apply service type multiplier
    const service = serviceTypes[serviceType];
    let price = basePrice;
    
    if (serviceType === 'deep') {
      price = basePrice * 1.4; // 40% premium
    } else if (serviceType === 'move-out') {
      price = basePrice * 1.6; // 60% premium
    } else if (serviceType === 'commercial') {
      price = basePrice * 0.9; // 10% discount for commercial
    }
    
    // Add bathroom premium if more bathrooms than bedrooms
    if (bathroomCount > bedroomCount) {
      price += (bathroomCount - bedroomCount) * 25;
    }
    
    // Apply frequency discount
    const frequencyData = frequencyDiscounts[frequency];
    price = price * (1 - frequencyData.discount);
    
    // Add selected add-ons
    const addonTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    price += addonTotal;
    
    setEstimatedPrice(Math.round(price));
  };

  const getPriceRange = () => {
    const basePrice = estimatedPrice;
    const lowEnd = Math.round(basePrice * 0.95);
    const highEnd = Math.round(basePrice * 1.05);
    return { lowEnd, highEnd };
  };

  const { lowEnd, highEnd } = getPriceRange();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calculator className="w-8 h-8 text-teal-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Pricing Calculator
              </h2>
            </div>
            <p className="text-xl text-slate-600">
              Get an instant estimate for your cleaning service
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Tell us about your space
                </h3>

                {/* Room Counts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 text-slate-700 font-medium">
                      <Users className="w-5 h-5 text-teal-primary" />
                      <span>Bedrooms</span>
                    </label>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    >
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 text-slate-700 font-medium">
                      <Home className="w-5 h-5 text-teal-primary" />
                      <span>Bathrooms</span>
                    </label>
                    <select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    >
                      <option value="1">1 Bathroom</option>
                      <option value="2">2 Bathrooms</option>
                      <option value="3">3 Bathrooms</option>
                      <option value="4">4+ Bathrooms</option>
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-3">
                  <label className="text-slate-700 font-medium">Service Type</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                  >
                    <option value="regular">Regular Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move-out">Move-In/Move-Out</option>
                    <option value="commercial">Commercial Cleaning</option>
                  </select>
                  <p className="text-sm text-slate-500">
                    {serviceTypes[serviceType]?.description}
                  </p>
                </div>

                {/* Frequency */}
                <div className="space-y-3">
                  <label className="text-slate-700 font-medium">Cleaning Frequency</label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                  >
                    {Object.entries(frequencyDiscounts).map(([key, data]) => (
                      <option key={key} value={key}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add-ons Section */}
                <div className="space-y-3">
                  <label className="text-slate-700 font-medium">Add-On Services (Optional)</label>
                  <div className="bg-slate-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <div className="grid md:grid-cols-1 gap-3">
                      {addons.map((addon) => (
                        <label key={addon.id} className="flex items-center space-x-3 cursor-pointer hover:bg-white rounded p-2 transition-colors">
                          <input
                            type="checkbox"
                            checked={selectedAddons.includes(addon.id)}
                            onChange={() => handleAddonToggle(addon.id)}
                            className="w-4 h-4 text-teal-primary border-slate-300 rounded focus:ring-teal-primary focus:ring-2"
                          />
                          <div className="flex-1 flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-700">{addon.name}</span>
                            <span className="text-sm text-teal-primary font-semibold">+${addon.price}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  {selectedAddons.length > 0 && (
                    <p className="text-sm text-slate-600">
                      {selectedAddons.length} add-on{selectedAddons.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>
              </div>

              {/* Price Display */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-teal-primary to-slate-navy text-white rounded-2xl p-8 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Estimated Price</h3>
                  
                  {estimatedPrice > 0 ? (
                    <>
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        ${estimatedPrice}
                      </div>
                      <p className="text-teal-100 mb-6">
                        Based on your specifications
                      </p>
                      
                      {frequency !== 'one-time' && (
                        <div className="bg-white/10 rounded-lg p-4 mb-6">
                          <p className="text-sm">
                            You're saving {Math.round(frequencyDiscounts[frequency].discount * 100)}% 
                            with {frequencyDiscounts[frequency].label.toLowerCase()}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-4xl md:text-5xl font-bold mb-2 opacity-50">
                        $--
                      </div>
                      <p className="text-teal-100 mb-6">
                        Select bedrooms to see estimate
                      </p>
                    </>
                  )}

                  <button 
                    onClick={() => window.location.href = '/book'}
                    className="w-full bg-white text-teal-primary px-8 py-4 rounded-lg font-semibold hover:bg-teal-primary/10 transition-all transform hover:scale-105 shadow-lg"
                    disabled={estimatedPrice === 0}
                  >
                    Book This Service
                  </button>
                </div>

                {/* Price Breakdown */}
                {estimatedPrice > 0 && (
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                      <Info className="w-5 h-5 text-teal-primary" />
                      <span>What's Included</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• All cleaning supplies and equipment</li>
                      <li>• Professional, insured cleaning team</li>
                      <li>• {parseInt(bedrooms)} bedroom(s) and {parseInt(bathrooms)} bathroom(s)</li>
                      <li>• Kitchen, living areas, and common spaces</li>
                      <li>• {serviceTypes[serviceType]?.description.toLowerCase()}</li>
                      {selectedAddons.length > 0 && (
                        <li>• {selectedAddons.length} add-on service{selectedAddons.length > 1 ? 's' : ''} selected</li>
                      )}
                      {frequency !== 'one-time' && (
                        <li>• Recurring service discount applied</li>
                      )}
                    </ul>
                    
                    {selectedAddons.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <h5 className="font-medium text-slate-800 mb-2">Selected Add-ons:</h5>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {selectedAddons.map(addonId => {
                            const addon = addons.find(a => a.id === addonId);
                            return addon ? (
                              <li key={addonId}>• {addon.name} (+${addon.price})</li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Disclaimer */}
                <div className="text-center">
                  <p className="text-sm text-slate-500">
                    * Prices are estimates. Final pricing may vary based on home condition, 
                    special requests, and accessibility. All estimates include a free consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-teal-primary" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Instant Estimates</h3>
              <p className="text-slate-600 text-sm">Get pricing in real-time as you adjust your requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-teal-primary" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">No Hidden Fees</h3>
              <p className="text-slate-600 text-sm">Transparent pricing with all costs included upfront</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-teal-primary/10 rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-teal-primary" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Free Consultation</h3>
              <p className="text-slate-600 text-sm">Every estimate includes a complimentary in-home consultation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;