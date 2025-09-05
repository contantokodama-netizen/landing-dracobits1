import React from 'react';

const Hero: React.FC = () => {
  return (
    <main id="inicio" className="hero">
      <div className="container content">
        <div>
          <h1 data-aos="fade-up" data-aos-delay="100">
            O que está sugando a força do seu negócio: <span style={{color:'#db00ff'}}>a falta de clientes</span> ou <span style={{color:'#db00ff'}}>a falta de estrutura</span> para atraí-los?
          </h1>
          <p className="muted" data-aos="fade-up" data-aos-delay="150">
            Negócios semelhantes ao seu estão crescendo <span style={{color:'#db00ff',fontWeight:'600'}}>três vezes mais</span> — não por sorte, mas por <span style={{color:'#db00ff',fontWeight:'600'}}>estratégia</span>.
          </p>
          <div className="hero-ctas" data-aos="fade-up" data-aos-delay="200">
            <a className="btn primary" href="#contato">Quero o diagnóstico gratuito</a>
            <a className="btn" href="#sobre">Descobrir o segredo</a>
          </div>
          <div className="microcopy" data-aos="fade-up" data-aos-delay="220">
            <span style={{color:'#db00ff'}}>Sem compromisso</span>. <span style={{color:'#db00ff'}}>Resultado garantido</span>.
          </div>
          
          <div className="value-proposition" data-aos="fade-up" data-aos-delay="240">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#db00ff" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="value-content">
                <h4>Pare de perder clientes</h4>
                <p>Enquanto você não aparece na internet, seus concorrentes estão levando seus clientes.</p>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#db00ff" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="value-content">
                <h4>Ganhe dinheiro dormindo</h4>
                <p>Sua empresa trabalhando 24 horas trazendo clientes novos todo dia.</p>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#db00ff" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="value-content">
                <h4>Pare de correr atrás</h4>
                <p>Chega de ficar caçando cliente. Eles vão te procurar sozinhos.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="display" data-aos="zoom-in">
          <div className="floating-glow"></div>
          <img 
            className="floating-image" 
            src="https://github.com/user-attachments/assets/31f87fe0-8162-402a-b54e-be1b23ace5d2" 
            alt="Personagem da Dracobits" 
            width="280" 
            height="280" 
            loading="eager"
            fetchpriority="high"
            decoding="async" 
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;