"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = {
      description: "High-tech robotic arm in a futuristic factory setting.",
      imageUrl: "/hero-background.jpg",
      imageHint: "robotic arm"
    };

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white md:h-[80vh]">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 text-left md:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          AAPrice Robotics
        </h1>
        <p className="max-w-3xl text-base text-slate-300 sm:text-lg md:text-xl">
          Sophisticated linear robotics and high-performance 3D printing machines specifically optimized for the printing and production sectors: built for extreme precision, adaptable integration, and industrial-scale reliability.
        </p>
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Button
            size="lg"
            className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
