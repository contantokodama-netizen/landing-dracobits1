import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container foot">
        <div>
          <div className="mini-logo">
            <div className="logo">
              <img 
                src="https://i.postimg.cc/Dz5mDtPL/Design-sem-nome-15.png" 
                alt="Logo Dracobits" 
                width="42"
                height="42"
                loading="lazy"
              />
            </div>
            <strong>Dracobits</strong>
          </div>
          <div className="muted mt-8">Colocamos sua empresa no <span style={{color:'#db00ff'}}>mapa digital</span></div>
        </div>
        
        <div>
          <strong>Fale conosco</strong>
          <div className="social mt-8">
            <a href="https://www.instagram.com/dracobits?igsh=MTR2aDI3bWp2aTcxMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="https://wa.me/559281041049" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="muted mt-16">Atendemos <span style={{color:'#db00ff'}}>todo o Brasil</span> • <span style={{color:'#db00ff'}}>Qualidade premium</span></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;