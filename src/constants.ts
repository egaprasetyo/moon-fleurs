export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
  description: string;
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Midnight Rose',
    price: '$85.00',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop',
    tag: 'Best Seller',
    description: 'A deep, mysterious arrangement of dark red roses and seasonal foliage.',
    details: ['12 Premium Red Roses', 'Eucalyptus Accents', 'Signature Black Wrap']
  },
  {
    id: 2,
    name: 'Ethereal Peony',
    price: '$120.00',
    image: 'https://images.unsplash.com/photo-1523694559144-4ec08b9e113c?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium',
    description: 'Soft, delicate peonies in shades of blush and cream, perfect for romantic gestures.',
    details: ['8 Large Peonies', 'White Waxflower', 'Silk Ribbon Finish']
  },
  {
    id: 3,
    name: 'Golden Sunburst',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop',
    tag: 'New',
    description: 'Bright and cheerful sunflowers paired with golden-hued accents.',
    details: ['5 Large Sunflowers', 'Solidago', 'Eco-friendly Kraft Wrap']
  },
  {
    id: 4,
    name: 'Lavender Dream',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop',
    tag: 'Limited',
    description: 'A calming mix of lavender, purple lisianthus, and silver-toned greenery.',
    details: ['Dried Lavender Sprigs', 'Purple Lisianthus', 'Silver Suede Foliage']
  },
  {
    id: 5,
    name: 'Pure Lily',
    price: '$75.00',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop',
    tag: '',
    description: 'Elegant white lilies that symbolize purity and refined beauty.',
    details: ['6 Oriental Lilies', 'Aspidistra Leaves', 'Glass Vase Included']
  },
  {
    id: 6,
    name: 'Wild Orchard',
    price: '$110.00',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium',
    description: 'An exotic collection of orchids and tropical blooms for a bold statement.',
    details: ['Cymbidium Orchids', 'Protea', 'Monstera Leaves']
  }
];

export const WHATSAPP_NUMBER = '6281234567890'; // Example Indonesian number

export const getWhatsAppLink = (productName?: string) => {
  const message = productName 
    ? `Halo Moon Fleurs, saya tertarik dengan produk ${productName}. Bisa dibantu?`
    : 'Halo Moon Fleurs, saya ingin bertanya tentang layanan bunga Anda.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
