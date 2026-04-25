import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-violet-50 pt-20 pb-10 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Image
            src="/Main_Logo.png"
            alt="Akhirah Lab"
            width={180}
            height={40}
            className="mb-6 h-auto w-auto"
          />
          <p className="text-gray-600 mb-6">
            We build complete digital systems that attract, convert, and retain your ideal clients.
          </p>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-brand-purple hover:text-brand-dark cursor-pointer transition-colors duration-300">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {/* Twitter / X */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-brand-purple hover:text-brand-dark cursor-pointer transition-colors duration-300">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            {/* Instagram */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-brand-purple hover:text-brand-dark cursor-pointer transition-colors duration-300">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6">Services</h4>
          <div className="flex flex-col">
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">SEO & GEO</span>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Google & Meta Ads</span>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Web Design</span>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Branding</span>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">UI/UX Design</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6">Company</h4>
          <div className="flex flex-col">
            <Link href="/about" className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">About Us</Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Case Studies</Link>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Careers</span>
            <span className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Blog</span>
            <Link href="/contact" className="text-gray-600 hover:text-brand-purple transition-colors cursor-pointer mb-3 block">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6">Contact Us</h4>
          <div className="flex flex-col">
            <span className="text-gray-600 mb-3 block">hello@akhirahlab.com</span>
            <span className="text-gray-600 mb-3 block">Dhaka, Bangladesh</span>
            <span className="text-gray-600 mb-3 block">+880 123 456 789</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-brand-purple/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 Akhirah Lab. All rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="text-gray-500 text-sm hover:text-brand-purple cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-gray-500 text-sm hover:text-brand-purple cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
