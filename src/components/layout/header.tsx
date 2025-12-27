"use client";

import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#", label: "Solutions" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">

        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">AAPrice Robotic</span>
        </Link>

        {/* Global Hamburger Area */}
        <div className="flex items-center space-x-4">
        <Button className="hidden md:inline-flex">Contact Sales</Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            {/* REMOVED 'md:hidden' so it stays visible on desktop */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="focus-visible:ring-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-10">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl font-semibold transition-colors hover:text-primary border-b pb-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                  <Button className="w-full">Get a Quote</Button>
                {/* Extra CTA inside the menu for desktop users */}
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}