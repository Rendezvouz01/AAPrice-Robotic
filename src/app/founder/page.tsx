import Image from 'next/image';

const FounderPage = () => {
  return (
    <main className="bg-white text-slate-900 selection:bg-slate-100">
      {/* 1. Hero Title Section */}
      <section className="container mx-auto px-6 py-6 md:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-none mb-6">
            Aaron <span className="text-accent">Chris Price</span>
          </h1>
          <p className="text-xl font-semibold tracking-widest text-slate-500 uppercase">
            Visionary Engineer | Industrial Systems Innovator | Founder
          </p>
        </div>
      </section>

      {/* 2. The Visionary Grid (The "Star Automation" Look) */}
      <section className="container mx-auto px-6 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Summary Box with Accent Border */}
          <div className="bg-white p-8 flex flex-col justify-between border-t-4 border-accent shadow-sm">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-950 uppercase tracking-tight">The Visionary</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Aaron Chris Price, with over two decades of global experience, is the visionary force behind 
                the next era of intelligent infrastructure. From leading mission-critical installations at Suncor Energy 
                to founding his own firm in 2014, his commitment to precision and innovation defines our future.
              </p>
            </div>
            <button className="mt-8 bg-accent text-white text-xs font-bold py-3 px-8 uppercase tracking-widest hover:opacity-90 transition-all w-fit">
              See The Visionary
            </button>
          </div>

          {/* Asset Images: visionary 1, 2, 3 */}
          <div className="relative aspect-[3/4]">
            <Image src="/visionary-1.jpg" alt="Portrait 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/visionary-2.jpg" alt="Portrait 2" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/visionary-3.jpg" alt="Portrait 3" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Detailed Bio & Professional History */}
      <section className="container mx-auto px-6 py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-700 leading-loose">
              <p className="font-medium text-lg text-slate-900">
                Aaron Chris Price is a Canadian-born visionary innovator with over two decades of experience spanning electrical engineering, industrial systems, robotics, and intelligent automation.
              </p>
              <p>
                In 2003, Aaron served as Field Manager at **Suncor Energy**, where he led and supervised complex industrial electrical installations across North America and the Middle East. His work supported mission-critical energy infrastructure, requiring precision and cross-border operational intelligence.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-accent">
               <Image src="/visionary-4.jpg" alt="Visionary 4" fill className="object-cover" />
            </div>
          </div>

          {/* Academic & Consulting History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200">
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-accent text-sm">Academic Foundation</h4>
              <p className="text-slate-600">
                Aaron holds a **Bachelor’s Degree in Electrical Engineering from University of Toronto** and a **Master’s Degree in Robotics and Machine Learning from University at Albany**. His foundation bridges theory with real-world industrial impact.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-accent text-sm">Manufacturing Excellence</h4>
              <p className="text-slate-600">
                Since founding his firm in 2014, Aaron has maintained long-standing manufacturing partnerships in **China**, built over more than a decade—relationships grounded in trust, technical alignment, and production excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Image & Footer Note */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[500px] mb-12">
            <Image src="/visionary-5.jpg" alt="Visionary 5" fill className="object-contain rounded-sm" />
          </div>
          <div className="text-center space-y-4">
            <p className="text-slate-600 max-w-2xl mx-auto">
              Today, Aaron operates at the intersection of engineering, AI-driven systems, and industrial manufacturing, helping organizations design and deploy solutions for the next era of machines.
            </p>
            <p className="text-2xl font-black text-slate-950 uppercase tracking-tighter pt-4">
              Driven by precision. Built on experience. Focused on the future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FounderPage;