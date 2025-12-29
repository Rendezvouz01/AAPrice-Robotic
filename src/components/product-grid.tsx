import Image from "next/image";
import { products } from "@/lib/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";


export function ProductGrid() {
  return (
    <div className="bg-background"> {/* Parent Wrapper */}

      {/* SECTION 1: BRAND STORY */}
      <section className="py-16 sm:py-20 border-b bg-slate-50/50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              The Intersection of Precision and Production.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Architecting the future of industrial 3D printing through high-velocity linear robotics and large-scale additive systems. Our machines deliver micron-level layer precision and seamless workflow integration for high-volume manufacturing with zero compromise on part integrity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT GRID */}
      <section id="products" className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className=" text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase">
              Our Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Leveraging advanced linear motion and industrial-grade architecture, our 3D printing systems deliver high-performance automation designed for seamless workflow integration and extreme durability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
  {products.map((product, index) => (
    <Card
      key={product.id}
      className={cn(
        "group overflow-hidden border-slate-200 bg-white transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]",
        index === 0 ? "md:col-span-2" : ""
      )}
    >
      <div
        className={cn(
          "flex h-full",
          index === 0 ? "flex-col lg:flex-row" : "flex-col"
        )}
      >
        {/* IMAGE */}
        <div
          className={cn(
            "relative bg-gradient-to-br from-slate-50 to-slate-100/50 overflow-hidden",
            index === 0
              ? "w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[400px]"
              : "w-full aspect-[16/9]"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
          <Image
            src={product.image.imageUrl}
            alt={product.image.description}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            priority={index === 0}
          />
        </div>

        {/* CONTENT */}
        <CardContent
          className={cn(
            "flex flex-col justify-center",
            index === 0 ? "w-full lg:w-1/2 p-8 lg:p-12" : "p-6 lg:p-8"
          )}
        >
          <CardTitle
            className={cn(
              "mb-4 font-semibold text-slate-900 leading-tight",
              index === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
            )}
          >
            {product.name}
          </CardTitle>

          <CardDescription
            className={cn(
              "mb-6 leading-relaxed text-slate-600",
              index === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"
            )}
          >
            {product.description}
          </CardDescription>

          <Link href={`/products/${product.id}`} className="inline-flex">
            <Button
              variant="link"
              className="group/btn p-0 h-auto text-brand font-medium hover:no-underline"
            >
              <span className="relative">
                See the products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover/btn:w-full" />
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  ))}
</div>

        </div>
      </section>

    </div>
  );
}