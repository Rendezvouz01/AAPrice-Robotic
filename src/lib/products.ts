import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
}

const findImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback for client-side rendering where images might not be available immediately
        return {
          id: 'fallback',
          description: 'Loading image',
          imageUrl: `https://picsum.photos/seed/${id}/600/400`,
          imageHint: 'placeholder',
        };
    }
    return img;
}

export const products: Product[] = [
  {
    id: 'linear-robots',
    name: 'Linear Robots',
    description: 'Sophisticated linear robotics built for extreme precision and adaptable integration in the printing and production sectors.',
    image: findImage('linear-robots'),
  },
  {
    id: '3d-printing',
    name: '3D Printing Machines',
    description: 'High-performance 3D printing machines optimized for industrial-scale reliability and rapid prototyping.',
    image: findImage('3d-printing'),
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Expand your capabilities with a wide range of accessories including end-effectors, grippers, and vision systems for seamless integration.',
    image: findImage('accessories'),
  },
];
