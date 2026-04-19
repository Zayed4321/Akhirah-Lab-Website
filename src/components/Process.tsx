const processData = [
  {
    step: 1,
    title: "Business & Market Analysis",
    text: "We dive deep into your business model, audit your current marketing, and identify the gaps where you're losing revenue."
  },
  {
    step: 2,
    title: "Strategy & Funnel Planning",
    text: "We build a custom roadmap detailing exactly which channels to use and how to guide your visitors from click to client."
  },
  {
    step: 3,
    title: "Execution & Optimization",
    text: "Our team launches the campaigns, monitors the data daily, and optimizes every touchpoint to improve conversion rates."
  },
  {
    step: 4,
    title: "Scaling & Growth",
    text: "Once we hit a profitable baseline, we systematically increase volume to scale your lead flow without breaking ROI."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20 px-6">
        <h2 className="text-brand-dark font-bold text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mt-6">
          A proven, data-driven methodology to scale your business predictably.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Mobile connecting line */}
        <div className="absolute left-[38px] top-0 bottom-0 w-0.5 bg-brand-purple/20 md:hidden"></div>
        {/* Desktop connecting line */}
        <div className="hidden md:block absolute top-[45px] left-10 right-10 h-0.5 bg-brand-purple/20"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
          {processData.map((item, index) => (
            <div key={index} className="relative flex flex-row md:flex-col gap-6 md:gap-0 items-start md:items-center">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-brand-purple text-brand-purple flex items-center justify-center font-bold text-xl mb-0 md:mb-6 shrink-0 z-10 shadow-[0_0_0_8px_white]">
                {item.step}
              </div>
              <div className="text-left md:text-center">
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
