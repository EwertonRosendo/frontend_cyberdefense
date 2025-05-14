// Importa o hook para navegar entre páginas
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

    // Se não for admin, tenta autenticar com o servidor (API backend)
    try {
      // Requisição GET para o backend simulando uma busca de usuário
      const response = await fetch("http://localhost:3001/user");
      const data = await response.json(); // Converte o resultado da resposta para JSON

      // Verifica se o usuário existe e se as credenciais coincidem
      if (
        data.user &&
        data.user.email === email &&
        data.user.password === password
      ) {
        navigate("/denuncia"); // Redireciona para a página principal do sistema
      } else {
        alert("E-mail ou senha incorretos."); // Alerta se os dados não forem compatíveis
      }
    } catch (error) {
      // Caso ocorra um erro de rede ou no servidor
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  // Estrutura visual (JSX) da página de login
  return (
    <div className="container">
      {/* Cabeçalho da página */}
      <header>
        <div className="header-content">
          <div className="logo-container">
            {/* Logo do sistema */}
            <img
              src="https://i.superesportes.com.br/QoSwud83MOFbOmOL7spboQiRuHs=/750x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/11/17/3948189/20211117200218618057o.jpg"
              alt="Shield Icon"
              className="shield-icon"
            />
            <span className="portal-name">Digital Defense Portal</span>
          </div>

          {/* Botão de alternar tema (claro/escuro) */}
          <button
            className="theme-toggle"
            id="theme-toggle"
            aria-label="Alternar tema"
          >
            {/* Ícone do Sol */}
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

            {/* Ícone da Lua (inicialmente escondido) */}
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
            <button type="submit" className="login-button">
              fazer login
            </button>
          </form>

          {/* Link para página de cadastro */}
          <div className="signup-link">
            <span className="signup-text">não tem uma conta?</span>
            <button
              onClick={() => navigate("/cadastro")}
              className="signup-action"
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
            © 2025 Digital Defense Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes do sistema
export default Login;
