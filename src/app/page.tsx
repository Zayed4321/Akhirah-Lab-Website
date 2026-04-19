import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustMetrics } from '@/components/TrustMetrics';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { MidPageCTA } from '@/components/MidPageCTA';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { GrowthCalculator } from '@/components/GrowthCalculator';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustMetrics />
        <PainPoints />
        <Services />
        <Process />
        <MidPageCTA />
        <CaseStudies />
        <Testimonials />
        <GrowthCalculator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
