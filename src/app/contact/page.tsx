import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-violet-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 text-center relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
          Let&apos;s Build Your Growth Engine
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-6">
          Ready to scale? Drop us a message and we&apos;ll get back to you within 24 hours to schedule your free strategy audit.
        </p>
      </section>

      {/* Main Content Grid (Contact Info & Form) */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side (Contact Details) */}
        <div className="flex flex-col justify-center gap-10">
          
          {/* Detail 1 */}
          <div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mt-4">hello@akhirahlab.com</h3>
            <p className="text-gray-600">Email us anytime.</p>
          </div>

          {/* Detail 2 */}
          <div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mt-4">+880 123 456 789</h3>
            <p className="text-gray-600">Mon-Fri from 9am to 6pm.</p>
          </div>

          {/* Detail 3 */}
          <div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mt-4">Sylhet & Dhaka, Bangladesh</h3>
            <p className="text-gray-600">Serving ambitious brands worldwide.</p>
          </div>

        </div>

        {/* Right Side (The Web3Forms Form) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-purple/5 border border-brand-purple/10">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="access_key" value="2022dbf4-69f1-4812-ab24-b56cdc74c664" />
            
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Full Name" 
              className="w-full bg-violet-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" 
            />
            
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Email Address" 
              className="w-full bg-violet-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" 
            />
            
            <input 
              type="text" 
              name="company" 
              placeholder="Website URL (Optional)" 
              className="w-full bg-violet-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" 
            />
            
            <textarea 
              name="message" 
              required 
              rows={5} 
              placeholder="Tell us about your project and goals..." 
              className="w-full bg-violet-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none" 
            />
            
            <button 
              type="submit" 
              className="w-full bg-brand-purple text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 group"
            >
              Send Message 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </main>
  );
}
