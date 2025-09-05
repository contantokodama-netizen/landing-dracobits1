import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 5h16v14H4zM4 9h16" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Seu cartão de visitas digital",
      description: "Uma página bonita que mostra quem você é e faz as pessoas quererem falar com você.",
      delay: 0
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3a6 6 0 000 12 6 6 0 000-12zM3 21h18" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Robô que trabalha para você",
      description: "Tarefas chatas do dia a dia funcionam sozinhas. Você foca no que realmente importa.",
      delay: 60
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Atendente que nunca dorme",
      description: "Seus clientes são atendidos a qualquer hora, mesmo quando você está dormindo ou ocupado.",
      delay: 120
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16v16H4zM8 8h8v8H8z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Ferramenta feita só para você",
      description: "Criamos algo especial que resolve exatamente os problemas da sua empresa.",
      delay: 180
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4-2v4m0 0V2m0 4h4m-4 0H8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Páginas que vendem sozinhas",
      description: "Páginas especiais que convencem seus visitantes a virarem clientes sem você precisar estar lá.",
      delay: 240
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Mais clientes todo mês",
      description: "Colocamos sua empresa na frente das pessoas certas no Google e Facebook quando elas estão procurando.",
      delay: 300
    }
  ];

  return (
    <section id="servicos">
      <div className="container">
        <h3 className="section-title" data-aos="fade-up">Como fazemos sua empresa trabalhar sozinha</h3>
        <p className="section-sub" data-aos="fade-up" data-aos-delay="80">
          Imagine sua empresa funcionando <span style={{color:'#db00ff'}}>24 horas por dia</span>, trazendo clientes enquanto você cuida do que realmente importa. <span style={{color:'#db00ff'}}>É isso que fazemos acontecer</span>.
        </p>
        <div className="services">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="service" 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div className="icon" aria-hidden="true">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a href="#contato" className="cta-mini">
                Quero saber mais <span style={{color:'#db00ff'}}>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;