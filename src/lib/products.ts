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
    description: 'High-speed pick-and-place for printing presses and automated manufacturing lines.',
    image: findImage('linear-robots'),
  },
  {
    id: '3d-printing',
    name: '3D Printing Machines',
    description: 'Industrial-grade additive manufacturing for rapid prototyping and production parts.',
    image: findImage('3d-printing'),
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'A wide range of end-effectors, grippers, and vision systems to expand capabilities.',
    image: findImage('accessories'),
  },
];
