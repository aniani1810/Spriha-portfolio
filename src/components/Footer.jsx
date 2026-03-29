import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', 
      padding: '40px 20px', 
      borderTop: '1px solid var(--glass-border)', 
      marginTop: '60px', 
      color: 'var(--text-secondary)',
      backdropFilter: 'blur(10px)',
      background: 'rgba(6, 9, 19, 0.4)'
    }}>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        &copy; {new Date().getFullYear()} Spriha Singh. All Rights Reserved.
      </p>
    </footer>
  );
}
