import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./cadastro.css";
import axios from "axios";

function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;  
  const [loading, setLoading] = useState(true);
  const [schools, setSchools] = useState([]);

  const [school, setSchool] = useState([]);



  const handleCadastro = async (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await axios
        .post(`${apiUrl}/users.json`, {
          user: {
            email: email,
            password: password,
            school: school,
          },
        })
        .then(function (response) {
          
          if (response.status === 201) {
            navigate("/login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      // Tratar erros da requisição
      
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

    const get_schools = async () => {
  try {
      const response = await axios.get(`${apiUrl}/schools.json`, {
       
      });
      
      setSchools(response.data || []);  // Garante array
    } catch (error) {
     
    } finally {
      setLoading(false);
    }
  };
    useEffect(() => {
      get_schools();
      
    }, []);
  const renderSchools = (schools) => {
    
  if (!schools || schools.length === 0) {
    return <p>Sem perguntas disponíveis.</p>;
  }

  return schools.map((school, index) => (
    <option key={index} value={school.name} >
      {capitalizeFirstLetter(school.name)}
    </option>  
  ));
};

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img
              src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
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

            <div className="remember-option" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar Senha?</label>

              <select 
                name="schools" 
                id="schools" 
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              >
                <option value={0} key={999}>Selecione a sua instituição</option>
                {loading ? (
                  <option disabled key={998}>Carregando instituições...</option>
                ) : (
                  renderSchools(schools)
                )}
              </select>

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
