/* import { useNavigate } from "react-router-dom";*/
import "./Conclusao.css";

function Conclusao() {
  /*const navigate = useNavigate(); */
  return (
    <body>
      <div className="container">
        <header>
          <div className="header-content">
            <div className="logo-container">
              <img
                src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                alt="Shield Icon"
                className="shield-icon"
              />
              <span className="portal-name">CyberDefense</span>
            </div>

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
        </header>

        <main>
          <section className="case-status-section">
            <div className="case-status-container">
              <h2 className="case-status-title">Case Status</h2>
              <div className="status-steps">
                <div className="status-step">
                  <div className="status-icon completed"></div>
                  <span className="status-text">Evidência Recebida</span>
                </div>
                <div className="status-bar">
                  <div className="status-bar-filled"></div>
                </div>
                <div className="status-step">
                  <div className="status-icon"></div>
                  <span className="status-text">Em Análise</span>
                </div>
                <div className="status-bar"></div>
                <div className="status-step">
                  <div className="status-icon"></div>
                  <span className="status-text">Enviado a Instituição</span>
                </div>
              </div>
            </div>
          </section>

          <section className="resposta-agressor">
            <h2>Resposta do acusado</h2>
            <div id="respostaTextoagressor">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              eligendi illum ut nam sequi necessitatibus expedita, error tenetur
              rem, molestias quas officia doloribus? Voluptas ea aperiam
              obcaecati reiciendis ipsum aspernatur?
            </div>
          </section>

          <section className="resposta-escola">
            <h2>Resposta da Instituição</h2>
            <div id="respostaTextoinstituição">
              Aguardando resposta da instituição...
            </div>
          </section>

          <section className="review-process-section">
            <div className="review-process-container">
              <div className="review-process-nav">
                <button className="nav-button active">
                  Como funciona o processo de revisão?
                </button>
                <button className="nav-button">Seus direitos</button>
                <button className="nav-button">
                  O que acontece após o envio?
                </button>
              </div>
              <div className="review-process-content">
                <h2 className="review-process-title">Processo de Revisão</h2>
                <p className="review-process-description">
                  Nossa equipe analisa cuidadosamente todas as evidências
                  enviadas dentro de 48 horas. Garantimos um processo de
                  avaliação justo e minucioso, mantendo rigorosos padrões de
                  confidencialidade.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-content">
              <nav className="footer-nav">
                <a href="#" className="footer-link">
                  Termos de Uso
                </a>
                <a href="#" className="footer-link">
                  Política de Privacidade
                </a>
                <a href="#" className="footer-link">
                  Contato
                </a>
                <a href="#" className="footer-link">
                  Ajuda
                </a>
              </nav>
              <button className="report-button">
                <span>Reportar problema</span>
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Report icon"
                  className="report-icon"
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default Conclusao;
