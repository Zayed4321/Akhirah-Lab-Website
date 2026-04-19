import { MousePointerClick, MonitorX, LineChart, Mails } from 'lucide-react';

const painPointsData = [
  {
    icon: MousePointerClick,
    title: "Running ads but not getting sales",
    text: "You're spending money on Google or Meta Ads but the leads are cold, unqualified, or simply not converting."
  },
  {
    icon: MonitorX,
    title: "Website visitors are not converting",
    text: "Traffic is coming but people leave without taking action. Your website looks good but isn't built to convert visitors."
  },
  {
    icon: LineChart,
    title: "No proper tracking or analytics",
    text: "You don't know which channel is working, which ad is wasting money, or where visitors drop off. You're flying blind."
  },
  {
    icon: Mails,
    title: "No follow-up system",
    text: "Leads come in but nothing follows up. No automated emails, no CRM, no nurture sequence — potential clients forget you exist."
  }
];

export function PainPoints() {
  return (
    <section className="pt-0 pb-12 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <h2 className="text-brand-dark font-bold text-4xl md:text-5xl">
          Why Most Businesses Struggle to Get <span className="text-brand-purple">Consistent Leads</span>
        </h2>
        <p className="text-gray-600 text-lg mt-6">
          You're not alone — these are the 4 most common reasons businesses plateau, no matter how much they spend on marketing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {painPointsData.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/5"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6">
                <IconComponent size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
