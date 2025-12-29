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
        imageUrl: `https://images.unsplash.com/photo-1563520240344-52b067aa5f84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        imageHint: 'placeholder',
    },
  },
  {
    "id": "industrial-am-system",
    "name": "Industrial AM System",
    "description": "High-output additive manufacturing: Optimized for industrial reliability, rapid tooling, and high-precision functional prototyping.",
    "image": {
        "description": "Industrial 3D printer in operation.",
        "imageUrl": "https://images.unsplash.com/photo-1741848263568-f72a439f7033?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "imageHint": "3d printer"
    }
  },
  {
    "id": "modular-robotic-accessories",
    "name": "Modular Robotic Accessories",
    "description": "Precision integration components: A comprehensive suite of end-effectors, grippers, and vision systems for seamless automation workflows.",
    "image": {
        "description": "A collection of precision robotic components and accessories on a workbench.",
        "imageUrl": "https://images.unsplash.com/photo-1704283860614-803aa8be7993?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "imageHint": "robotic components"
    }
  },
];