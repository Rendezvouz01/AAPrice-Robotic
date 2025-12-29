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
    <section id="products" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Product Categories
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
                    width={600}
                    height={400}
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
  );
}
