import Link from 'next/link';
import { ArrowRight, Search, TrendingUp, MonitorPlay, Sparkles, SendToBack, Layers3 } from 'lucide-react';

const servicesData = [
  {
    icon: MonitorPlay,
    title: "Web Design & Development",
    text: "Create high-converting websites that don't just look great — they're built to turn visitors into leads.",
    className: "md:col-start-1 md:row-start-1 md:row-span-2",
    link: "/services/web-design",
    isTall: true,
    outcomes: [
      "Custom Next.js & React",
      "WordPress & Elementor",
      "High-Performance Landing Pages",
      "Seamless Domain Migrations"
    ]
  },
  {
    icon: Search,
    title: "SEO, GEO, AEO",
    text: "Rank higher on Google, AI and attract clients who are actively searching for your services.",
    className: "md:col-start-2 md:row-start-1",
    link: "/services/seo"
  },
  {
    icon: Layers3,
    title: "UI/UX Design",
    text: "Design intuitive user experiences that keep visitors engaged and reduce bounce rates.",
    className: "md:col-start-2 md:row-start-2",
    link: "/services/ui-ux"
  },
  {
    icon: Sparkles,
    title: "Branding",
    text: "Build a brand that stands out, earns trust instantly, and makes your business the obvious choice.",
    className: "md:col-start-1 md:row-start-3",
    link: "/services/branding"
  },
  {
    icon: SendToBack,
    title: "Email Marketing & Automation",
    text: "Nurture leads and stay top-of-mind with automated sequences that convert prospects.",
    className: "md:col-start-1 md:row-start-4",
    link: "/services/email-marketing"
  },
  {
    icon: TrendingUp,
    title: "Google & Meta Ads",
    text: "Get in front of your ideal audience instantly. We manage data-driven ad campaigns that maximize ROI.",
    className: "md:col-start-2 md:row-start-3 md:row-span-2",
    link: "/services/paid-ads",
    isTall: true,
    outcomes: [
      "Search Intent Targeting",
      "High-Converting Funnels",
      "Ad Creative & Copywriting",
      "Comprehensive ROAS Tracking"
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-violet-50">
      <div className="max-w-4xl mx-auto text-center mb-20 px-6">
        <h2 className="text-brand-dark font-bold text-4xl md:text-5xl">
          Our Services — Everything You Need to <span className="text-brand-purple">Grow Online</span>
        </h2>
        <p className="text-gray-600 text-lg mt-6">
          We don't just run campaigns — we build complete systems that attract, convert, and retain your ideal clients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 md:auto-rows-[300px] gap-8 md:gap-10">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link 
              key={index}
              href={service.link}
              className={`cursor-pointer group bg-white border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-300 relative ${service.className}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6">
                <Icon className="w-8 h-8" />
              </div>
              
              <h3 className={`${service.isTall ? 'text-3xl mb-4' : 'text-2xl mb-3'} font-bold text-brand-dark`}>
                {service.title}
              </h3>
              
              <p className={`${service.isTall ? 'text-lg' : 'text-base flex-grow'} text-gray-600`}>
                {service.text}
              </p>

              {service.isTall && (
                <div className="flex-grow flex flex-col">
                  <div className="border-t border-gray-100 my-6"></div>
                  <h4 className="font-bold text-brand-dark mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.outcomes?.map((outcome, i) => (
                      <li key={i} className="text-gray-600/80 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-auto pt-8">
                <span className="w-max inline-flex items-center gap-2.5 bg-brand-purple/10 text-brand-purple px-6 py-3 rounded-full font-semibold group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                  View Details
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
