import { useState } from 'react';

export default function AccordionItem({ title, info, pdf, onPdfClick }) {
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
        {pdf && (
           <div 
             onClick={() => onPdfClick(pdf, title)}
             className="pdf-preview-thumbnail"
             style={{
               cursor: 'pointer',
               position: 'relative',
               width: '100%',
               maxWidth: '480px',
               height: '320px',
               borderRadius: '8px',
               border: '1px solid var(--glass-border)',
               background: 'rgba(255, 255, 255, 0.02)',
               boxShadow: 'var(--glass-shadow)',
               overflow: 'hidden',
               marginTop: '15px',
               transition: 'transform var(--transition-speed) ease, border-color var(--transition-speed) ease',
             }}
           >
             <iframe 
               src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
               style={{
                 width: '100%',
                 height: '100%',
                 border: 'none',
                 pointerEvents: 'none',
               }}
               title={`${title} Preview`}
             />
             <div 
               className="pdf-preview-overlay"
               style={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 background: 'linear-gradient(to bottom, rgba(6, 9, 19, 0.2), rgba(6, 9, 19, 0.85))',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'flex-end',
                 padding: '20px',
                 transition: 'background var(--transition-speed) ease',
               }}
             >
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <span style={{ fontSize: '1.5rem' }}>📄</span>
                 <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{title}</h4>
               </div>
               <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                 Click to view full document
               </span>
             </div>
           </div>
        )}
      </div>
    </div>
  );
}
