import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Cadastro.css";
import axios from "axios";

function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleCadastro = async (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // Verificar se o email já existe
      const response = await axios.get(`${apiUrl}/users.json`);
      const users = response.data;

      // Verificar se o email já está cadastrado
      const userExists = Object.values(users).some(
        (user) => user.email === email
      );

      if (userExists) {
        alert("Usuário já cadastrado com esse email.");
        return;
      }

      // Se o email não existe, realizar o cadastro
      await axios
        .post(`${apiUrl}/users.json`, {
          user: {
            email: email,
            password: password,
          },
        })
        .then(function (response) {
          console.log(response.status);
          if (response.status === 201) {
            navigate("/login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      // Tratar erros da requisição
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

  return (
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
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Cadastro</h1>
            <p className="login-subtitle">
              Todos merecem uma chance de
              <br />
              serem ouvidos
            </p>
          </div>

          <form
            className="login-form"
            id="cadastro-form"
            onSubmit={handleCadastro}
          >
            <div className="form-group">
              <label htmlFor="email">Seu e-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Crie sua nova senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirmar senha</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember-option" style={{ marginBottom: "20px" }}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar Senha?</label>
            </div>

            <button type="submit" className="login-button">
              Cadastrar
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
  );
}

export default Cadastro;
