export function MidPageCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 my-12">
      <div className="bg-brand-dark rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-40 w-96 h-96 bg-brand-purple opacity-20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-2">
            Ready to scale your lead generation?
          </h3>
          <p className="text-gray-300 text-lg">
            Stop guessing. Start growing with data-driven marketing.
          </p>
        </div>
        
        <button className="bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-colors duration-300 shrink-0 relative z-10">
          Book Your Free Strategy Call
        </button>
      </div>
    </section>
  );
}
