

export interface Recommendation {
  id: string;
  category: 'restaurant' | 'beach' | 'activity' | 'soda' | 'grocery' | 'breakfast' | 'daytrip';
  name: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
  image?: string;
  link?: string;
}

export interface HouseInstruction {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface AmenityGroup {
  category: string;
  items: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const RECOMMENDATIONS: Recommendation[] = [
  // Beaches
  {
    id: 'b1',
    category: 'beach',
    name: 'Playa Avellanas',
    description: 'A stunning stretch of golden sand known for its world-class surf (“Little Hawaii”). Perfect for long walks, sunset drinks, and a laid-back vibe. Home to Lola’s.',
    location: 'Avellanas',
    lat: 10.2265,
    lng: -85.8385,
    image: 'https://media.istockphoto.com/id/1388663941/photo/avellanas-beach-guanacaste-costa-rica.jpg?s=612x612&w=0&k=20&c=RiGyq7gcpMGzG_75YDG9Erx96FnxGaouho4BSNHNdZ0='
  },
  {
    id: 'b2',
    category: 'beach',
    name: 'Playa Mansita',
    description: 'A quiet, more private beach ideal for relaxing and swimming in calm conditions. Located next to the JW Marriott.',
    location: 'Hacienda Pinilla',
    lat: 10.2580,
    lng: -85.8480,
    image: 'https://lh5.googleusercontent.com/p/AF1QipPHhq0PLCRxOgFu-YToC6n7gp4UZuZ-hOk9IEfo=s1600'
  },
  {
    id: 'b3',
    category: 'beach',
    name: 'Playa Langosta',
    description: 'A peaceful, less crowded beach with tide pools, wildlife, and beautiful sunsets.',
    location: 'Langosta',
    lat: 10.2880,
    lng: -85.8450,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/63/62/25/photo0jpg.jpg?w=900&h=500&s=1'
  },
  {
    id: 'b4',
    category: 'beach',
    name: 'Playa Negra',
    description: 'A unique black sand beach known for strong waves and a more local, surf-focused atmosphere.',
    location: 'Los Pargos',
    lat: 10.1930,
    lng: -85.8300,
    image: 'https://www.jaredsdetours.com/wp-content/uploads/2023/01/playa_negro-2-1024x683.jpg'
  },
  {
    id: 'v2',
    category: 'daytrip',
    name: 'Playa del Coco',
    description: 'A lively beach town with calm waters, restaurants, and shops—great for a day trip.',
    location: 'El Coco',
    lat: 10.5540,
    lng: -85.6980,
    image: 'https://mytanfeet.com/wp-content/uploads/2023/03/Playas-del-Coco-vacation-rentals.jpg'
  },
  {
    id: 'b6',
    category: 'beach',
    name: 'Playa Flamingo',
    description: 'Known for white sand and clear blue water, perfect for swimming and relaxing.',
    location: 'Flamingo',
    lat: 10.4380,
    lng: -85.7880,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/31/26/b2/entire-flamingo-beach.jpg?w=1400&h=1400&s=1'
  },
  // Restaurants
  {
    id: 'r1',
    category: 'restaurant',
    name: 'Il Rustico',
    description: 'Authentic Italian cuisine in a cozy setting. Great pasta and wine.',
    location: 'Avellanas',
    lat: 10.2270,
    lng: -85.8370,
    image: 'https://nomaddesignhouse.com/wp-content/uploads/2018/07/ilrustico-1.jpg'
  },
  {
    id: 'r2',
    category: 'restaurant',
    name: 'Pangas',
    description: 'A scenic riverfront restaurant in Tamarindo with fresh seafood and a romantic atmosphere.',
    location: 'Tamarindo',
    lat: 10.3015,
    lng: -85.8395,
    image: 'https://afar.brightspotcdn.com/dims4/default/9b9ae0d/2147483647/strip/false/crop/1150x719+0+0/resize/1150x719!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb7%2F1d%2F596b91465249e0d32e24bd7d2b77%2Foriginal-pangas-cloe-velarde.jpg'
  },
  {
    id: 'r3',
    category: 'restaurant',
    name: 'Agua Salada',
    description: 'A stylish beachfront restaurant with fresh, creative dishes.',
    location: 'Tamarindo',
    lat: 10.2980,
    lng: -85.8410,
    image: 'https://bluezoneexperiencecr.com/wp-content/uploads/2022/05/Agua-Salada-Tamarindo-restaurants-nightlife-scaled.jpg'
  },
  {
    id: 'r4',
    category: 'restaurant',
    name: 'Fish and Cheeses',
    description: 'A hidden gem offering high-quality seafood in a relaxed setting.',
    location: 'Near Pinilla',
    lat: 10.2750,
    lng: -85.8250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEcTgSeDSr9qZeE21glzLa7gFJ8lsC8VaSA&s'
  },
  // Breakfast & Casual
  {
    id: 'br1',
    category: 'breakfast',
    name: 'Soul Shine',
    description: 'A popular brunch spot with healthy options, great coffee, and a relaxed vibe.',
    location: 'Avellanas',
    lat: 10.2280,
    lng: -85.8360,
    image: 'https://soulshine-hotel.guanacaste-hotels.com/data/Images/OriginalPhoto/17324/1732428/1732428187/image-playa-avellana-soulshine-45.JPEG'
  },
  {
    id: 'br2',
    category: 'breakfast',
    name: 'Pico Bistro',
    description: 'A charming café with excellent breakfast, pastries, and coffee.',
    location: 'Tamarindo',
    lat: 10.2990,
    lng: -85.8400,
    image: 'https://images.happycow.net/venues/1024/38/37/hcmp383762_2642845.jpeg'
  },
  {
    id: 'br3',
    category: 'breakfast',
    name: 'Barumis',
    description: 'Casual and perfect for a quick breakfast or post-surf bite.',
    location: 'Avellanas',
    lat: 10.2260,
    lng: -85.8390,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/05/08/80/fresh-salads-spicy-shrimps.jpg?w=900&h=500&s=1'
  },
  // Activities
  {
    id: 'a1',
    category: 'activity',
    name: 'Horseback Riding',
    description: 'Explore Hacienda Pinilla, especially beautiful at sunset along the beach.',
    location: 'Hacienda Pinilla',
    lat: 10.2650,
    lng: -85.8400,
    image: 'https://www.luxuryvillashaciendapinilla.com/wp-content/uploads/2021/04/Caballos.jpg'
  },
  {
    id: 'a2',
    category: 'activity',
    name: 'Beach Club & Spa',
    description: 'Relax with an infinity pool, spa services, and oceanfront dining.',
    location: 'Hacienda Pinilla',
    lat: 10.2585,
    lng: -85.8485,
    image: 'https://www.haciendapinilla.com/assets/img/amenities/beach-club/beach-club-1.jpg'
  },
  {
    id: 'a3',
    category: 'activity',
    name: 'Golf',
    description: 'Golfing at Hacienda Pinilla is a relaxing experience set along the beautiful Pacific coast. The course offers great views, a mix of easy and challenging holes, and a peaceful natural setting, making it enjoyable for all skill levels.',
    location: 'Hacienda Pinilla',
    lat: 10.2600,
    lng: -85.8350,
    image: 'https://www.1golf.eu/images/golfclubs/hacienda-pinilla-golf-course_083724_full.jpg'
  },
  {
    id: 'a4',
    category: 'activity',
    name: 'Catamaran Sunset Tours',
    description: 'Sail the coast, snorkel, and enjoy Costa Rica’s sunsets.',
    location: 'Tamarindo',
    lat: 10.3000,
    lng: -85.8430,
    image: 'https://picsum.photos/seed/catamaran/800/600'
  },
  {
    id: 'a5',
    category: 'activity',
    name: 'Langosta Beach Club',
    description: 'A beachfront club with pool, restaurant, and relaxed atmosphere.',
    location: 'Langosta',
    lat: 10.2900,
    lng: -85.8460,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a0/84/ab/pool-bar-with-amazing.jpg?w=900&h=500&s=1'
  },
  // Places to Visit
  {
    id: 'v1',
    category: 'daytrip',
    name: 'Las Catalinas',
    description: 'A picturesque coastal town with shops, trails, and stunning ocean views.',
    location: 'Las Catalinas',
    lat: 10.4780,
    lng: -85.7880,
    image: 'https://bluewaterpropertiesofcostarica.com/wp-content/uploads/2024/06/7-ARCHITECTURE-1024x861.jpg'
  },
  // More Beaches
  {
    id: 'b7',
    category: 'beach',
    name: 'Playa Conchal',
    description: 'One of the most beautiful beaches in Costa Rica, famous for its sand made of millions of tiny crushed shells and crystal clear turquoise water.',
    location: 'Brasilito',
    lat: 10.3950,
    lng: -85.8150,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/19/55/73/photo0jpg.jpg?w=1200&h=-1&s=1'
  },
  {
    id: 'b8',
    category: 'beach',
    name: 'Playa Grande',
    description: 'A protected beach within the Las Baulas National Marine Park, famous for leatherback turtle nesting and excellent surf.',
    location: 'Grande',
    lat: 10.3250,
    lng: -85.8450,
    image: 'https://bluewaterpropertiesofcostarica.com/wp-content/uploads/2023/12/Surfing-at-Playa-Grande-Guanacaste.jpg'
  },
  // More Restaurants
  {
    id: 'r5',
    category: 'restaurant',
    name: 'Dragonfly Bar & Grill',
    description: 'A Tamarindo staple offering creative fusion cuisine, fresh local ingredients, and a great selection of cocktails and wine.',
    location: 'Tamarindo',
    lat: 10.2995,
    lng: -85.8390,
    image: 'https://www.thecostaricalist.com/upload/userBannerAdCompress/163057701062334ce13a984.webp'
  },
  {
    id: 'r6',
    category: 'restaurant',
    name: 'Patagonia del Mar',
    description: 'Upscale beachfront dining in Tamarindo specializing in Argentine-style grilled meats and fresh seafood.',
    location: 'Tamarindo',
    lat: 10.3010,
    lng: -85.8405,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ec/3d/8e/wellcome-to-patagonia.jpg?w=900&h=500&s=1'
  },
  {
    id: 'r7',
    category: 'restaurant',
    name: 'Green Papaya Taco Bar',
    description: 'Casual and fun taco bar with swing seats and delicious, fresh tacos. A must-visit for a relaxed dinner.',
    location: 'Tamarindo',
    lat: 10.2990,
    lng: -85.8385,
    image: 'https://picsum.photos/seed/greenpapaya/800/600'
  },
  {
    id: 'r8',
    category: 'restaurant',
    name: 'Lolas',
    description: 'Beachfront spot known for great food and stunning sunset views, perfect for a relaxed evening by the ocean.',
    location: 'Tamarindo',
    lat: 10.2265,
    lng: -85.8385,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/da/f6/1d/those-chairs.jpg?w=900&h=500&s=1'
  },
  // More Breakfast & Casual
  {
    id: 'br4',
    category: 'breakfast',
    name: 'Waffle Monkey',
    description: 'Beachfront waffle shop in Tamarindo. Sweet and savory waffles with incredible views.',
    location: 'Avellanas',
    lat: 10.2995,
    lng: -85.8415,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/af/4e/75/enjoy-your-tasty-waffles.jpg?w=900&h=500&s=1'
  },
  {
    id: 'br5',
    category: 'breakfast',
    name: 'Nordico Coffee House',
    description: 'Scandinavian-inspired coffee shop with excellent specialty coffee, smoothie bowls, and healthy breakfast options.',
    location: 'Tamarindo',
    lat: 10.3000,
    lng: -85.8380,
    image: 'https://mindtrip.ai/cdn-cgi/image/format=webp,w=720/https://tcdn.mindtrip.ai/images/463690/1415sn9.png'
  },
  // More Activities
  {
    id: 'a6',
    category: 'activity',
    name: 'Pura Aventura Zipline',
    description: 'An exhilarating canopy tour located within Hacienda Pinilla. Fly through the trees and see the forest from a new perspective.',
    location: 'Hacienda Pinilla',
    lat: 10.2700,
    lng: -85.8300,
    image: 'https://picsum.photos/seed/zipline/800/600'
  },
  {
    id: 'a7',
    category: 'activity',
    name: 'Surfing Lessons in Tamarindo',
    description: 'Tamarindo is the perfect place to learn to surf. Many schools offer lessons for all levels in the gentle waves of the main beach.',
    location: 'Tamarindo',
    lat: 10.2990,
    lng: -85.8420,
    image: 'https://surftamarindo.net/wp-content/uploads/2023/03/surfing-lessons.webp'
  },
  // More Day Trips
  // Groceries
  {
    id: 'g1',
    category: 'grocery',
    name: 'Super Económico',
    description: 'Affordable supermarket for everyday essentials.',
    location: 'Tamarindo Entrance',
    lat: 10.2950,
    lng: -85.8300,
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer9A8EKi_BjLyJvrSensYJYxLPeTo7oXXsEKWYlYRwGqWuYaLpY_inbR25vqzS5xS4J7aQEBXpBR9JzbzMObNjcLmeIxyuPGqh3pdCUu1CgMnyddtx_p_O9sWUFzGnTrTE-BKqA=w408-h306-k-no'
  },
  {
    id: 'g2',
    category: 'grocery',
    name: 'Auto Mercado',
    description: 'Upscale grocery store with a wide selection of international products.',
    location: 'Tamarindo',
    lat: 10.2995,
    lng: -85.8370,
    image: 'https://static.wixstatic.com/media/41767c_f3daa572c30640a49859037e9626c847~mv2.jpg/v1/fill/w_512,h_400,al_c,lg_1,q_80,enc_avif,quality_auto/41767c_f3daa572c30640a49859037e9626c847~mv2.jpg'
  },
  {
    id: 'g3',
    category: 'grocery',
    name: 'Mini Market Avellanas',
    description: 'Convenient stop for snacks and basic supplies near the beach.',
    location: 'Avellanas',
    lat: 10.2275,
    lng: -85.8375,
    image: 'https://lh3.googleusercontent.com/p/AF1QipNd3ZQBpgAwqgLALLu1GZS9RIHxfG3rLPAx8vle=s680-w680-h510'
  }
];

export const HOUSE_INSTRUCTIONS: HouseInstruction[] = [
  {
    id: 'wifi',
    title: 'WiFi Connection',
    content: 'Network: Hacienda_Luxury_Guest\nPassword: pura-vida-pinilla',
    icon: 'Wifi'
  },
  {
    id: 'checkin',
    title: 'Check-in & Out',
    content: 'Check-in: 3:00 PM\nCheck-out: 11:00 AM',
    icon: 'Clock'
  },
  {
    id: 'pool',
    title: 'Pool & Deck',
    content: 'Please shower before entering. No glass containers near the pool area.',
    icon: 'Waves'
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    content: 'Please keep doors and windows closed when AC is on. Set to 22°C for optimal comfort.',
    icon: 'Wind'
  }
];