import { useState, useEffect } from "react";
import "./admp1.css"; // Ensure the CSS file is imported

const CadastroDeCasos = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica a preferência salva no localStorage
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Aplica a classe 'dark' ao body se o modo escuro estiver ativado
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // Salva a preferência no localStorage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <header className="site-header bg-white shadow">
        <div className="header-container mx-auto flex justify-between items-center p-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-blue-600">CyberDefense</h1>
          </div>
          <div className="auth-buttons">
            <button className="login-button">Acesso Governamental</button>
            <button className="register-button">Sair</button>
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Alternar tema"
            >
              {isDarkMode ? (
                <svg
                  className="moon-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="main-frame">
        <section className="bg-white rounded-lg shadow mb-8" id="new-case-form">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Cadastrar Novo Caso</h2>
            <form className="space-y-6" id="caseForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo do Acusado
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Nascimento
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2"
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número do Processo
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select className="w-full border rounded-lg px-4 py-2">
                    <option>Em Análise</option>
                    <option>Confirmado</option>
                    <option>Arquivado</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Caso
                </label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Evidências
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <i className="fa-solid fa-cloud-upload text-3xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-500">
                    Arraste arquivos ou clique para fazer upload
                  </p>
                  <input
                    className="hidden"
                    id="fileUpload"
                    multiple=""
                    type="file"
                  />
                  <button
                    className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                    onClick={() =>
                      document.getElementById("fileUpload").click()
                    }
                    type="button"
                  >
                    Selecionar Arquivos
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  type="submit"
                >
                  Cadastrar Caso
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow" id="recent-submissions">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Casos Cadastrados Recentemente
              </h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
                  <i className="fa-solid fa-filter mr-2"></i>Filtrar
                </button>
                <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
                  <i className="fa-solid fa-download mr-2"></i>Exportar
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">Nome</th>
                    <th className="px-4 py-3 text-left">CPF</th>
                    <th className="px-4 py-3 text-left">Processo</th>
                    <th className="px-4 py-3 text-left">Data Cadastro</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">Carlos Oliveira</td>
                    <td className="px-4 py-3">123.456.789-00</td>
                    <td className="px-4 py-3">#2025001</td>
                    <td className="px-4 py-3">15/03/2025</td>
                    <td className="px-4 py-3">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        Em Análise
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="delete-case text-red-600 hover:text-red-800">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Ana Beatriz</td>
                    <td className="px-4 py-3">987.654.321-00</td>
                    <td className="px-4 py-3">#2025002</td>
                    <td className="px-4 py-3">14/03/2025</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="delete-case text-red-600 hover:text-red-800">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-500">
                Mostrando 2 de 50 resultados
              </p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  Anterior
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8" id="footer">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Defensória Pública</h3>
              <p className="text-sm text-gray-400">
                Sistema de Administração e Fiscalização de Casos de
                Cyberbullying
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-sm text-gray-400">
                <i className="fa-solid fa-envelope mr-2"></i>
                contato@defensoria.gov.br
              </p>
              <p className="text-sm text-gray-400">
                <i className="fa-solid fa-phone mr-2"></i>(11) 0000-0000
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Informações</h3>
              <p className="text-sm text-gray-400">
                <i className="fa-solid fa-lock mr-2"></i>Todas as informações
                são sigilosas e protegidas por lei
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 Defensória Pública. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CadastroDeCasos;
