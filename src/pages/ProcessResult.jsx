import { useEffect } from "react";
import "./admp1.css"; // Ensure the CSS file is imported

const ProcessResult = () => {
  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");

    // Check for saved theme preference
    const savedTheme =
      localStorage.getItem("darkMode") === "true" ? "dark" : "light";
    html.setAttribute("data-theme", savedTheme);

    // Update icons based on current theme
    if (savedTheme === "dark") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }

    // Theme toggle click handler
    themeToggle.addEventListener("click", function () {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("darkMode", newTheme === "dark");

      // Toggle icon visibility
      if (newTheme === "dark") {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      }
    });

    // Add functionality to navigation buttons
    document
      .querySelectorAll(".login-button, .register-button")
      .forEach((button) => {
        button.addEventListener("click", function () {
          window.location.href = "login.html";
        });
      });

    return () => {
      // Cleanup event listeners on component unmount
      themeToggle.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div lang="pt-BR" data-theme="light">
      <header className="site-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <a href="index.html">CyberDefense</a>
            </div>
            <nav className="main-nav">
              <a href="index.html">Início</a>
              <a href="biblioteca.html">Biblioteca</a>
              <a href="#">Contato</a>
            </nav>
            <div className="auth-buttons">
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

      <main className="container mx-auto px-4 py-8">
        {/* Process Header */}
        <div className="info-card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Conclusão do Processo</h1>
            <span className="status-badge confirmed">
              <i className="fa-solid fa-check-circle mr-2"></i>
              Confirmado
            </span>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="text-gray-600 dark:text-gray-400">
                Data da Análise Final:
              </span>
              <span className="font-medium">04/04/2025</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="text-gray-600 dark:text-gray-400">
                Moderador Responsável:
              </span>
              <div className="flex items-center space-x-2">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456"
                  alt="Moderador"
                  className="h-6 w-6 rounded-full"
                />
                <span className="font-medium">MOD#8742</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-progress" style={{ height: "100%" }}></div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="flex items-center mb-4">
                <div className="icon-circle blue">
                  <i className="fa-solid fa-file-lines"></i>
                </div>
                <h3 className="text-lg font-semibold">
                  Recebimento da Denúncia
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Denúncia recebida e registrada no sistema para análise inicial.
              </p>
            </div>
            <div className="timeline-dot completed"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="flex items-center mb-4">
                <div className="icon-circle green">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <h3 className="text-lg font-semibold">
                  Análise das Evidências
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Evidências analisadas e confirmadas pela equipe de moderação.
              </p>
            </div>
            <div className="timeline-dot completed"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="flex items-center mb-4">
                <div className="icon-circle red">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <h3 className="text-lg font-semibold">Decisão final</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Violação confirmada e medidas disciplinares aplicadas.
              </p>
            </div>
            <div className="timeline-dot completed"></div>
          </div>
        </div>

        {/* Sanctions */}
        <div className="info-card">
          <h2 className="text-xl font-semibold mb-6">Sanções Aplicadas</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fa-solid fa-ban text-red-500 mr-3"></i>
                <h3 className="font-medium">Suspensão da Conta</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                30 dias (até 04/05/2025)
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fa-solid fa-history text-yellow-500 mr-3"></i>
                <h3 className="font-medium">Registro no Histórico</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Violação registrada permanentemente
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fa-solid fa-user-slash text-blue-500 mr-3"></i>
                <h3 className="font-medium">Restrições de Contato</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Bloqueio permanente de interação com a vítima
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="info-card mt-8">
          <h2 className="text-xl font-semibold mb-6">
            Obrigada por utilizar nosso serviço!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Informamos que o processo foi encerrado com sucesso. Caso tenha
            dúvidas ou precise de suporte adicional, falar com a diretoria da
            sua escola.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="action-button primary">
              <i className="fa-solid fa-rotate mr-2"></i>
              Finalizar Revisão
            </button>
            <button className="action-button secondary">
              <i className="fa-solid fa-headset mr-2"></i>
              Contatar Suporte
            </button>
            <a href="index.html" className="action-button secondary">
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Voltar ao Início
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CyberDefense</h3>
              <p className="text-gray-400">
                Apoiando a defesa justa contra acusações de bullying.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">suporte@cyberdefense.com</p>
              <p className="text-gray-400">(11) 0000-0000</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="index.html" className="hover:text-white">
                    Tela de Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 CyberDefense. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProcessResult;
