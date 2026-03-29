import React from 'react';
import { motion } from 'framer-motion';

export default function Connect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! (Connect function mocked for prototype)");
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 className="section-title">Let's Connect</h2>
      
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '40px', maxWidth: '600px' }}>
        Interested in collaboration, custom concepts, or editorial shoots? 
        Leave a message below or reach out directly through my social channels.
      </p>

      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', margin: '0 0 50px 0' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" required placeholder="your.email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="form-input" required placeholder="Collaboration Request" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-input" rows="6" required placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
            Send Message
          </button>
        </form>
      </div>

      <motion.div 
        style={{ display: 'flex', gap: '40px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', flexWrap: 'wrap', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a href="mailto:spriha@example.com">Email</a>
        <a href="tel:+1234567890">Phone</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </motion.div>
    </motion.div>
  );
}
