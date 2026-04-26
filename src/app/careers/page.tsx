import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight, Mail, Sparkles, Globe, Zap } from 'lucide-react';

const JOBS = [
  {
    title: "Senior SEO & Growth Strategist",
    location: "Remote",
    type: "Full-Time",
    desc: "Lead technical SEO, keyword strategy, and organic growth campaigns for international clients."
  },
  {
    title: "Frontend React/Next.js Developer",
    location: "Remote / Sylhet",
    type: "Full-Time",
    desc: "Build blazing-fast, high-converting frontend architectures using Next.js and Tailwind CSS."
  },
  {
    title: "Paid Media Specialist (Google/Meta)",
    location: "Remote",
    type: "Contract",
    desc: "Manage and scale high-budget ad accounts, optimizing for lead generation and ROAS."
  },
  {
    title: "UI/UX & Web Designer",
    location: "Remote",
    type: "Contract",
    desc: "Design intuitive, premium user experiences and conversion-focused landing pages."
  }
];

export default function CareersPage() {
  return (
    <main className="bg-violet-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-violet-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Join the Growth Engine
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are an ambitious, fast-moving agency building high-performance digital systems for global brands. And we are always looking for top-tier talent.
          </p>
        </div>
      </section>

      {/* Why Join Us (Culture Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Benefit 1 */}
          <div>
            <div className="w-14 h-14 bg-violet-50 text-brand-purple rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-brand-dark font-bold text-xl mb-3">Work From Anywhere</h3>
            <p className="text-gray-600">
              Whether you are in Sylhet, Dhaka, or across the globe, we are a remote-first team.
            </p>
          </div>

          {/* Benefit 2 */}
          <div>
            <div className="w-14 h-14 bg-violet-50 text-brand-purple rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-brand-dark font-bold text-xl mb-3">Work on Big Challenges</h3>
            <p className="text-gray-600">
              We don&apos;t build generic sites. We build high-converting systems for schools, clinics, and ambitious startups.
            </p>
          </div>

          {/* Benefit 3 */}
          <div>
            <div className="w-14 h-14 bg-violet-50 text-brand-purple rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-brand-dark font-bold text-xl mb-3">Fast-Track Growth</h3>
            <p className="text-gray-600">
              We move fast. You will learn, execute, and see the direct impact of your work on our clients&apos; revenue.
            </p>
          </div>

        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-violet-50/50">
        <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">
          Open Roles
        </h2>
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
          {JOBS.map((job, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-brand-purple/10 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-2xl font-bold text-brand-dark">{job.title}</h3>
              <div className="flex items-center gap-3 mt-3">
                <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  <MapPin size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  <Clock size={16} /> {job.type}
                </span>
              </div>
              <p className="text-gray-600 mt-4">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA (Application Instructions) */}
      <section className="py-24 bg-brand-dark text-center relative">
        <h2 className="text-4xl font-bold text-white mb-6">
          Don&apos;t see your perfect role?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          We are always hiring amazing people. If you think you belong at Akhirah Lab, send us your resume and portfolio.
        </p>
        <a 
          href="mailto:akhirahlab@gmail.com" 
          className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-dark transition-colors duration-300 group"
        >
          <Mail className="w-5 h-5" />
          Email Us Your Resume
        </a>
      </section>

      <Footer />
    </main>
  );
}
