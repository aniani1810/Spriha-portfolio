import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '../components/AccordionItem';
import DocumentModal from '../components/DocumentModal';

const portfolioData = {
  physicalGarment: [
    { title: 'Gilded dusk', info: 'Physical Garment - A stunning physical piece embodying the fading light of dusk with intricate gilded accents.', pdf: '/pdfs/gilded_dusk.pdf' },
    { title: 'Unraveled', info: 'Physical Garment - Deconstructed fashion taking inspiration from chaotic beauty.', pdf: '/pdfs/unraveled.pdf' },
    { title: 'Vanarasi Vanguard', info: 'Physical Garment', pdf: '/pdfs/vanarasi_vanguard.pdf' },
    { title: 'Cosmic cartographer', info: 'Physical Garment', pdf: '/pdfs/cosmic_cartographer.pdf' },
    { title: 'Modern heiress', info: 'Physical Garment - Structured tailoring meets contemporary feminine power.', pdf: '/pdfs/modern_heiress.pdf' }
  ],
  digitalCollection: [
    { title: 'Everyday Art', info: 'Online Collection - Integrating conceptual art into daily wear.', pdf: '/pdfs/everyday_art.pdf' },
    { title: 'Swarn Shristi', info: 'Online Collection - A digital translation of golden creation elements.', pdf: '/pdfs/swarn_shristi.pdf' },
    { title: 'Digital Decay', info: 'Online Collection - Exploring the beauty of degradation in virtual spaces.', pdf: '/pdfs/digital_decay.pdf' }
  ],
  draping: [
    { title: 'Black cowl neck dress', info: 'Intricate cowl draping highlighting the classic black silhouette.', pdf: '/pdfs/black_cowl_neck_dress.pdf' },
    { title: 'Bais Cut dress', info: 'Smooth flowing bias cut demonstrating fabric mastery.', pdf: '/pdfs/bais_cut_dress.pdf' },
    { title: 'Purple Dress', info: 'Asymmetrical draping in a vibrant purple hue.', pdf: '/pdfs/purple_dress.pdf' }
  ],
  brandDevelopment: [
    { title: 'Finera', info: 'Brand Development', pdf: '/pdfs/finera.pdf' }
  ],
  garmentDocketing: [
    { title: 'Off white', info: 'Detailed docketing technicals for an off-white ensemble.', pdf: '/pdfs/off_white.pdf' }
  ],
  illustrations: [
    { title: '6 illustrations', info: 'Collection of 6 illustrations', pdf: '/pdfs/6_illustrations.pdf' }
  ],
  extraWorks: [
    { title: 'Embroidery', info: 'Embroidery', pdf: '/pdfs/embroidery.pdf' },
    { title: 'Surface Ornamentation', info: 'Surface Ornamentation', pdf: '/pdfs/surface_ornamentation.pdf' },
    { title: 'Products', info: 'Products', pdf: '/pdfs/products.pdf' },
    { title: 'Modelling', info: 'Modelling', pdf: '/pdfs/modelling.pdf' },
    { title: 'Poster', info: 'Poster', pdf: '/pdfs/poster.pdf' }
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
  const [modalPdf, setModalPdf] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('');

  const handleOpenPdf = (pdfPath, title) => {
    setModalPdf(pdfPath);
    setPdfTitle(title);
  };

  // Helper function to render a single section of accordions
  const renderSection = (title, items) => (
    <motion.section variants={sectionVariants} className="section-group">
      <h2 className="section-title">{title}</h2>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} onPdfClick={handleOpenPdf} />
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

      {renderSection("Collection: Physical Garment", portfolioData.physicalGarment)}
      {renderSection("Collection: Digital", portfolioData.digitalCollection)}
      {renderSection("Draping", portfolioData.draping)}
      {renderSection("Brand Development", portfolioData.brandDevelopment)}
      {renderSection("Garment Docketing", portfolioData.garmentDocketing)}
      {renderSection("Illustrations", portfolioData.illustrations)}
      {renderSection("Extra Works", portfolioData.extraWorks)}

      <DocumentModal 
        currentPdf={modalPdf} 
        pdfTitle={pdfTitle}
        onClose={() => setModalPdf(null)} 
      />
    </motion.div>
  );
}
