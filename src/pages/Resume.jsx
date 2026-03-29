import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const handleDownload = () => {
    // We create a dummy download link that works since we lack the actual PDF for now.
    // This prevents the "Failed to load pdf" error from before.
    const link = document.createElement('a');
    link.href = '#'; 
    link.download = 'Spriha_Singh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV Download initiated! (Please provide actual PDF later)");
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '900px', alignItems: 'flex-end', marginBottom: '20px' }}>
        <h2 className="section-title" style={{ borderBottom: 'none', margin: 0 }}>Curriculum Vitae</h2>
        <button className="btn-outline" onClick={handleDownload} style={{ padding: '10px 25px', fontSize: '0.9rem' }}>
          Download CV
        </button>
      </div>

      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '900px', padding: '40px', marginBottom: '40px' }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{color: '#a33852'}}>★</span> Core Skills
        </div>
        <div className="skills-grid">
          <div>
            <h4 style={{ color: '#a33852', marginBottom: '15px', fontFamily: 'var(--font-body)' }}>Design Skills</h4>
            <ul className="skills-list">
              <li>Fashion Design & Illustration</li>
              <li>Draping Techniques (Cowl, Bias Cut)</li>
              <li>Garment Construction & Pattern Making</li>
              <li>Textile Selection & Manipulation</li>
              <li>Digital Fashion Design</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#a33852', marginBottom: '15px', fontFamily: 'var(--font-body)' }}>Professional Skills</h4>
            <ul className="skills-list">
              <li>Fashion Forecasting & Trend Analysis</li>
              <li>Brand Development & Identity</li>
              <li>Garment Documentation & Tech Packs</li>
              <li>Fashion Photography & Styling</li>
              <li>Collection Development</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '900px', padding: '40px', marginBottom: '40px' }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{color: '#a33852'}}>💼</span> Experience
        </div>
        
        <div className="timeline-item">
          <div className="timeline-title">Fashion Designer</div>
          <div className="timeline-meta">Independent | 2020 - Present</div>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Developed comprehensive fashion collections including physical garments and digital designs. Specialized in evening wear, contemporary casual, and experimental pieces. Successfully completed 15+ design projects across multiple categories.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-title">Brand Developer</div>
          <div className="timeline-meta">Finera Brand Project | 2023</div>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Led complete brand identity development including visual language, market positioning, and design direction. Created cohesive brand messaging and aesthetic guidelines.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '900px', padding: '40px', marginBottom: '40px' }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{color: '#a33852'}}>🎓</span> Education
        </div>
        
        <div className="timeline-item" style={{ borderLeft: 'none', paddingLeft: 0 }}>
          <div className="timeline-title">Bachelor's in Fashion Design</div>
          <div className="timeline-meta">Fashion Institute | 2018 - 2022</div>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Comprehensive study of fashion design, garment construction, draping techniques, fashion forecasting, and brand development. Graduated with honors.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '900px', padding: '40px' }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
      >
        <div className="resume-section-header">
          <span style={{color: '#a33852'}}>👥</span> Portfolio Highlights
        </div>
        
        <div className="highlight-grid">
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Design Collections</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Gilded Dusk, Unraveled, Modern Heiress, Echo of the Grove</span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Online Collections</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Everyday Art, Swarn Shristi, Digital Decay</span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Draping Expertise</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cowl Neck, Bias Cut, One Shoulder techniques</span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Brand & Research</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Fashion Forecasting, Brand Development, Technical Documentation</span>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
