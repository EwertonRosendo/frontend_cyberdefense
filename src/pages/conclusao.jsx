/* import { useNavigate } from "react-router-dom";*/
import "./conclusao.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Conclusao() {
  /*const navigate = useNavigate(); */
  /*const [email, setEmail] = useState("");*/
  const userId = Cookies.get("userId");
  const userToken = Cookies.get("userToken");
  const [respagressor, setRespAgressor] = useState("resposta do acusado");
  const [respinstituicao, setRespInstituicao] = useState(
    "Aguardando resposta da instituição..."
  );

  /*const handleConclusao = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
   
    await axios
      .post(`${apiUrl}/cases/`${id}`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response.status);        
      })
      .catch(function (error) {
        console.log(error);
      });
  };*/

  return (
    <body>
      <div>
        <header>
          <div className="conclusao-header-content">
            <div className="conclusao-logo-container">
              <img
                src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                alt="Shield Icon"
                className="conclusao-shield-icon"
              />
              <span className="conclusao-portal-name">CyberDefense</span>
            </div>

            <button
              className="conclusao-theme-toggle"
              id="theme-toggle"
              aria-label="Alternar tema"
            >
              <svg
                className="conclusao-sun-icon"
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
                className="conclusao-moon-icon"
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

        <div className="conclusao-main">
          <section className="conclusao-case-status-section">
            <div className="conclusao-case-status-container">
              <h2 className="conclusao-case-status-title">Case Status</h2>
              <div className="conclusao-status-steps">
                <div className="conclusao-status-step">
                  <div className="conclusao-status-icon completed"></div>
                  <span className="conclusao-status-text">Evidência Recebida</span>
                </div>
                <div className="conclusao-status-bar">
                  <div className="conclusao-status-bar-filled"></div>
                </div>
                <div className="conclusao-status-step">
                  <div className="conclusao-status-icon"></div>
                  <span className="conclusao-status-text">Em Análise</span>
                </div>
                <div className="conclusao-status-bar"></div>
                <div className="conclusao-status-step">
                  <div className="conclusao-status-icon"></div>
                  <span className="conclusao-status-text">Enviado a Instituição</span>
                </div>
              </div>
            </div>
          </section>

          <section className="conclusao-resposta-agressor">
            <h2>Resposta do acusado</h2>
            <div id="respostaTextoagressor">{respagressor}</div>
          </section>

          <section className="conclusao-resposta-escola">
            <h2>Resposta da Instituição</h2>
            <div id="respostaTextoinstituição">{respinstituicao}</div>
          </section>

          <section className="conclusao-review-process-section">
            <div className="conclusao-review-process-container">
              <div className="conclusao-review-process-nav">
                <button className="conclusao-nav-button active">
                  Como funciona o processo de revisão?
                </button>
                <button className="conclusao-nav-button">Seus direitos</button>
                <button className="conclusao-nav-button">
                  O que acontece após o envio?
                </button>
              </div>
              <div className="conclusao-review-process-content">
                <h2 className="conclusao-conclusao-review-process-title">Processo de Revisão</h2>
                <p className="conclusao-review-process-description">
                  Nossa equipe analisa cuidadosamente todas as evidências
                  enviadas dentro de 48 horas. Garantimos um processo de
                  avaliação justo e minucioso, mantendo rigorosos padrões de
                  confidencialidade.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="conclusao-site-footer">
          <div className="conclusao-footer-container">
            <div className="conclusao-footer-content">
              <nav className="conclusao-footer-nav">
                <a href="#" className="conclusao-footer-link">
                  Termos de Uso
                </a>
                <a href="#" className="conclusao-footer-link">
                  Política de Privacidade
                </a>
                <a href="#" className="conclusao-footer-link">
                  Contato
                </a>
                <a href="#" className="conclusao-footer-link">
                  Ajuda
                </a>
              </nav>
              <button className="conclusao-report-button">
                <span>Reportar problema</span>
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Report icon"
                  className="conclusao-report-icon"
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
