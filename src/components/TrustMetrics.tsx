"use client";

import { useEffect, useState, useRef } from 'react';
import { Users, Globe, DollarSign } from 'lucide-react';
import Image from 'next/image';

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ target, prefix = "", suffix = "", duration = 2000, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease out cubic function for smoother ending
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return (
    <>{prefix}{count}{suffix}</>
  );
}

export function TrustMetrics() {
  const logos = [
    { src: "/Al-Rushd-School.png", alt: "Al-Rushd School", width: 140, height: 45 },
    { src: "/Al-Rushed.png", alt: "Al-Rushd Academy", width: 120, height: 40 },
    { src: "/dutch_flow.png", alt: "Dutch Flow Academy", width: 150, height: 50 },
    { src: "/Speach.png", alt: "Speechactors", width: 160, height: 35 },
    { src: "/Ummah-hands.png", alt: "Ummah Hands", width: 140, height: 40 },
    { src: "/outbox_logo.png", alt: "Outbox", width: 130, height: 35 }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 pb-20">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto bg-white rounded-3xl p-16 mt-12 border-0 shadow-none"
      >

        {/* Top Section: The Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mx-auto mb-4">
              <Users size={40} />
            </div>
            <h2 className="text-6xl font-extrabold text-brand-dark mb-2">
              <Counter target={20} suffix="+" trigger={isVisible} />
            </h2>
            <p className="text-xl text-brand-dark/70 font-medium">Clients Served</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mx-auto mb-4">
              <Globe size={40} />
            </div>
            <h2 className="text-6xl font-extrabold text-brand-dark mb-2">
              <Counter target={7} suffix="+" trigger={isVisible} />
            </h2>
            <p className="text-xl text-brand-dark/70 font-medium">Countries</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mx-auto mb-4">
              <DollarSign size={40} />
            </div>
            <h2 className="text-6xl font-extrabold text-brand-dark mb-2">
              <Counter target={20} prefix="$" suffix="M+" trigger={isVisible} />
            </h2>
            <p className="text-xl text-brand-dark/70 font-medium">Revenue Generated for Clients</p>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-gray-100 my-16" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-base text-gray-500 mb-12">
            Trusted by Businesses in Netherlands, India, Australia, UK, USA, the Middle East & Beyond
          </p>

          {/* Logos Row */}
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl md:rounded-full py-12 mt-8 bg-white overflow-hidden relative">
            <div
              className="flex w-max hover:[animation-play-state:paused]"
              style={{ animation: 'infinite-scroll 30s linear infinite' }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer mx-8 md:mx-12"
                />
              ))}
            </div>
            <style>{`
              @keyframes infinite-scroll { 
                from { transform: translateX(0); } 
                to { transform: translateX(-50%); } 
              }
            `}</style>
          </div>
        </div>

      </div>
    </section>
  );
}
