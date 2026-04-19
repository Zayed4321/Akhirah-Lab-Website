"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function GrowthCalculator() {
  const [traffic, setTraffic] = useState(5000);
  const [avgValue, setAvgValue] = useState(500);
  const [conversionRate, setConversionRate] = useState(1.5);

  const currentLeads = Math.floor(traffic * (conversionRate / 100));
  const optimizedRate = conversionRate * 2.5;
  const optimizedLeads = Math.floor(traffic * (optimizedRate / 100));
  
  const currentRevenue = currentLeads * avgValue;
  const optimizedRevenue = optimizedLeads * avgValue;
  const additionalRevenue = optimizedRevenue - currentRevenue;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-brand-dark font-bold text-4xl md:text-5xl">
          See How Much Revenue You're Leaving on the Table
        </h2>
        <p className="text-gray-500 text-lg mt-4">
          Play with the numbers below to see what happens when we optimize your traffic and conversion rates.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-purple/5 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-brand-dark font-bold">Monthly Website Traffic</label>
              <span className="text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full">
                {traffic.toLocaleString()}
              </span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="50000" 
              step="500"
              value={traffic} 
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-2 bg-violet-50 rounded-lg appearance-none cursor-pointer accent-brand-purple"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-brand-dark font-bold">Average Client/Order Value ($)</label>
              <span className="text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full">
                {formatCurrency(avgValue)}
              </span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="5000" 
              step="50"
              value={avgValue} 
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="w-full h-2 bg-violet-50 rounded-lg appearance-none cursor-pointer accent-brand-purple"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-brand-dark font-bold">Current Conversion Rate (%)</label>
              <span className="text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full">
                {conversionRate.toFixed(1)}%
              </span>
            </div>
            <input 
              type="range" 
              min="0.5" 
              max="10" 
              step="0.1"
              value={conversionRate} 
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-violet-50 rounded-lg appearance-none cursor-pointer accent-brand-purple"
            />
          </div>

          <div className="mt-4 p-6 bg-violet-50/50 rounded-2xl border border-brand-purple/10 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Current Monthly Leads</p>
              <p className="text-2xl font-bold text-gray-400">{currentLeads}</p>
            </div>
            
            <ArrowRight className="text-brand-purple w-6 h-6 shrink-0" />
            
            <div className="text-right">
              <p className="text-sm text-brand-purple font-medium">Optimized Leads</p>
              <p className="text-3xl font-extrabold text-brand-dark">{optimizedLeads}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-violet-50 rounded-2xl p-8 flex flex-col justify-center border border-brand-purple/10">
          <p className="text-brand-dark font-bold mb-2">Your Projected Monthly Growth</p>
          <div className="text-5xl font-extrabold text-brand-purple my-4">
            +{formatCurrency(additionalRevenue)}
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-gray-500 line-through">
              Current Revenue: {formatCurrency(currentRevenue)}
            </p>
            <p className="text-brand-dark font-bold">
              Optimized Revenue: {formatCurrency(optimizedRevenue)}
            </p>
          </div>

          <button className="mt-8 w-full bg-brand-purple text-white py-4 rounded-full font-bold hover:bg-brand-dark transition-colors duration-300">
            Claim This Revenue – Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
