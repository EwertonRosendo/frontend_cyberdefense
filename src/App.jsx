import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./pages/Home.css";

function App() {
  const navigate = useNavigate();

  return (
    <body>
      <header className="site-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <a href="#">CyberDefense</a>
            </div>
            <nav className="main-nav">
              <a href="#">Página inicial</a>
              <a href="#">Portal de defensoria</a>
              <a href="#">Analisar casos</a>
              <a href="#">Contato</a>
            </nav>
            <div className="auth-buttons">
              <button className="login-button" style={{color:"white",
                border: "none",
                fontWeight:"bold",                                
                transition: "color 0.3s ease",
                cursor: "pointer",
                backgroundColor:"#1d4ed8", 
                lineHeight:"19px",
                               
              }}>entrar na conta</button>
              <button className="register-button" style={{color:"white", fontWeight:"bold"}}>se registrar</button>
              
            </div>
          </div>
        </div>
      </header>

      <main className="main-frame">
        <section className="section hero-section">
          <div>
            <div className="hero-content">
              <h1 className="hero-title">
                Está sofrendo alguma denúncia sobre práticas de cyberbullying?
              </h1>
              <p className="hero-subtitle">
                Pronto para buscar ajuda? deixe nos mediar a situação.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="cta-button"
                id="redirect-button"
              >
                Click aqui e diga sua Versão
                <br />
              </button>
            </div>
          </div>
        </section>

        <section className="section features-section">
          <div>
            <div className="features-container">
              <div className="feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Ícone de Segurança"
                  className="feature-icon"
                />
                <h3 className="feature-title">Envio Seguro</h3>
                <p className="feature-description">
                  Envie capturas de tela, mensagens e documentos com segurança
                  para apoiar o seu caso.
                </p>
              </div>

              <div className="feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Ícone de Análise Legal"
                  className="feature-icon"
                />
                <h3 className="feature-title">Análise Legal</h3>
                <p className="feature-description">
                  Sua evidência estará acessível apenas para autoridades legais
                  autorizadas e órgãos competentes.
                </p>
              </div>

              <div className="feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Ícone de Privacidade"
                  className="feature-icon"
                />
                <h3 className="feature-title">Privacidade Protegida</h3>
                <p className="feature-description">
                  Suas informações são tratadas com total confidencialidade e
                  proteção de dados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section how-it-works-section">
          <div>
            <h2 className="section-title">Como Funciona</h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number step-green">
                  <span>1</span>
                </div>
                <h3 className="step-title">Criar Conta</h3>
                <p className="step-description">Cadastre-se com seus dados.</p>
              </div>

              <div className="step">
                <div className="step-number step-dark">
                  <span>2</span>
                </div>
                <h3 className="step-title">Enviar Evidências e Provas</h3>
                <p className="step-description">
                  Envie seus documentos para analisarmos.
                </p>
              </div>

              <div className="step">
                <div className="step-number step-dark">
                  <span>3</span>
                </div>
                <h3 className="step-title">Fornecer Contexto</h3>
                <p className="step-description">Explique sua situação.</p>
              </div>

              <div className="step">
                <div className="step-number step-dark">
                  <span>4</span>
                </div>
                <h3 className="step-title">Processo de Análise</h3>
                <p className="step-description">
                  A Instituição irá avaliar seu caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div>
            <div className="cta-content">
              <h2 className="section-title">
                Pronto Para Nos Enviar Seu Caso?
              </h2>
              <p className="section-subtitle">
                Dê o primeiro passo para limpar seu nome.
              </p>
              <div className="buttons-container">
                <button className="primary-button">Começar Agora</button>
                <button className="secondary-button">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">CyberDefense</h3>
              <p className="footer-description">
                Apoiando a defesa justa contra acusações de bullying.
              </p>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Links Rapidos</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">tela de inicio</a>
                </li>
                <li>
                  <a href="#">Enviar Evidência</a>
                </li>
                <li>
                  <a href="#">analisar</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
                <li>
                  <a href="#">Política de Cookies</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contato</h3>
              <ul className="footer-contact">
                <li>
                  <img
                    src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                    alt="Email icon"
                    className="contact-icon"
                  />
                  <span>Email: support&#64;cyberdefense.com</span>
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                    alt="Phone icon"
                    className="contact-icon"
                  />
                  <span>Telefone: +81 (55) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>© 2025 CyberDefense. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
