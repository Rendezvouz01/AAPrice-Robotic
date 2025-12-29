"use client";

import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

export default function MachineInquiryForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");

  if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
    console.warn("Variable is missing. Check Netlify.");
  }

  if (state.succeeded) {
    return (
      <div className="max-w-3xl mx-auto p-12 text-center border border-green-100 bg-green-50/30">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
        <p className="mt-2 text-gray-600">
          Your inquiry has been received. A specialist from our engineering team
          will review your requirements and contact you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-none"
          onClick={() => window.location.reload()}
        >
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 md:p-12 bg-white border border-gray-100 shadow-sm">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          Would you like to get more information on our high-performance 3D printing machines?
        </h2>
        <p className="text-muted-foreground italic">
          Our team will be happy to help you find the most suitable solution for all your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              id="name"
              name="name" // Formspree uses the "name" attribute!
              required
              className="flex h-10 w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="flex h-10 w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="email@company.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <input
            id="company"
            name="company"
            required
            className="flex h-10 w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
            placeholder="Your organization"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="flex w-full border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
            placeholder="Tell us about your printing requirements..."
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={state.submitting}
            className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 min-w-[150px]"
          >
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}