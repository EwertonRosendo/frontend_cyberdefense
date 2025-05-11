import React, { useState, useEffect } from 'react';/*atenção, todos os lugares onde tem escrito Conclusao, é para ser escrito o nome da pagina que você está querendo criar*/
import "./paginainicial.css";

function Paginainicial() {
   const [darkMode, setDarkMode] = useState(false);

  // Efeito para carregar a preferência de tema do localStorage ao montar o componente
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  // Efeito para aplicar a classe dark-theme ao body quando o estado mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    // Salvar preferência no localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Função para redirecionar para a página de denúncia
  const handleRedirect = () => {
    window.location.href = 'denuncia.html';
  };

  // Função para redirecionar para a página de login
  const handleRegister = () => {
    window.location.href = 'login.html';
  };/*amandinha aqui é onde fica o javascript*/
  return (
           <>
      {/* Header Section */}
      <header className="site-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <a href="#">CyberDefense</a>
            </div>
            <nav className="main-nav">
              <a href="#">biblioteca</a>
              <a href="#">Portal de defensoria</a>
              <a href="#">Analisar casos</a>
              <a href="#">Contato</a>
            </nav>
            <div className="auth-buttons">
              <button className="login-button">entrar na conta</button>
              <button className="register-button" onClick={handleRegister}>
                se registrar
              </button>
              <button 
                className="theme-toggle" 
                id="theme-toggle" 
                aria-label="Alternar tema"
                onClick={toggleTheme}
              >
                <svg 
                  className="sun-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ display: darkMode ? 'none' : 'block' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
                <svg 
                  className="moon-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ display: darkMode ? 'block' : 'none' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-frame">
        {/* Hero Section */}
        <section className="section hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Está sofrendo alguma denúncia online sobre práticas de bullying ? envie suas provas
              </h1>
              <p className="hero-subtitle">
                Essa é uma plataforma segura para que as pessoas acusadas de cyberbullying possam apresentar o seu lado da história com provas que o sustentem.
              </p>
              <button className="cta-button" id="redirect-button" onClick={handleRedirect}>
                click aqui<br />fale sobre seu problema
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features-section">
          <div className="container">
            <div className="features-container">
              {/* Feature Card 1 */}
              <div className="feature-card">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04a60656-53a5-433d-a652-d3e7c0f6a25b" 
                  alt="Ícone de Segurança" 
                  className="feature-icon" 
                />
                <h3 className="feature-title">Envio Seguro</h3>
                <p className="feature-description">
                  Envie capturas de tela, mensagens e documentos com segurança para apoiar o seu caso.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="feature-card">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd6b6012-0701-45f5-921c-8e6ab9e12cf0" 
                  alt="Ícone de Análise Legal" 
                  className="feature-icon" 
                />
                <h3 className="feature-title">Análise Legal</h3>
                <p className="feature-description">
                  Sua evidência estará acessível apenas para autoridades legais autorizadas e órgãos competentes.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="feature-card">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9384a359-9aa1-49eb-a562-e800d3490187" 
                  alt="Ícone de Privacidade" 
                  className="feature-icon" 
                />
                <h3 className="feature-title">Privacidade Protegida</h3>
                <p className="feature-description">
                  Suas informações são tratadas com total confidencialidade e proteção de dados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section how-it-works-section">
          <div className="container">
            <h2 className="section-title">Como Funciona</h2>
            <div className="steps-container">
              {/* Step 1 */}
              <div className="step">
                <div className="step-number step-green">
                  <span>1</span>
                </div>
                <h3 className="step-title">Criar Conta</h3>
                <p className="step-description">Cadastre-se com seus dados.</p>
              </div>

              {/* Step 2 */}
              <div className="step">
                <div className="step-number step-dark">
                  <span>2</span>
                </div>
                <h3 className="step-title">Enviar Evidências e Provas</h3>
                <p className="step-description">Envie seus documentos para analisarmos.</p>
              </div>

              {/* Step 3 */}
              <div className="step">
                <div className="step-number step-dark">
                  <span>3</span>
                </div>
                <h3 className="step-title">Fornecer Contexto</h3>
                <p className="step-description">Explique sua situação.</p>
              </div>

              {/* Step 4 */}
              <div className="step">
                <div className="step-number step-dark">
                  <span>4</span>
                </div>
                <h3 className="step-title">Processo de Análise</h3>
                <p className="step-description">As autoridades irão avaliar seu caso.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-title">Pronto Para Nos Enviar Seu Caso?</h2>
              <p className="section-subtitle">Dê o primeiro passo para limpar seu nome.</p>
              <div className="buttons-container">
                <button className="primary-button">Começar Agora</button>
                <button className="secondary-button">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column">
              <h3 className="footer-title">CyberDefense</h3>
              <p className="footer-description">
                Apoiando a defesa justa contra acusações de bullying.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">Links Rapidos</h3>
              <ul className="footer-links">
                <li><a href="#">tela de inicio</a></li>
                <li><a href="#">Enviar Evidência</a></li>
                <li><a href="#">analisar</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Política de Cookies</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h3 className="footer-title">Contato</h3>
              <ul className="footer-contact">
                <li>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12e3e5c0-7957-484a-9862-266b72810b4c" 
                    alt="Email icon" 
                    className="contact-icon" 
                  />
                  <span>Email: support@cyberdefense.com</span>
                </li>
                <li>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6274e94d-2dba-412e-9de5-1484acf3cbb1" 
                    alt="Phone icon" 
                    className="contact-icon" 
                  />
                  <span>Telefone: +81 (55) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="copyright">
            <p>© 2025 CyberDefense. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
      /* amandinha apaga essa linha e coloca aqui o código do teu html*/
  );
}

export default Paginainicial; 