import { products } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Cog, ChevronRight } from "lucide-react";
import InquiryForm from "@/components/inquiryForm";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) notFound();

  const highlights = [
    { title: "Precision", desc: "High-performance 3D printing", icon: <Zap className="w-5 h-5" /> },
    { title: "Reliability", desc: "Industrial-scale durability", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Speed", desc: "Rapid prototyping capabilities", icon: <ArrowRight className="w-5 h-5" /> },
    { title: "Integration", desc: "Seamless workflow API", icon: <Cog className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 font-sans antialiased">
      {/* PROFESSIONAL BREADCRUMBS */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-2 text-sm font-medium text-slate-400">
        <span className="hover:text-slate-900 cursor-pointer transition-colors">Solutions</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: HERO VISUAL (With Entrance Animation) */}
          <div className="lg:col-span-7 sticky top-12 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl transition-all duration-500 hover:shadow-blue-200/50">
              <Image
                src={product.image.imageUrl}
                alt={product.image.description}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* RIGHT: CONTENT (Staggered Animation) */}
          <div className="lg:col-span-5 flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            <header className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Industrial Series
              </div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl leading-relaxed text-slate-600 font-light border-l-2 border-slate-200 pl-6 italic">
                {product.description}
              </p>
            </header>

            {/* FEATURE GRID */}
            <section className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-slate-400 group-hover:text-blue-600 transition-colors mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{item.title}</h4>
                  <p className="text-xs leading-snug text-slate-500 mt-1.5">{item.desc}</p>
                </div>
              ))}
            </section>

            {/* ACTION SECTION */}
            {/* <div className="space-y-4">
              <button className="relative w-full overflow-hidden bg-slate-900 text-white h-16 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]">
                Schedule Technical Deep-Dive
                <ArrowRight className="w-5 h-5" />
              </button>
          
            </div> */}
          </div>
        </div>

        {/* TECHNICAL DETAILS SECTION */}
        {/* <section className="mt-32 pt-16 border-t border-slate-200 animate-in fade-in duration-1000 delay-500 fill-mode-both">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Advanced Systems Engineering</h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                The {product.name} architecture is designed for deterministic performance in mission-critical manufacturing workflows.
              </p>
            </div>
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12">
              <ul className="grid sm:grid-cols-2 gap-8">
                {[
                  "Military-grade structural integrity",
                  "Headless API-first management layer",
                  "Sub-millisecond sensor feedback loops",
                  "Native cloud-sync telemetry"
                ].map((spec, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}
      </main>

      <InquiryForm/>
    </div>
  );
}