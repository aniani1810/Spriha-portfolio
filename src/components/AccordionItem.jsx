import { useState } from 'react';

export default function AccordionItem({ title, info, image, onImageClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        className="accordion-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span>{title}</span>
          <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
        </div>
        {info && (
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '10px', fontWeight: 'normal', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
            {info}
          </p>
        )}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {image && (
           <img 
             src={image} 
             alt={title} 
             className="item-image" 
             onClick={() => onImageClick(image)} 
           />
        )}
      </div>
    </div>
  );
}
