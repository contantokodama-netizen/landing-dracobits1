import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre">
      <div className="container">
        <h3 className="section-title" data-aos="fade-up">Por que alguns negócios explodem e outros ficam parados?</h3>
        <p className="section-sub" data-aos="fade-up" data-aos-delay="80">
          A diferença está em <span style={{color:'#db00ff',fontWeight:'600'}}>como eles se apresentam para o mundo</span>. Enquanto você depende do boca a boca, eles <span style={{color:'#db00ff'}}>trabalham enquanto dormem</span>.
        </p>
        <div className="about">
          <div className="card" data-aos="fade-right">
            <p className="mt-0">
              Imagine acordar todo dia com <strong style={{color:'#db00ff'}}>mensagens de pessoas interessadas</strong> no seu negócio. Pessoas que te encontraram sozinhas, sem você precisar correr atrás. <strong style={{color:'#db00ff'}}>Isso é possível</strong> quando você tem a estrutura certa funcionando para você.
            </p>
          </div>
          <div className="holo" data-aos="fade-left">
            <img 
              className="media" 
              src="https://github.com/user-attachments/assets/71822fb7-9a49-482c-aac7-3241161fe188" 
              alt="Personagem Dracobits trabalhando" 
              width="1600" 
              height="1000" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;