import "./Analise.css";

function Analise() {
  return (
    <body>
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
                  style="display: none;"
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
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">CyberDefense</h1>
              <p className="hero-subtitle">
                Acesso Restrito da Defensoria Federal.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8">
          <section
            id="case-details"
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-8"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Caso #2025-0123</h2>
                  <p className="text-gray-600 dark:text-gray-200">
                    Registrado em 15/03/2025
                  </p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                  Em Análise
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div id="victim-info">
                  <h3 className="text-lg font-semibold mb-4">
                    Informações da Vítima
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fa-solid fa-user w-6 text-blue-600"></i>
                      <span className="ml-2">Everton Vitor</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-id-card w-6 text-blue-600"></i>
                      <span className="ml-2">123.456.789-00</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-phone w-6 text-blue-600"></i>
                      <span className="ml-2">(11) 98765-4321</span>
                    </div>
                  </div>
                </div>
                <div id="incident-info">
                  <h3 className="text-lg font-semibold mb-4">
                    Detalhes da Ocorrência
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fa-solid fa-calendar w-6 text-blue-600"></i>
                      <span className="ml-2">Data: 14/03/2025</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-tag w-6 text-blue-600"></i>
                      <span className="ml-2">Tipo: Cyberbullying</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-location-dot w-6 text-blue-600"></i>
                      <span className="ml-2">Plataforma: Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="case-evidence"
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-8"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Evidências do Caso</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Screenshot_01.jpg
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fa-solid fa-download"></i>
                    </button>
                  </div>
                  <img
                    className="w-full h-48 object-cover rounded"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e91e257ce-fd1eb8c8c6df7496b5af.png"
                    alt="screenshot of social media post with cyberbullying content, blurred for privacy"
                  />
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Áudio_Prova.mp3</span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fa-solid fa-download"></i>
                    </button>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 h-48 rounded flex items-center justify-center">
                    <i className="fa-solid fa-file-audio text-4xl text-green-600 dark:text-green-400"></i>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Documentação.pdf
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fa-solid fa-download"></i>
                    </button>
                  </div>
                  <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                    <i className="fa-solid fa-file-pdf text-4xl text-red-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="case-analysis"
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-8"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Análise e Resposta</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <label className="block text-sm font-medium mb-2">
                    Status do Caso
                  </label>
                  <select className="w-full border rounded-lg px-4 py-2">
                    <option>Em Análise</option>
                    <option>Aguardando Evidências</option>
                    <option>Em Investigação</option>
                    <option>Concluído</option>
                  </select>
                </div>
                <div className="border rounded-lg p-4">
                  <label className="block text-sm font-medium mb-2">
                    Parecer Policial
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-4 py-2 h-32"
                    placeholder="Digite seu parecer sobre o caso..."
                  ></textarea>
                </div>
                <div className="border rounded-lg p-4">
                  <label className="block text-sm font-medium mb-2">
                    Próximos Passos
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Solicitar mais evidências</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Entrar em contato com a plataforma</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Agendar depoimento</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Salvar Rascunho
                  </button>
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    id="send-analysis"
                  >
                    Enviar Análise
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          id="notification"
          className="hidden fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
        >
          Análise enviada com sucesso!
        </div>

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
                <h3 className="footer-title">Links Rápidos</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Tela de Início</a>
                  </li>
                  <li>
                    <a href="#">Enviar Evidência</a>
                  </li>
                  <li>
                    <a href="#">Analisar</a>
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
      </main>
    </body>
  );
}

export default Analise;
