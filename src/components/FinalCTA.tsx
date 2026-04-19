import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-brand-dark font-extrabold text-5xl md:text-6xl mb-6">
          Ready to Dominate Your Market?
        </h2>
        <p className="text-gray-600 text-xl mb-10">
          Stop losing clients to your competitors. Let's build a predictable growth engine for your business.
        </p>
        <button className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-colors duration-300 shadow-xl shadow-brand-purple/20 group">
          Book Your Free Growth Audit
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
