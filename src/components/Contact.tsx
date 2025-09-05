import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whats: '',
    motivo: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome.trim() || !formData.email.trim()) {
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 5000);
      return;
    }
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Vim do site da Dracobits e gostaria de marcar uma reunião.

Nome: ${formData.nome}
Email: ${formData.email}
${formData.whats ? `WhatsApp: ${formData.whats}` : ''}
${formData.motivo ? `Sobre a empresa: ${formData.motivo}` : ''}`;
    
    const url = `https://wa.me/559281041049?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(url, '_blank');
    
    // Mostrar mensagem de sucesso
    setShowSuccess(true);
    setShowError(false);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      whats: '',
      motivo: ''
    });
  };

  return (
    <section id="contato">
      <div className="container">
        <h3 className="section-title" data-aos="fade-up">Quer descobrir como fazer sua empresa trabalhar sozinha?</h3>
        <p className="section-sub" data-aos="fade-up" data-aos-delay="80">
          Preencha os dados abaixo e vamos te mostrar <span style={{color:'#db00ff',fontWeight:'600'}}>gratuitamente</span> como sua empresa pode <span style={{color:'#db00ff'}}>receber mais clientes todo mês</span>.
        </p>

        <div className="contact-wrap">
          <div className="form-card" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="nome">Seu nome <span style={{color:'#db00ff'}}>*</span></label>
                <input 
                  id="nome" 
                  name="nome" 
                  type="text" 
                  placeholder="Como podemos te chamar?" 
                  required 
                  autoComplete="name"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Seu melhor email <span style={{color:'#db00ff'}}>*</span></label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="whats">WhatsApp (para contato rápido)</label>
                <input 
                  id="whats" 
                  name="whats" 
                  type="tel" 
                  placeholder="(11) 9 9999-9999" 
                  autoComplete="tel"
                  value={formData.whats}
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <label htmlFor="motivo">Qual é o seu negócio?</label>
                <textarea 
                  id="motivo" 
                  name="motivo" 
                  placeholder="Conte um pouco sobre seu negócio. O que você vende? Qual sua maior dificuldade hoje?"
                  value={formData.motivo}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-actions">
                <button className="btn primary" type="submit">
                  Quero descobrir como funciona
                </button>
                <span className="note">Resposta em até <span style={{color:'#db00ff'}}>24h</span> • <strong style={{color:'#db00ff'}}>Totalmente gratuito</strong></span>
              </div>
              {showSuccess && (
                <div className="success">
                  Perfeito! Vamos te mostrar como fazer sua empresa trabalhar 24 horas por dia para você.
                </div>
              )}
              {showError && (
                <div className="error">
                  Por favor, preencha seu nome e email para continuar.
                </div>
              )}
            </form>
          </div>
          <div className="card" data-aos="fade-left">
            <h4>Por que a Dracobits é diferente?</h4>
            <p>
              Não vendemos apenas um site. Criamos um <strong style={{color:'#db00ff'}}>sistema completo</strong> que faz sua empresa <span style={{color:'#db00ff'}}>trabalhar sozinha</span> e trazer clientes todo dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;