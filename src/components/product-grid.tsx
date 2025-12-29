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
        <span className="font-semibold text-slate-900">AAPrice Robotics</span> stands at the intersection of sophisticated linear motion and high-performance additive manufacturing. While traditional systems focus on simple automation, AAPrice delivers high-performance 3D printing machines specifically optimized for the rigors of the industrial production sector. Our systems are engineered for extreme precision, adaptable integration, and a level of industrial-scale reliability that guarantees high-performance output with zero compromise on flexibility.
      </p>
    </div>
  </div>
</section>

      {/* SECTION 2: PRODUCT GRID */}
      <section id="products" className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Available Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Engineered for excellence, our robotic systems are designed to
              integrate seamlessly into your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      fill // Senior tip: Use 'fill' with aspect-video for cleaner responsive scaling
                      className="object-cover"
                      data-ai-hint={product.image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <CardTitle className="font-headline text-xl mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="flex-grow">
                    {product.description}
                  </CardDescription>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="link" className="self-start p-0 mt-4">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}