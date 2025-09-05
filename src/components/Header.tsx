import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'O Segredo' },
    { id: 'servicos', label: 'Soluções' },
    { id: 'depoimentos', label: 'Casos de Sucesso' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header>
      <div className="container">
        <nav>
          <a 
            href="#inicio" 
            className="brand" 
            onClick={(e) => handleNavClick('inicio', e)}
          >
            <div className="logo">
              <img 
                src="https://i.postimg.cc/Dz5mDtPL/Design-sem-nome-15.png" 
                alt="Logo Dracobits" 
                width="40"
                height="40"
                loading="eager"
              />
            </div>
            <span className="brand-name">Dracobits</span>
          </a>
          
          <div className="menu">
            {menuItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            ))}
            <a 
              className="cta" 
              href="#contato" 
              onClick={(e) => handleNavClick('contato', e)}
            >
              Diagnóstico Gratuito
            </a>
          </div>
          
          <button 
            className="burger" 
            onClick={toggleMobileMenu}
            style={{ 
              transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
        
        {isMobileMenuOpen && (
          <div id="mobile">
            {menuItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            ))}
            <a 
              className="cta" 
              href="#contato"
              onClick={(e) => handleNavClick('contato', e)}
            >
              Diagnóstico Gratuito
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;