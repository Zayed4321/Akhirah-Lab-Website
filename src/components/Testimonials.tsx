import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Sarah Jenkins",
    title: "Director, Kee To Wellness",
    quote: "The team completely transformed our digital presence. The new domain migration was seamless, and the custom design perfectly captures our brand. Highly recommend!"
  },
  {
    name: "Marcus T.",
    title: "Founder, Alpha Plaster & Paint",
    quote: "Our lead volume for local trade jobs exploded. They handled our entire multi-service website and Google Ads strategy, bringing in highly qualified calls from day one."
  },
  {
    name: "Dr. Evans",
    title: "Network Lead, Chiropractic Solutions",
    quote: "Building our specialized directory portal was a massive undertaking, but they mapped out the keyword strategy and UX flawlessly. It's been a game-changer for our clinics."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-purple/20 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-16 px-6 relative z-10">
        <h2 className="text-white font-bold text-4xl md:text-5xl">
          What Our Partners Say
        </h2>
        <p className="text-gray-300 text-lg mt-6">
          Don't just take our word for it. Here is what happens when businesses partner with Akhirah Lab.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-brand-purple text-brand-purple w-5 h-5" />
              ))}
            </div>
            
            <p className="text-white text-lg leading-relaxed my-6 flex-grow">
              &quot;{testimonial.quote}&quot;
            </p>
            
            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-xl shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
