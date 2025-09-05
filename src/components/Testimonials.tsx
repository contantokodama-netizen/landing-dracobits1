import React, { useRef } from 'react';

const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Antes eu ficava esperando o telefone tocar. Agora recebo mensagem todo dia de gente querendo comprar.",
      company: "Loja da Maria",
      location: "São Paulo, SP",
      niche: "Roupas Femininas"
    },
    {
      text: "Agora meus clientes me encontram sozinhos no Google. Não preciso mais sair caçando trabalho.",
      company: "Escola do João",
      location: "Rio de Janeiro, RJ",
      niche: "Aulas de Inglês"
    },
    {
      text: "Minha empresa ficou com cara de grande empresa. Os clientes confiam mais e fecham mais rápido.",
      company: "Consultoria do Pedro",
      location: "Belo Horizonte, MG",
      niche: "Ajuda para Empresas"
    }
  ];

  const handlePrev = () => {
    if (trackRef.current) {
      const step = Math.max(280, Math.floor(trackRef.current.clientWidth * 0.9));
      trackRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      const step = Math.max(280, Math.floor(trackRef.current.clientWidth * 0.9));
      trackRef.current.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos">
      <div className="container">
        <h3 className="section-title" data-aos="fade-up">Veja quem já descobriu o segredo</h3>
        <p className="section-sub" data-aos="fade-up" data-aos-delay="80">
          Pessoas comuns, com negócios comuns, que <span style={{color:'#db00ff',fontWeight:'600'}}>mudaram tudo</span> quando descobriram como funciona.
        </p>

        <div className="carousel" data-aos="fade-up" aria-label="Carrossel de depoimentos">
          <div className="track" ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial">
                <p className="mb-0">"{testimonial.text}"</p>
                <div className="company-info">
                  <div>
                    <strong>{testimonial.company}</strong>
                    <div className="muted">{testimonial.location}</div>
                    <div className="muted">{testimonial.niche}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="controls">
            <button onClick={handlePrev} aria-label="Anterior">◀</button>
            <button onClick={handleNext} aria-label="Próximo">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;