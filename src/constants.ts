export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
  description: string;
  details: string[];
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  count: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'ulang-tahun',
    name: 'Bunga Ulang Tahun',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop',
    count: '24 Produk',
    description: 'Rangkaian ceria untuk merayakan hari spesial orang terkasih.'
  },
  {
    id: 'pernikahan',
    name: 'Buket Pernikahan',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    count: '18 Produk',
    description: 'Keanggunan abadi untuk hari paling berkesan dalam hidup Anda.'
  },
  {
    id: 'romantis',
    name: 'Bunga Romantis',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
    count: '32 Produk',
    description: 'Ungkapkan cinta Anda dengan mawar merah dan bunga romantis lainnya.'
  },
  {
    id: 'simpati',
    name: 'Bunga Simpati',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    count: '12 Produk',
    description: 'Sampaikan belasungkawa dan dukungan dengan rangkaian yang menenangkan.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Midnight Rose',
    price: 'Rp 850.000',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop',
    tag: 'Terlaris',
    description: 'Rangkaian mawar merah tua yang misterius dipadukan dengan dedaunan musiman yang elegan.',
    details: ['12 Mawar Merah Premium', 'Aksen Eucalyptus', 'Bungkus Hitam Khas Moon Fleurs'],
    categoryId: 'romantis'
  },
  {
    id: 2,
    name: 'Ethereal Peony',
    price: 'Rp 1.200.000',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium',
    description: 'Bunga peony yang lembut dan halus dalam nuansa blush dan krem, sempurna untuk momen romantis.',
    details: ['8 Peony Besar', 'Bunga Wax Putih', 'Sentuhan Pita Sutra'],
    categoryId: 'romantis'
  },
  {
    id: 3,
    name: 'Golden Sunburst',
    price: 'Rp 650.000',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop',
    tag: 'Baru',
    description: 'Bunga matahari yang cerah dan ceria dipadukan dengan aksen bernuansa emas.',
    details: ['5 Bunga Matahari Besar', 'Solidago', 'Bungkus Kraft Ramah Lingkungan'],
    categoryId: 'ulang-tahun'
  },
  {
    id: 4,
    name: 'Lavender Dream',
    price: 'Rp 950.000',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop',
    tag: 'Terbatas',
    description: 'Perpaduan menenangkan antara lavender, lisianthus ungu, dan tanaman hijau bernuansa perak.',
    details: ['Tangkai Lavender Kering', 'Lisianthus Ungu', 'Dedaunan Silver Suede'],
    categoryId: 'ulang-tahun'
  },
  {
    id: 5,
    name: 'Pure Lily',
    price: 'Rp 750.000',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop',
    tag: '',
    description: 'Bunga lili putih elegan yang melambangkan kemurnian dan keindahan yang halus.',
    details: ['6 Lili Oriental', 'Daun Aspidistra', 'Termasuk Vas Kaca'],
    categoryId: 'simpati'
  },
  {
    id: 6,
    name: 'Wild Orchard',
    price: 'Rp 1.100.000',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium',
    description: 'Koleksi eksotis anggrek dan bunga tropis untuk pernyataan yang berani dan mewah.',
    details: ['Anggrek Cymbidium', 'Protea', 'Daun Monstera'],
    categoryId: 'pernikahan'
  }
];

export const WHATSAPP_NUMBER = '6281234567890'; // Example Indonesian number

export const getWhatsAppLink = (productName?: string) => {
  const message = productName 
    ? `Halo Moon Fleurs, saya tertarik dengan produk ${productName}. Bisa dibantu?`
    : 'Halo Moon Fleurs, saya ingin bertanya tentang layanan bunga Anda.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
