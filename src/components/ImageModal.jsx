import React, { useEffect, useState } from 'react';

export default function ImageModal({ currentImage, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentImage) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // prevent scrolling while modal is open
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }
  }, [currentImage]);

  if (!currentImage) return null;

  return (
    <div 
      className={`image-modal-overlay ${isVisible ? 'visible' : ''}`}
      onClick={onClose}
    >
      <img 
        src={currentImage} 
        className="image-modal-content" 
        alt="Maximized view" 
        onClick={(e) => {
           // Prevent closing if we click directly on the image itself, 
           // though clicking the image could also just close it for convenience.
           e.stopPropagation();
           onClose();
        }} 
      />
    </div>
  );
}
