import InquiryForm from "@/components/inquiryForm";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative isolate bg-white font-sans antialiased overflow-hidden">
      {/* Sophisticated Background Mesh */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">

          {/* Left Column: Branding & Info */}
          <div className="flex flex-col justify-center">
         
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Let’s build the future together.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-md">
              Whether you have a question about features, pricing, or a specialized enterprise request, our team is ready to assist.
            </p>

            <div className="mt-12 space-y-10">
              <div className="mt-12 space-y-6">
                {/* Headquarters Card */}
                <div className="group relative flex gap-x-6 p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-200">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-slate-900">Headquarters</h3>
                    <p className="mt-2 text-slate-600">Indianapolis, IN, USA</p>
                    <a href="#" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                      {/* View on Maps <ArrowUpRight className="w-3 h-3" /> */}
                    </a>
                  </div>
                </div>

                {/* Branch Office Card - Separate from HQ */}
                <div className="group relative flex gap-x-6 p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-200">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-slate-900">Branch Office</h3>
                    <p className="mt-2 text-slate-600">Toronto, Canada</p>
                    <a href="#" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                      {/* View on Maps <ArrowUpRight className="w-3 h-3" /> */}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative flex gap-x-6 p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-slate-900">Direct Support</h3>
                  <p className="mt-2 text-slate-600">+1 (260) 557-1343</p>
                  {/* <p className="text-sm text-slate-400">Mon-Fri, 9am - 5pm EST</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form with Glassmorphism Effect */}
          <div className="relative">
         
              <InquiryForm />
          </div>

        </div>
      </main>
    </div>
  );
}