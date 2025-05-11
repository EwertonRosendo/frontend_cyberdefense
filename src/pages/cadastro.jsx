import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate(); 
  return (
    <body>
      <div className="container">
        <header>
          <div className="header-content">
            <div className="logo-container">
              <img
                src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
                alt="Shield Icon"
                className="shield-icon"
              />
              <span className="portal-name">Digital Defense Portal</span>
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
                style={{display: "none"}}
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
          <div className="login-card">
            <div className="login-header">
              <h1 className="login-title">cadastro</h1>
              <p className="login-subtitle">
                Todos merecem uma chance de
                <br />
                serem ouvidos
              </p>
            </div>

            <form className="login-form" id="cadastro-form">
              <div className="form-group">
                <label>seu de e-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="form-group">
                <label>crie sua nova senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="form-group">
                <label>confirmar senha</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="remember-option" style={{marginBottom: "20px"}}>
                <input type="checkbox" id="remember" />
                <label>Lembrar Senha?</label>
              </div>

              <button onClick={() => navigate('/login')}  type="submit" className="login-button">
                <a href="">Cadastrar</a>
              </button>
            </form>

            <div className="terms-container">
              <p className="terms-text">Ao entrar, você concorda com nossos</p>
              <div className="terms-links">
                <a href="#" className="terms-link">
                  Termos de Serviço
                </a>
                <span className="terms-separator">•</span>
                <a href="#" className="terms-link">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="footer-content">
            <div className="copyright">
              © 2025 Digital Defense Portal. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default Cadastro;
