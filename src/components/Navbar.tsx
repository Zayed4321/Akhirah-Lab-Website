import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Headset } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mt-4 mx-auto w-full max-w-7xl bg-violet-50 p-4 rounded-full shadow-lg">
      <div className="flex justify-between items-center px-4">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Main_Logo.png"
            alt="Akhirah Lab"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {['Service', 'About Us', 'Case Study', 'Blog', 'Career', 'Pricing', 'Contact'].map((item) => {
            let href = `#${item.toLowerCase().replace(' ', '-')}`;
            if (item === 'About Us') href = '/about';
            if (item === 'Contact') href = '/contact';
            
            return (
              <Link
                key={item}
                href={href}
                className="text-lg font-medium text-brand-dark hover:text-brand-purple transition-colors duration-300 flex items-center gap-1"
              >
                {item}
                {item === 'Case Study' && (
                  <ChevronDown className="w-4 h-4 text-brand-dark/50" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="bg-brand-dark text-white px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm font-semibold hover:bg-brand-purple hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a 30 Min Call
            <Headset className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
