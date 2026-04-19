"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What services does Akhirah Lab provide?",
    answer: "Akhirah Lab is a full-stack digital marketing agency offering SEO, Local SEO, Google Ads, Meta Ads, Email Marketing, Web Design & Development, WordPress Customization, Branding, and AI Automation. We don't just deliver services — we build complete lead generation systems that bring consistent, measurable results to your business."
  },
  {
    question: "Can you guarantee SEO rankings?",
    answer: "No ethical agency can guarantee specific rankings — Google's algorithm is constantly evolving and no one controls it. What we do guarantee is a proven, white-hat SEO strategy focused on long-term growth. Check out our Dutch Flow Academy case study to see real numbers from a real client."
  },
  {
    question: "How will I track my campaign progress?",
    answer: "You'll receive detailed weekly and monthly performance reports. You'll also have direct access to Google Analytics, Search Console, and your ad dashboards at all times. We believe in full transparency — nothing is hidden."
  },
  {
    question: "How do I get started with Akhirah Lab?",
    answer: "Just three simple steps: book a free 30-minute strategy call, we'll analyse your business and build a custom plan, and once you're happy, we get to work. No upfront commitment, no pressure."
  },
  {
    question: "What does your pricing look like? Is there a long-term contract?",
    answer: "Our plans start from $550/month. There are no long-term lock-in contracts — you can cancel anytime. We offer both project-based and monthly retainer options. Book a free strategy call to get a pricing plan tailored to your business."
  },
  {
    question: "Is marketing alone enough to grow my business?",
    answer: "Marketing brings the leads — but converting them takes a strong website, a compelling offer, and a solid follow-up system. That's why we build complete growth funnels, not just run ads. We make sure every visitor has the best possible chance of becoming a paying client."
  },
  {
    question: "Do you only work with businesses in Bangladesh?",
    answer: "Not at all. We work with businesses across Australia, the United Kingdom, the USA, Europe, and the Middle East. While our team is headquartered in Bangladesh, we operate to international standards and provide full communication support across all time zones."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "It depends on the service. With Google Ads and Meta Ads, you can start seeing leads within 7 to 14 days. SEO typically takes 3 to 6 months to show sustainable results. We always set realistic expectations from day one and back everything with data."
  },
  {
    question: "Do I need an existing website to get started?",
    answer: "No. Whether you need a brand new website or want to improve an existing one, we handle both. Many of our clients come to us for web design and digital marketing together — and we make it seamless."
  },
  {
    question: "Where is your team based?",
    answer: "Our main office is in Sylhet, Bangladesh. We work fully remotely with clients in Australia, the UK, the USA, and beyond — using video calls, and email. Time zone differences are never a barrier to great work."
  },
  {
    question: "What does data-driven marketing actually mean?",
    answer: "Data-driven marketing means every decision is backed by real numbers — not guesswork. We use Google Analytics, ad performance data, heatmaps, and conversion tracking to monitor every campaign and continuously refine your strategy so every dollar you spend works harder."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Absolutely. Many of our clients are small businesses and startups. We build custom strategies that fit your budget while maximizing ROI. Whether you're just starting out or looking to scale, our data-driven approach delivers results at every stage."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-violet-50">
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-brand-dark font-bold text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Everything you need to know about partnering with Akhirah Lab.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl border border-brand-purple/10 overflow-hidden transition-all duration-300 shadow-sm"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-6 text-left flex justify-between items-center cursor-pointer focus:outline-none"
            >
              <span className="text-lg font-bold text-brand-dark pr-4">
                {faq.question}
              </span>
              <ChevronDown 
                className={`text-brand-purple shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
