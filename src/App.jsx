import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { useRef } from "react";


function App() {
  const navigate = useNavigate();
  const footerRef = useRef(null); // 1. Criando a referência
  const scrollToFooter = () => {
  footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App-body">
      <div className="App-site-header">
        <div className="App-header-container">
          <div className="App-header-content">
            <div className="logo-container">
            {/* Logo do sistema */}
            <img
              src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
              alt="Shield Icon"
              className="shield-icon"
            />
            <span className="portal-name">CyberDefense Portal</span>
          </div>
            <nav className="App-main-nav">
              <button className="App-register-button"  href="#" onClick={() => navigate("/")} >Página inicial</button >              
              <button  href="#" onClick={() => navigate("/administracao")}>Analisar casos</button >
              <button onClick={scrollToFooter}>Contato</button>

            </nav>
            <div className="App-auth-buttons">
              <button className="App-register-button" onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/cadastro")} className="App-register-button">Registrar</button>              
            </div>
          </div>
        </div>
      </div>

      <div className="App-main-frame">
        <section className="App-section hero-section">
          <div>
            <div className="App-hero-content">
              <h1 className="App-hero-title">
                Acusado por Cyberbullying? Revele a sua versão.
              </h1>
              <p className="App-hero-subtitle">
                Pronto para buscar ajuda? deixe nos mediar a situação.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="App-cta-button"
                id="redirect-button"
              >
                Click aqui e diga sua Versão
                <br />
              </button>
            </div>
          </div>
        </section>

        <section className="App-section features-section">
          <div>
            <div className="App-features-container">
              <div className="App-feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/improve-school-page/src/pages/img/escudo.png"
                  alt="Ícone de Segurança"
                  className="App-feature-icon"
                />
                <h3 className="App-feature-title">Envio Seguro</h3>
                <p className="App-feature-description">
                  Envie capturas de tela, mensagens e documentos com segurança
                  para apoiar o seu caso.
                </p>
              </div>

              <div className="App-feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/improve-school-page/src/pages/img/martelo.png"
                  alt="Ícone de Análise Legal"
                  className="App-feature-icon"
                />
                <h3 className="App-feature-title">Análise</h3>
                <p className="App-feature-description">
                  Sua evidência estará acessível apenas para você e para o responsável da instituição.
                </p>
              </div>

              <div className="App-feature-card">
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/improve-school-page/src/pages/img/terceito_icone.png"
                  alt="Ícone de Privacidade"
                  className="App-feature-icon"
                />
                <h3 className="App-feature-title">Privacidade Protegida</h3>
                <p className="App-feature-description">
                  Suas informações são tratadas com total confidencialidade e
                  proteção de dados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="App-section how-it-works-section">
          <div>
            <h2 className="App-section-title">Como Funciona</h2>
            <div className="App-steps-container">
              <div className="App-step">
                <div className="App-step-number step-green">
                  <span>1</span>
                </div>
                <h3 className="App-step-title">Criar Conta</h3>
                <p className="App-step-description">Cadastre-se com seus dados.</p>
              </div>

              <div className="App-step">
                <div className="App-step-number step-dark">
                  <span>2</span>
                </div>
                <h3 className="App-step-title">Enviar Evidências e Provas</h3>
                <p className="App-step-description">
                  Envie seus documentos para analisarmos.
                </p>
              </div>

              <div className="App-step">
                <div className="App-step-number step-dark">
                  <span>3</span>
                </div>
                <h3 className="App-step-title">Fornecer Contexto</h3>
                <p className="App-step-description">Explique sua situação.</p>
              </div>

              <div className="App-step">
                <div className="App-step-number step-dark">
                  <span>4</span>
                </div>
                <h3 className="App-step-title">Processo de Análise</h3>
                <p className="App-step-description">
                  A Instituição irá avaliar seu caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="App-section cta-section">
          <div>
            <div className="App-cta-content">
              <h2 className="App-section-title">
                Pronto Para Nos Enviar Seu Caso?
              </h2>
              <p className="App-section-subtitle">
                Dê o primeiro passo para limpar seu nome.
              </p>
              <div className="App-buttons-container">
                <button className="App-primary-button" onClick={() => navigate("/login")}>Começar Agora</button>
                <button className="App-secondary-button">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="App-site-footer">
        <div className="App-footer-container">
          <div className="App-footer-content">
            <div className="App-footer-column">
              <h3 className="App-footer-title">CyberDefense</h3>
              <p className="App-footer-description">
                Apoiando a defesa justa contra acusações de bullying.
              </p>
            </div>

            <div className="App-footer-column">
              <h3 className="App-footer-title">Links Rapidos</h3>
              <ul className="App-footer-links">
                <li>
                  <a href="#">Tela Inicial</a>
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

            <div className="App-footer-column">
              <h3 className="App-footer-title">Legal</h3>
              <ul className="App-footer-links">
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

            <div className="App-footer-column">
              <h3 className="App-footer-title" ref={footerRef}>Contato</h3>
              <ul className="App-footer-contact">
                <li>
                  <img
                    src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/improve-school-page/src/pages/img/email.png"
                    alt="Email icon"
                    className="App-contact-icon"
                  />
                  <span style={{ fontSize: '12px' }}>
                    Email: cyberbullying.group.uninassau@gmail.com
                  </span>

                  
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/improve-school-page/src/pages/img/telefone.png"
                    alt="Phone icon"
                    className="App-contact-icon"
                  />
                  <span>Telefone: +81 (55) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="App-copyright">
            <p>© 2025 CyberDefense. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;