import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '../components/AccordionItem';
import ImageModal from '../components/ImageModal';

// Move the portfolioData here since it's only needed here now
const getPlaceholder = (w, h, text) => `https://placehold.co/${w}x${h}/170d2b/F5E6D3?text=${encodeURIComponent(text)}`;

const portfolioData = {
  designCollection: [
    { title: 'Gilded dusk', info: 'Physical Garment - A stunning physical piece embodying the fading light of dusk with intricate gilded accents.', image: '/gilded_dusk.png' },
    { title: 'Unraveled', info: 'Physical Garment - Deconstructed fashion taking inspiration from chaotic beauty.', image: '/unraveled.png' },
    { title: 'Modern heiress', info: 'Physical Garment - Structured tailoring meets contemporary feminine power.', image: '/modern_heiress.png' },
    { title: 'Echo of the grove', info: 'Physical Garment - Organic silhouettes derived from natural woodland motifs.', image: '/echo_grove.png' }
  ],
  onlineCollection: [
    { title: 'Everyday Art', info: 'Online Collection - Integrating conceptual art into daily wear.', image: '/everyday_art.png' },
    { title: 'Swarn shristi', info: 'Online Collection - A digital translation of golden creation elements.', image: getPlaceholder(800, 1200, 'Swarn shristi') },
    { title: 'Digital decay', info: 'Online Collection - Exploring the beauty of degradation in virtual spaces.', image: '/digital_decay.png' }
  ],
  draping: [
    { title: 'Cowl neck black dress', info: 'Intricate cowl draping highlighting the classic black silhouette.', image: '/cowl_black.png' },
    { title: 'Bias cut dress', info: 'Smooth flowing bias cut demonstrating fabric mastery.', image: getPlaceholder(800, 1000, 'Bias Cut Dress') },
    { title: 'Purple one shoulder dress', info: 'Asymmetrical draping in a vibrant purple hue.', image: '/purple_dress.png' }
  ],
  garmentDocketing: [
    { title: 'Off white', info: 'Detailed docketing technicals for an off-white ensemble.', image: getPlaceholder(800, 800, 'Off White Docketing') }
  ],
  fashionForecasting: [
    { title: 'W', info: 'Trend forecasting collection analyzing the "W" demographic shifts.', image: getPlaceholder(800, 600, 'W Forecasting') }
  ],
  illustrations: [
    { title: 'Concept Sketches', info: 'Initial illustrations and concept art.', image: getPlaceholder(800, 800, 'Illustrations') }
  ],
  extraWorks: [
    { title: 'Textile Experiments', info: 'Explorations in fabric manipulation.', image: getPlaceholder(800, 800, 'Extra Works') }
  ],
  modeling: [
    { title: 'Editorial Shoots', info: 'Photographic modeling portfolio.', image: getPlaceholder(800, 1200, 'Modeling') }
  ]
};

// Framer motion variants to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Portfolio() {
  const [modalImage, setModalImage] = useState(null);

  // Helper function to render a single section of accordions
  const renderSection = (title, items) => (
    <motion.section variants={sectionVariants} className="section-group">
      <h2 className="section-title">{title}</h2>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} onImageClick={setModalImage} />
      ))}
    </motion.section>
  );

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.p variants={sectionVariants} className="hero-subtitle" style={{textAlign: 'center', marginBottom: '20px'}}>
        Complete Collection Index
      </motion.p>

      <motion.p variants={sectionVariants} style={{textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 80px auto'}}>
        A curated collection of fashion design projects spanning multiple disciplines and styles.
      </motion.p>

      {renderSection("Design Collection", portfolioData.designCollection)}
      {renderSection("Online Collection", portfolioData.onlineCollection)}
      {renderSection("Draping", portfolioData.draping)}
      {renderSection("Garment Docketing", portfolioData.garmentDocketing)}
      {renderSection("Fashion Forecasting", portfolioData.fashionForecasting)}
      {renderSection("Illustrations", portfolioData.illustrations)}
      {renderSection("Extra Works", portfolioData.extraWorks)}
      {renderSection("Modeling", portfolioData.modeling)}

      <ImageModal 
        currentImage={modalImage} 
        onClose={() => setModalImage(null)} 
      />
    </motion.div>
  );
}
