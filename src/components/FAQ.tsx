import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Por que preciso de um site se meu negócio já funciona?",
      answer: "Porque seus clientes estão procurando no Google antes de comprar. Se você não aparece, eles acham seus concorrentes. É dinheiro saindo do seu bolso todo dia."
    },
    {
      question: "Em quanto tempo vou começar a receber mais clientes?",
      answer: "A maioria dos nossos clientes começa a receber contatos novos em 2-4 semanas. Alguns já veem resultado na primeira semana."
    },
    {
      question: "Quanto custa para ter isso funcionando?",
      answer: "Depende do que seu negócio precisa. Mas garantimos: o dinheiro que você investe volta rapidinho com os clientes novos que vai aparecer."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h3 className="section-title" data-aos="fade-up">Perguntas que todo mundo faz</h3>
        <div className="section-sub" data-aos="fade-up" data-aos-delay="80">
          <span style={{color:'#db00ff'}}>Respostas honestas</span> para as dúvidas que você tem agora.
        </div>
        <div className="faq-accordion" data-aos="fade-up" data-aos-delay="120">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;