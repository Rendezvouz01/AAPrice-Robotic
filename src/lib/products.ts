export interface Product {
  id: string;
  name: string;
  description: string;
  image: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
}

export const products: Product[] = [
  {
    id: 'zmorph-vx-multitool-3d-printer',
    name: 'ZMorph VX Multitool 3D Printer',
    description: 'Advanced multi-axis fabrication system: Integrating high-resolution 3D printing, CNC, and laser engraving on a precision linear platform.',
    image: {
        description: 'Loading image',
        imageUrl: '/zmorph-vx-multitool-3d-printer.avif',
        imageHint: 'placeholder',
    },
  },
  {
    "id": "industrial-am-system",
    "name": "Industrial AM System",
    "description": "High-output additive manufacturing: Optimized for industrial reliability, rapid tooling, and high-precision functional prototyping.",
    "image": {
        "description": "Industrial 3D printer in operation.",
        "imageUrl": "/industrial-am-system.avif",
        "imageHint": "3d printer"
    }
  },
  {
    "id": "modular-robotic-accessories",
    "name": "Modular Robotic Accessories",
    "description": "Precision integration components: A comprehensive suite of end-effectors, grippers, and vision systems for seamless automation workflows.",
    "image": {
        "description": "A collection of precision robotic components and accessories on a workbench.",
        "imageUrl": "/modular-robotic-accessories.avif",
        "imageHint": "robotic components"
    }
  },
];