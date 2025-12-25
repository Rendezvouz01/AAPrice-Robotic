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
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="hidden font-bold font-headline sm:inline-block">
            AAPrice Robotic Engineering
          </span>
          <span className="font-bold font-headline sm:hidden">AAPrice</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b p-4">
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Cpu className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">AAPrice</span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsSheetOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button className="hidden md:flex" variant="outline">
            Request a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
