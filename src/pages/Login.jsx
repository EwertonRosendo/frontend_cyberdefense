import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Importa o CSS específico da página de login
import "./Login.css";

// Importa o hook para criar estados (armazenar valores no componente)
import { useState } from "react";

// Componente principal da página de login
function Login() {
  // Cria a função de navegação (redirecionamento de rotas)
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Estados para armazenar o e-mail e a senha digitados pelo usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função executada ao enviar o formulário
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Verificação rápida de login para administrador (sem usar banco de dados)
    if (email === "testeadm@email.com" && password === "123456") {
      navigate("/denuncia"); // ← trocar aqui pela rota correta da página de admin quando for criada
      return; // Encerra a função aqui se for admin
    }

    await axios
      .post(`${apiUrl}/sessions/create`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          const userId = response.data.user.id;
          const userToken = response.data.token;
          const userSchool = response.data.user.school;

          Cookies.set("userId", userId, { expires: 1 });
          Cookies.set("userToken", userToken, { expires: 1 });
          Cookies.set("userSchool", userSchool, { expires: 1 });

          console.log("id do usuário:" + userId);
          console.log("token do usuário:" + userToken);
          console.log("escola do usuário:" + userSchool);
          navigate("/denuncia");
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  // Estrutura visual (JSX) da página de login
  return (
    <div>
      {/* Cabeçalho da página */}
      <header>
        <div className="header-content">
          <div className="logo-container">
            {/* Logo do sistema */}
            <img
              src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
              alt="Shield Icon"
              className="shield-icon"
            />
            <span className="portal-name">CyberDefense Portal</span>
          </div>

          {/* Botão de alternar tema (claro/escuro) */}
        </div>
      </header>

      {/* Conteúdo principal da página */}
      <main>
        <div className="login-card">
          {/* Título e descrição */}
          <div className="login-header">
            <h1 className="login-title">Entra</h1>
            <p className="login-subtitle">
              Todos merecem uma chance de
              <br />
              serem ouvidos
            </p>
          </div>

          {/* Formulário de login */}
          <form className="login-form" id="login-form" onSubmit={handleLogin}>
            {/* Campo de e-mail */}
            <div className="form-group">
              <label htmlFor="email">Endereço de e-mail</label>
              <input
                className="custom-select"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            {/* Campo de senha */}
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                className="custom-select"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                placeholder="Digite sua senha"
                required
              />
            </div>

            {/* Opções extras: lembrar senha e link de recuperação */}
            <div className="form-options">
              <div className="remember-option">
                <input type="checkbox" id="remember" />
                <label>Lembrar Senha?</label>
              </div>
              <a href="#" className="forgot-password">
                Esqueceu a Senha?
              </a>
            </div>

            {/* Botão de login */}
            <button type="submit" className="login-button" style={{color:"white", fontWeight:"bold", backgroundColor:"#1b6de0"}}>
              fazer login
            </button>
          </form>

          {/* Link para página de cadastro */}
          <div className="signup-link">
            <span className="signup-text" style={{backgroundColor:"white", fontSize:"15px"}}>Não tem uma conta? </span>
            <button
              onClick={() => navigate("/cadastro")}
              className="signup-action"
              style={{backgroundColor:"white", fontSize:"15px", color:"#434343"}}
            >
              Click aqui
            </button>
          </div>

          {/* Termos e políticas */}
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

      {/* Rodapé da página */}
      <footer>
        <div className="footer-content">
          <div className="copyright">
            © 2025 CyberDefense Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes do sistema
export default Login;
