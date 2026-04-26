"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Check, X, ArrowRight, Calendar } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      {/* Navbar & Hero Wrapper for flush alignment */}
      <div className="bg-violet-50 w-full">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Transparent Pricing. Predictable Growth.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Choose a comprehensive growth system, or let us build a custom package tailored to your exact budget and goals.
          </p>

          {/* The Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-brand-dark' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-brand-dark rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
              aria-label="Toggle billing period"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-brand-dark' : 'text-gray-500'}`}>
              Annually
              <span className="text-brand-purple text-sm ml-2 px-3 py-1 bg-brand-purple/10 rounded-full font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </section>
      </div>

      <main className="bg-white">
        {/* Pricing Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-20">

          {/* Tier 1 (Growth Starter) */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Growth Starter</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">Perfect for small businesses looking to establish their online presence.</p>
            <div className="text-4xl font-extrabold text-brand-dark mb-2">
              {isAnnual ? "$1,200" : "$1,500"} <span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">{isAnnual ? "Billed annually" : "Billed monthly"}</p>

            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Foundational SEO</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Basic Ad Management</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Monthly Reporting</li>
            </ul>

            <a href="#calendly" className="w-full py-4 text-center rounded-xl font-bold border-2 border-gray-200 text-brand-dark hover:border-brand-purple hover:text-brand-purple transition-colors">
              Book Strategy Call
            </a>
          </div>

          {/* Tier 2 (Pro Accelerator - HIGHLIGHTED) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-purple shadow-xl shadow-brand-purple/10 flex flex-col h-full relative md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap shadow-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Pro Accelerator</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">For ambitious brands ready to scale their lead generation.</p>
            <div className="text-4xl font-extrabold text-brand-dark mb-2">
              {isAnnual ? "$2,600" : "$3,250"} <span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">{isAnnual ? "Billed annually" : "Billed monthly"}</p>

            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Advanced SEO & Content</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Multi-Channel Ads</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Conversion Rate Optimization</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Custom Landing Pages</li>
            </ul>

            <a href="#calendly" className="w-full py-4 text-center rounded-xl font-bold bg-brand-purple text-white hover:bg-brand-dark transition-colors shadow-md">
              Book Strategy Call
            </a>
          </div>

          {/* Tier 3 (Enterprise Scale) */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Enterprise Scale</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">Comprehensive growth systems for large-scale operations.</p>
            <div className="text-4xl font-extrabold text-brand-dark mb-2">
              {isAnnual ? "$5,024" : "$6,280"} <span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">{isAnnual ? "Billed annually" : "Billed monthly"}</p>

            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Everything in Pro</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> AI Automation workflows</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Dedicated Account Manager</li>
              <li className="flex items-start gap-3 text-gray-600"><Check className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" /> Web System Redesign</li>
            </ul>

            <a href="#calendly" className="w-full py-4 text-center rounded-xl font-bold border-2 border-gray-200 text-brand-dark hover:border-brand-purple hover:text-brand-purple transition-colors">
              Book Strategy Call
            </a>
          </div>

        </section>

        {/* Reassurance Banner (CRITICAL FOR CONVERSION) */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto mt-12 bg-violet-50/50 border border-brand-purple/20 rounded-2xl p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-left md:text-lg">
              Not quite ready for a full package? Don&apos;t worry. We regularly build scaled-down, custom plans for startups and local businesses. Let&apos;s find what works for you.
            </p>
            <a href="/contact" className="bg-white text-brand-dark border border-gray-200 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shrink-0">
              Request Custom Quote
            </a>
          </div>
        </section>

        {/* Calendly Embed Section */}
        <section id="calendly" className="py-24 mt-20 bg-white border-t border-gray-100">
          <div className="px-6">
            <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">
              Skip the emails. Book your free audit directly.
            </h2>
            <div className="w-full max-w-6xl mx-auto pt-12 pb-24 px-4 md:px-8">
              <div className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex justify-center">
                <iframe
                  src="https://cal.com/zayed-alam-zayed-mbjwmb/30min?theme=light&ui.brandColor=%238b5cf6&embed=true"
                  style={{ width: "100%", height: "600px", border: "none" }}
                  title="Book a Strategy Call"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
