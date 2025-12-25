import { Cpu, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">
                AAPrice Robotic Engineering
              </span>
            </Link>
            <p className="text-muted-foreground">
              Pioneering automation for the modern industrial landscape.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 font-headline text-lg font-semibold">
                  Headquarters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Toronto, Canada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      St. Louis, Missouri
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-headline text-lg font-semibold">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#products"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#solutions"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} AAPrice Robotic Engineering LLC.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
