import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
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
              <button className="login-button">entrar na conta</button>
              <button className="register-button">se registrar</button>
              <button
                className="theme-toggle"
                id="theme-toggle"
                aria-label="Alternar tema"
              >
                <svg
                  className="sun-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  style={{ display: "none" }}
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
        <section className="section hero-section">
          <div>
            <div className="hero-content">
              <h1 className="hero-title">
                Está sofrendo alguma denúncia sobre práticas de cyberbullying?
              </h1>
              <p className="hero-subtitle">
                Pronto para buscar ajuda? deixe nos mediar a situação.
              </p>
              <button onClick={() => navigate('/login')} className="cta-button" id="redirect-button">
                Click aqui e diga sua Versão
                <br />
              </button>
            </div>
          </div>
        </section>

        <section className="section features-section">
          <div >
            <div className="features-container">
              <div className="feature-card">
                <img
                  src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
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
                  src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
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
                  src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
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
          <div >
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
                  As autoridades irão avaliar seu caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div >
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
                    src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
                    alt="Email icon"
                    className="contact-icon"
                  />
                  <span>Email: support&#64;cyberdefense.com</span>
                </li>
                <li>
                  <img
                    src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
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

export default Home;
