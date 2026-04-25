import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-violet-50">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="pt-40 pb-24 bg-violet-50 text-center relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            We Don't Just Build Websites. We Build <span className="text-brand-purple">Predictable Growth Engines.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto">
            Akhirah Lab is a full-stack digital marketing and web strategy agency based in Bangladesh, serving ambitious brands worldwide.
          </p>
        </div>
      </section>

      {/* Section 2: Our Story (The Philosophy) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6">
              Driven by Data, Focused on Revenue.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Most agencies focus on vanity metrics—likes, clicks, and impressions. We realized early on that businesses don't need more clicks; they need more clients. We founded Akhirah Lab to bridge the gap between beautiful design and hard-hitting SEO/marketing strategies, ensuring every visitor has the highest possible chance of converting.
            </p>
          </div>
          <div className="w-full aspect-square md:aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl shadow-brand-purple/10">
            <Image src="/akhirah_lab_cover.png" alt="Akhirah Lab Cover" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* NEW Section 2.5: Expertise & Impact */}
      <section className="py-20 bg-brand-purple text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">Scaling Schools, Clinics, & Service Businesses</h2>
          <p className="text-white/80 text-lg mb-16 text-center max-w-3xl mx-auto">
            We build tailored systems that drive high-intent admissions, bookings, and sales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <div className="text-5xl font-extrabold mb-2">+240%</div>
              <div className="text-white/80 font-medium">Student Admissions</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">3x</div>
              <div className="text-white/80 font-medium">Patient Bookings</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">$2M+</div>
              <div className="text-white/80 font-medium">Client Revenue Generated</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white text-brand-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-colors duration-300 group">
              View Our Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: The Founders (Leadership) */}
      <section className="py-24 bg-brand-dark relative">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Meet the Founders</h2>
          <p className="text-gray-300 text-lg">The strategy and technical execution behind your next big win.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Founder Card 1 (Zayed) */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
            <Image
              src="/zayed.jpg"
              alt="Zayed Bin Alam"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full mb-6 border-2 border-brand-purple object-cover aspect-square shrink-0"
            />
            <h3 className="text-2xl font-bold text-white">Zayed Bin Alam</h3>
            <span className="text-brand-purple font-medium mb-4 block">Co-Founder & Lead Web Strategy</span>
            <p className="text-gray-300 leading-relaxed">
              Specializing in high-converting WordPress and React development. Zayed architects the digital experiences that breathe life into health, wellness, and service-based brands, ensuring intuitive UX and seamless technical performance.
            </p>
            <a href="https://www.linkedin.com/in/zayed-bin-alam-777123270/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-brand-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> Connect with Zayed
            </a>
          </div>

          {/* Founder Card 2 (Jalal) */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
            <Image
              src="/jalal.jpg"
              alt="K M Jalal Uddin"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full mb-6 border-2 border-brand-purple object-cover aspect-square shrink-0"
            />
            <h3 className="text-2xl font-bold text-white">K M Jalal Uddin</h3>
            <span className="text-brand-purple font-medium mb-4 block">Co-Founder & Head of SEO/Growth</span>
            <p className="text-gray-300 leading-relaxed">
              An expert in AI-driven SEO and multi-channel marketing. Jalal focuses on mapping the customer journey, restructuring ad funnels, and driving high-intent organic traffic that fills pipelines for startups and educational institutions.
            </p>
            <a href="https://www.linkedin.com/in/jalalgrowth/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-brand-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> Connect with Jalal
            </a>
          </div>

        </div>
      </section>

      {/* Section 4: Core Values (What Sets Us Apart) */}
      <section className="py-24 bg-white">
        <h2 className="text-center text-4xl font-bold text-brand-dark mb-16">Our Core Principles</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 bg-violet-50 rounded-3xl border border-brand-purple/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-purple mb-6">
              <Target />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Revenue First</h3>
            <p className="text-gray-600">
              We track leads and ROAS, not just traffic. If a campaign isn't making you money, we fix it.
            </p>
          </div>

          <div className="p-8 bg-violet-50 rounded-3xl border border-brand-purple/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-purple mb-6">
              <TrendingUp />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Data-Driven Decisions</h3>
            <p className="text-gray-600">
              No guesswork. Every UX tweak and ad adjustment is backed by analytics and heatmaps.
            </p>
          </div>

          <div className="p-8 bg-violet-50 rounded-3xl border border-brand-purple/10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-purple mb-6">
              <Users />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">True Partnership</h3>
            <p className="text-gray-600">
              We operate as an extension of your team, providing complete transparency and monthly reporting.
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: Bottom CTA */}
      <section className="py-24 bg-brand-purple text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to scale your business?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-brand-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl group"
        >
          Let's Talk Strategy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
