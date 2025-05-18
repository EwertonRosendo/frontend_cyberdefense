import { useEffect } from "react";
import "./denuncia.css"; // Importando o CSS para estilização

const AdminPage = () => {
  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");

    // Verificar se há preferência salva
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Aplicar modo escuro se necessário
    if (isDarkMode) {
      document.body.classList.add("dark");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }

    // Alternar modo escuro ao clicar no botão
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");

      // Alternar ícones
      sunIcon.style.display = isDark ? "none" : "block";
      moonIcon.style.display = isDark ? "block" : "none";

      // Salvar preferência
      localStorage.setItem("darkMode", isDark);
    });

    // Implementação da pesquisa inteligente combinada
    const searchInput = document.getElementById("search-acusado");
    const searchProcessInput = document.getElementById("search-process");
    const acusadosList = document.getElementById("acusados-list");
    const acusadosRows = Array.from(acusadosList.querySelectorAll("tr"));

    function filterList() {
      const nameTerm = searchInput.value.toLowerCase().trim();
      const processTerm = searchProcessInput.value.toLowerCase().trim();

      const filteredRows = acusadosRows
        .map((row) => {
          const name = row.getAttribute("data-name").toLowerCase();
          const numero = row.getAttribute("data-process-number").toLowerCase();

          let prioridade = -1;

          if (
            (name.startsWith(nameTerm) && nameTerm) ||
            (numero.startsWith(processTerm) && processTerm)
          ) {
            prioridade = 2;
          } else if (
            (name.includes(nameTerm) && nameTerm) ||
            (numero.includes(processTerm) && processTerm)
          ) {
            prioridade = 1;
          }

          return { element: row, prioridade };
        })
        .filter((r) => r.prioridade !== -1);

      // Ordenar por prioridade
      filteredRows.sort((a, b) => b.prioridade - a.prioridade);

      // Ocultar todas as linhas
      acusadosRows.forEach((row) => (row.style.display = "none"));

      // Mostrar e reordenar as filtradas
      filteredRows.forEach((r) => {
        r.element.style.display = "";
        acusadosList.appendChild(r.element);
      });
    }

    searchInput.addEventListener("input", filterList);
    searchProcessInput.addEventListener("input", filterList);

    // Implementação dos botões "Ver detalhes"
    const viewDetailsButtons = document.querySelectorAll(".view-details");

    viewDetailsButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const acusadoId = this.getAttribute("data-id");
        window.location.href = `analise.html?id=${acusadoId}`; // Redireciona para analise.html
      });
    });

    return () => {
      themeToggle.removeEventListener("click", () => {});
      searchInput.removeEventListener("input", filterList);
      searchProcessInput.removeEventListener("input", filterList);
    };
  }, []);

  return (
    <div>
      <header className="site-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <a href="#">CyberDefense</a>
            </div>
            <div className="auth-buttons">
              <button className="login-button">Acesso Governamental</button>
              <button className="register-button">Sair</button>
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Defensoria Estudantil</h1>
              <p className="hero-subtitle">
                Acesso Restrito da Defensoria Escolar.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8">
          <section
            id="dashboard-stats"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Casos Recebidos
              </h2>
              <p className="text-3xl font-bold text-blue-500">
                1,284
                <span className="text-blue-600 inline-block">
                  <i className="fa-solid fa-inbox text-2xl"></i>
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Defesas Cadastradas
              </h2>
              <p className="text-3xl font-bold text-green-500">
                957
                <span className="text-green-600 inline-block">
                  <i className="fa-solid fa-file-shield text-2xl"></i>
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Em Análise
              </h2>
              <p className="text-3xl font-bold text-yellow-500">
                327
                <span className="text-yellow-600 inline-block">
                  <i className="fa-solid fa-magnifying-glass-chart text-2xl"></i>
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Concluídos
              </h2>
              <p className="text-3xl font-bold text-emerald-500">
                630
                <span className="text-purple-600 inline-block">
                  <i className="fa-solid fa-check-double text-2xl"></i>
                </span>
              </p>
            </div>
          </section>

          <section
            id="search-section"
            className="bg-white rounded-lg shadow mb-8 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Busca Avançada
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="search-container">
                <i className="fa-solid fa-search search-icon"></i>
                <input
                  type="text"
                  id="search-acusado"
                  placeholder="Nome ou CPF"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
              <input
                type="text"
                id="search-process"
                placeholder="Nº do Processo"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Palavra-chave"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="col-span-1 md:col-span-3 bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
              >
                Buscar
              </button>
            </form>
          </section>

          <section id="cases-list" className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Casos Recentes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">Acusado</th>
                    <th className="px-4 py-3 text-left">Nº do Processo</th>
                    <th className="px-4 py-3 text-left">Data</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Ações</th>
                  </tr>
                </thead>
                <tbody id="acusados-list">
                  {/* Exemplo de linha de caso, você pode mapear os dados aqui */}
                  <tr
                    className="border-t"
                    data-name="Everton Vitor"
                    data-process-number="123456789"
                  >
                    <td className="px-4 py-3">Everton Vitor</td>
                    <td className="px-4 py-3">123456789</td>
                    <td className="px-4 py-3">15/03/2025</td>
                    <td className="px-4 py-3">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        Em Análise
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="text-blue-600 hover:text-blue-800 view-details"
                        data-id="everton-vitor"
                      >
                        <i className="fa-solid fa-eye mr-2"></i>Ver Detalhes
                      </button>
                    </td>
                  </tr>
                  {/* Adicione mais linhas conforme necessário */}
                </tbody>
              </table>
            </div>
          </section>
        </div>
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
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12e3e5c0-7957-484a-9862-266b72810b4c"
                    alt="Email icon"
                    className="contact-icon"
                  />
                  <span>Email: support@cyberdefense.com</span>
                </li>
                <li>
                  <img
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6274e94d-2dba-412e-9de5-1484acf3cbb1"
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
    </div>
  );
};

export default AdminPage;
