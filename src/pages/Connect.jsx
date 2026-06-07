import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Connect() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(null);

    // Retrieve keys from environment variables or fallback to placeholders
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_here';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_here';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_here';

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
    .then(() => {
      setIsSending(false);
      setSendSuccess('success');
      formRef.current.reset();
    })
    .catch((error) => {
      setIsSending(false);
      setSendSuccess('error');
      console.error('EmailJS Form Submission Error:', error);
    });
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

      <AnimatePresence mode="wait">
        {sendSuccess === 'success' ? (
          <motion.div 
            key="success-card"
            className="glass-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            style={{ 
              width: '100%', 
              maxWidth: '600px', 
              padding: '50px 40px', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '20px',
              margin: '0 0 50px 0'
            }}
          >
            <div style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              background: 'rgba(255, 71, 126, 0.1)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              fontSize: '2.5rem', 
              color: 'var(--accent-color)',
              marginBottom: '10px'
            }}>
              ✓
            </div>
            <h3 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
              Message Sent!
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Thank you for reaching out! Your message has been delivered directly to Spriha's inbox. She will get back to you shortly.
            </p>
            <button 
              className="btn-outline" 
              onClick={() => setSendSuccess(null)}
              style={{ marginTop: '15px', padding: '10px 30px', fontSize: '0.85rem' }}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form-card"
            className="glass-panel" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '600px', margin: '0 0 50px 0' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="from_name" 
                  className="form-input" 
                  required 
                  placeholder="Your Name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="from_email" 
                  className="form-input" 
                  required 
                  placeholder="your.email@example.com" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  required 
                  placeholder="Collaboration Request" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-input" 
                  rows="6" 
                  required 
                  placeholder="Your message..."
                />
              </div>

              {sendSuccess === 'error' && (
                <p style={{ color: 'var(--accent-color)', margin: '0', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  ⚠️ Failed to send. Please verify your .env credentials or email directly.
                </p>
              )}

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSending}
                style={{ alignSelf: 'flex-start', marginTop: '10px' }}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        style={{ display: 'flex', gap: '40px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', flexWrap: 'wrap', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a href="mailto:sprihasingh1204@gmail.com">Email</a>
        <a href="tel:8887895971">Phone</a>
        <a href="https://www.linkedin.com/in/sprihasingh12/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.behance.net/sprihasingh12" target="_blank" rel="noreferrer">Behance</a>
        <a href="https://www.instagram.com/spriha.s_diary?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram</a>
      </motion.div>
    </motion.div>
  );
}
