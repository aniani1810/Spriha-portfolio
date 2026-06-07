import React, { useEffect, useState } from 'react';

export default function DocumentModal({ currentPdf, pdfTitle, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentPdf) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }
  }, [currentPdf]);

  if (!currentPdf) return null;

  return (
    <div 
      className={`image-modal-overlay ${isVisible ? 'visible' : ''}`}
      onClick={onClose}
      style={{
        cursor: 'default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
      }}
    >
      <div 
        className="pdf-modal-container"
        onClick={(e) => e.stopPropagation()} // prevent overlay close when clicking the container
      >
        <div className="pdf-modal-header">
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {pdfTitle}
          </h3>
          <button className="pdf-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <iframe 
          src={currentPdf} 
          className="pdf-modal-iframe"
          title={pdfTitle}
        />
      </div>
    </div>
  );
}
