import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, Wifi, Clock, Waves, Wind, MapPin, ExternalLink, Menu, X, ChevronRight, Home, BookOpen, Star, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from './lib/utils';
import { HOUSE_INSTRUCTIONS, RECOMMENDATIONS, Recommendation, HouseInstruction } from './constants';

const IconMap: Record<string, LucideIcon> = {
  Wifi,
  Clock,
  Waves,
  Wind,
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'House Guide', path: '/guide', icon: BookOpen },
    { name: 'Recommendations', path: '/recommendations', icon: Star },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-none shadow-none bg-sand/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight">
          Pinilla <span className="italic text-gold">Luxury</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link",
                location.pathname === item.path && "active"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-sand border-t border-black/5 px-6 py-8 space-y-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4 font-display text-xs tracking-widest uppercase"
            >
              <item.icon size={18} className="text-gold" />
              <span>{item.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* --- VIDEO ADDED HERE --- */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace this path with your actual video file path */}
          <source src="/assets/brisas37.mp4" type="video/mp4" />
          
          {/* Fallback: This image shows if the video fails to load */}
          <img src="/assets/pool2.jpg" alt="Luxury Villa" className="w-full h-full object-cover" />
        </video>
        
          {/* Dark overlay to make the white text pop */}
        <div className="absolute inset-0 bg-jungle/30" />
      
      </div> 
      
      <div className="relative z-10 text-center text-sand px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xs tracking-[0.4em] uppercase mb-6"
        >
          Welcome to Paradise
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          Casa <br />
          <span className="italic">Brisas</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/guide" className="luxury-button inline-block bg-white text-jungle hover:bg-gold hover:text-white">
            Explore Your Guide
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const InstructionCard = ({ instruction }: { instruction: HouseInstruction; key?: string }) => {
  const Icon = IconMap[instruction.icon] || Info;
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-white rounded-2xl shadow-sm border border-black/5"
    >
      <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mb-6 text-gold">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif mb-4">{instruction.title}</h3>
      <p className="text-jungle/60 text-sm leading-relaxed whitespace-pre-line">
        {instruction.content}
      </p>
    </motion.div>
  );
};

export const RecommendationCard = ({ item }: { item: Recommendation; key?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-[10px] tracking-[0.2em] uppercase text-gold">
            {item.category}
          </span>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-jungle/40 hover:text-gold">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <h3 className="text-2xl font-serif mb-3">{item.name}</h3>
        <p className="text-jungle/60 text-sm mb-6 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center text-jungle/40 text-[10px] font-display tracking-widest uppercase">
          <MapPin size={12} className="mr-2" />
          {item.location}
        </div>
      </div>
    </motion.div>
  );
};


