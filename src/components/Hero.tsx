import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-violet-50 w-full pt-40 pb-32 relative text-center px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
      <div className="inline-flex items-center bg-brand-purple/10 text-brand-purple px-4 py-1 rounded-full text-sm font-medium mb-6">
        Available for new projects
      </div>

      {/* Heading */}
      <h1 className="text-brand-dark font-bold text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
        Grow Your Business With Data-Driven <span className="text-brand-purple">Marketing</span> That Actually Brings Leads & Sales.
      </h1>

      {/* Subheading */}
      <p className="text-brand-dark/70 text-lg max-w-2xl mx-auto mt-6">
        We help businesses across Australia, UK, USA, Europe & the Middle East generate consistent leads through SEO, Paid Ads, Website Design & Development.
      </p>

      {/* CTA Area */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-brand-purple text-white px-6 py-3 rounded-md hover:bg-brand-purple/90 font-medium flex items-center gap-2 transition-colors">
          Book Free 30-Min Call <ArrowRight className="w-4 h-4" />
        </button>
        <button className="border border-brand-purple text-brand-purple px-6 py-3 rounded-md hover:bg-brand-purple/5 font-medium flex items-center gap-2 transition-colors">
          Download Free Checklist <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Email Capture */}
      <div className="mt-16 flex justify-center max-w-md mx-auto">
        <div className="flex w-full overflow-hidden rounded-md border border-gray-200 focus-within:border-brand-purple transition-colors">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full px-4 py-3 outline-none text-brand-dark placeholder:text-gray-400"
          />
          <button className="bg-brand-dark text-white px-5 hover:bg-black transition-colors flex items-center justify-center" aria-label="Submit email">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
