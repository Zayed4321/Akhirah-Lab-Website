"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const caseStudiesData = [
  {
    title: "SEO for Dutch Flow Academy",
    imageSrc: "/school-project.jpg",
    metric: "+240% Organic Traffic",
    desc: "Dominating local search and filling student rosters.",
    link: "#"
  },
  {
    title: "Global Tutoring Platform",
    imageSrc: "/managment.png",
    metric: "3x Lead Volume",
    desc: "Restructuring Google Ads to drop CPA by 45%.",
    link: "#"
  },
  {
    title: "Mobile Learning App",
    imageSrc: "/app_design.png",
    metric: "12k App Installs",
    desc: "Multi-channel paid social strategy for mass adoption.",
    link: "#"
  },
  {
    title: "University UX Optimization",
    imageSrc: "/uiux2.png",
    metric: "+68% Enrollment",
    desc: "Redesigning the student portal to eliminate drop-offs.",
    link: "#"
  },
  {
    title: "E-Commerce Brand Scaling",
    imageSrc: "/managment.png",
    metric: "$2.4M Revenue",
    desc: "Automated email flows and advanced retention.",
    link: "#"
  },
  {
    title: "B2B SaaS Growth System",
    imageSrc: "/app_design.png",
    metric: "-40% Churn Rate",
    desc: "Revamping onboarding and LinkedIn outreach.",
    link: "#"
  }
];

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Real Results From <span className="text-brand-purple">Our Work</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            See how we help businesses generate more leads and scale faster.
          </p>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')} 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef} 
        className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {caseStudiesData.map((study, index) => (
          <div key={index} className="shrink-0 snap-start w-[85vw] sm:w-[400px] group">
            <Link href={study.link} className="block h-full">
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-violet-50 rounded-3xl mb-6 border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                <Image 
                  src={study.imageSrc} 
                  alt={study.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                  {study.metric}
                </span>
                <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-purple transition-colors">
                  {study.title}
                </h3>
                <p className="text-base text-gray-600 mb-6 line-clamp-2 min-h-[3rem] leading-relaxed">
                  {study.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-dark font-semibold group-hover:text-brand-purple transition-colors">
                  Read Case Study
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
