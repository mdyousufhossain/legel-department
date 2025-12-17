import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle2, Quote } from "lucide-react";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  
  const reviews = [
    { text: "Sky Space Aviation provided the strategic foresight we needed during our merger. Absolutely indispensable.", author: "Omar T., CEO of TechNoBd" },
    { text: "Their litigation team is aggressive, precise, and incredibly effective. They saved our company millions.", author: "Ahmed L., Director at BioPharma" },
    { text: "Professionalism at its peak. They handled our IP portfolio with unmatched attention to detail.", author: "Robin K., Founder of Boishaki Inc." },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">Client Voices</h2>
                <div className="h-1 w-20 bg-amber-500" />
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
                <p className="text-slate-500 text-sm">Trusted by 500+ Enterprises</p>
            </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] min-w-0">
                <div className="bg-white p-8 md:p-10 border border-slate-200 h-full relative">
                  <Quote className="text-amber-100 absolute top-6 right-6 w-12 h-12" />
                  <div className="flex gap-1 text-amber-500 mb-6">
                      {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} fill="currentColor" className="text-amber-500" />)}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-6 leading-relaxed">&quot;{review.text} &quot;</p>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.author.split(',')[0]}</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{review.author.split(',')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;