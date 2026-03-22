import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Hero, InstructionCard, RecommendationCard } from './components';
import MapView from './MapView';
import { HOUSE_INSTRUCTIONS, RECOMMENDATIONS } from './constants';
import { cn } from './lib/utils';
import React, { useEffect, useState } from 'react'; // Added useState

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-20"
  >
    {children}
  </motion.div>
);

const HomePage = () => {
  // 1. Define your images here
  const carouselImages =  [
     "/assets/pool.jpg",
    "/assets/house1.jpg",
    "/assets/house2.jpg",
    "/assets/main.jpg",
    "/assets/livingroom.jpg",
    "/assets/terrace.jpg",
    "/assets/front.jpg",
    "/assets/pool2.jpg",
    "/assets/beachclub.jpg",
    "/assets/kitchen.jpg",
    "/assets/bedroom2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Auto-play logic (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold mb-6">The Experience</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Your Private Sanctuary in <span className="italic">Guanacaste</span>
            </h2>
            <p className="text-jungle/60 leading-relaxed mb-10 text-lg">
              Nestled within the exclusive Hacienda Pinilla, our home offers a blend of luxury, 
              comfort, and the raw beauty of Costa Rica. After a day of exploration, 
              return to your private sanctuary to unwind by the pool and soak in the serenity. 
              We are delighted to have you as our guest.
            </p>
            
            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">4</div>
                <div className="font-display text-[9px] tracking-widest uppercase opacity-60">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">5.5</div>
                <div className="font-display text-[9px] tracking-widest uppercase opacity-60">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">8</div>
                <div className="font-display text-[9px] tracking-widest uppercase opacity-60">Guests</div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={carouselImages[currentIndex]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Optional: Simple Dots Navigation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all",
                      currentIndex === i ? "bg-white w-4" : "bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* The Gold Circle (Keep this outside the overflow-hidden div) */}
            <motion.div 
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold rounded-full flex items-center justify-center text-sand p-8 text-center font-serif italic text-xl shadow-xl z-20"
            >
              Pura Vida Living
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GuidePage = () => (
  <PageWrapper>
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Essential Info</p>
        <h2 className="text-5xl font-serif">House Instructions</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {HOUSE_INSTRUCTIONS.map((item) => (
          <InstructionCard key={item.id} instruction={item} />
        ))}
      </div>
    </section>
  </PageWrapper>
);

const RecommendationsPage = () => {
  const [filter, setFilter] = React.useState<string>('all');
  const [viewMode, setViewMode] = React.useState<'list' | 'map'>('list');

  const categories = ['all', 'breakfast', 'restaurant', 'beach', 'activity', 'soda', 'grocery', 'daytrip'];

  const filteredItems = RECOMMENDATIONS.filter(item => 
    filter === 'all' || item.category === filter
  );

  return (
    <PageWrapper>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Local Secrets</p>
          <h2 className="text-5xl font-serif mb-12">Our Recommendations</h2>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1 rounded-full shadow-sm border border-black/5">
              <button 
                onClick={() => setViewMode('list')}
                className={cn(
                  "px-8 py-2 rounded-full font-display text-[10px] tracking-widest uppercase transition-all",
                  viewMode === 'list' ? "bg-jungle text-sand" : "text-jungle/40 hover:text-jungle"
                )}
              >
                List View
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={cn(
                  "px-8 py-2 rounded-full font-display text-[10px] tracking-widest uppercase transition-all",
                  viewMode === 'map' ? "bg-jungle text-sand" : "text-jungle/40 hover:text-jungle"
                )}
              >
                Map View
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border text-[10px] font-display tracking-widest uppercase transition-all",
                  filter === cat 
                    ? "bg-gold border-gold text-white" 
                    : "border-black/10 text-jungle/40 hover:border-gold hover:text-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {viewMode === 'map' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <MapView items={filteredItems} />
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item) => (
              <RecommendationCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
};

const AboutPage = () => (
  <PageWrapper>
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold mb-6">The Hosts</p>
      <h2 className="text-5xl font-serif mb-12">About the Owners</h2>
      <div className="w-32 h-32 bg-gold/20 rounded-full mx-auto mb-12 flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/hosts/200/200" 
          alt="Hosts" 
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="text-jungle/60 leading-relaxed text-lg mb-8">
        This house has been in our family for years. It's our favorite place in the world, 
        and we hope it becomes one of yours too. We've curated this guide to help you 
        experience the best of Hacienda Pinilla and the surrounding Guanacaste region.
      </p>
      <p className="font-serif italic text-2xl text-gold">
        Enjoy your stay <br />
        
      </p>
    </section>
  </PageWrapper>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/recommendations" element={<RecommendationsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="py-12 border-t border-black/5 text-center">
          <p className="font-display text-[9px] tracking-[0.3em] uppercase opacity-40">
            © 2026 Casa Brisas 37 Guidebook • Pura Vida
          </p>
        </footer>
      </div>
    </Router>
  );
}

