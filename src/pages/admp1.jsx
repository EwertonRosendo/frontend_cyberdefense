import "./Admp1.css";

function Admp1() {
  return (
    <body>
    
    <header class="site-header">
        <div class="header-container">
            <div class="header-content">
                <div class="logo">
                    <a href="#">CyberDefense</a>
                </div>
                <div class="auth-buttons">
                    <button class="login-button">Acesso Governamental</button>
                    <button class="register-button">Sair</button>
                    <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema">
                        <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: none;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="main-frame">
        
        <section class="section hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">Defensoria Federal</h1>
                    <p class="hero-subtitle">Acesso Restrito da Defensoria Federal.</p>
                </div>
            </div>
        </section>

       
        <div class="container mx-auto px-6 py-8">
            <section id="dashboard-stats" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-lg font-semibold text-gray-700">Casos Recebidos</h2>
                    <p class="text-3xl font-bold text-blue-500">
                        1,284
                        <span class="text-blue-600 inline-block">
                            <i class="fa-solid fa-inbox text-2xl"></i>
                        </span>
                    </p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-lg font-semibold text-gray-700">Defesas Cadastradas</h2>
                    <p class="text-3xl font-bold text-green-500">
                        957
                        <span class="text-green-600 inline-block">
                            <i class="fa-solid fa-file-shield text-2xl"></i>
                        </span>
                    </p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-lg font-semibold text-gray-700">Em Análise</h2>
                    <p class="text-3xl font-bold text-yellow-500">
                        327
                        <span class="text-yellow-600 inline-block">
                            <i class="fa-solid fa-magnifying-glass-chart text-2xl"></i>
                        </span>
                    </p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-lg font-semibold text-gray-700">Concluídos</h2>
                    <p class="text-3xl font-bold text-emerald-500">
                        630
                        <span class="text-purple-600 inline-block">
                            <i class="fa-solid fa-check-double text-2xl"></i>
                        </span>
                    </p>
                </div>
            </section>

            <section id="search-section" class="bg-white rounded-lg shadow mb-8 p-6">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Busca Avançada</h2>
                <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Nome ou CPF" class="border border-gray-300 rounded px-4 py-2">
                    <input type="text" placeholder="Nº do Processo" class="border border-gray-300 rounded px-4 py-2">
                    <input type="text" placeholder="Palavra-chave" class="border border-gray-300 rounded px-4 py-2">
                    <button type="submit" class="col-span-1 md:col-span-3 bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700">Buscar</button>
                </form>
            </section>

            <section id="cases-list" class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Casos Recentes</h2>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="px-4 py-3 text-left">Acusado</th>
                                <th class="px-4 py-3 text-left">Data</th>
                                <th class="px-4 py-3 text-left">Status</th>
                                <th class="px-4 py-3 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t">
                                <td class="px-4 py-3">Everton Vitor</td>
                                <td class="px-4 py-3">15/03/2025</td>
                                <td class="px-4 py-3">
                                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Em Análise</span>
                                </td>
                                <td class="px-4 py-3">
                                    <button class="text-blue-600 hover:text-blue-800">
                                        <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                    </button>
                                </td>
                            </tr>
                            <tr class="border-t">
                                <td class="px-4 py-3">Ana dos Santos</td>
                                <td class="px-4 py-3">14/03/2025</td>
                                <td class="px-4 py-3">
                                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Concluído</span>
                                </td>
                                <td class="px-4 py-3">
                                    <button class="text-blue-600 hover:text-blue-800">
                                        <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                    </button>
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="px-4 py-3 text-left">Acusado</th>
                                            <th class="px-4 py-3 text-left">Data</th>
                                            <th class="px-4 py-3 text-left">Status</th>
                                            <th class="px-4 py-3 text-left">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-t">
                                            <td class="px-4 py-3">Julia Gomes</td>
                                            <td class="px-4 py-3">15/03/2025</td>
                                            <td class="px-4 py-3">
                                                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Em Análise</span>
                                            </td>
                                            <td class="px-4 py-3">
                                                <button class="text-blue-600 hover:text-blue-800">
                                                    <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                </button>
                                            </td>
                                        </tr>
                                        <tr class="border-t">
                                            <td class="px-4 py-3">Evellyin Oliveira</td>
                                            <td class="px-4 py-3">14/03/2025</td>
                                            <td class="px-4 py-3">
                                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Concluído</span>
                                            </td>
                                            <td class="px-4 py-3">
                                                <button class="text-blue-600 hover:text-blue-800">
                                                    <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                </button>
                                                <thead>
                                                    <tr class="bg-gray-50">
                                                        <th class="px-4 py-3 text-left">Acusado</th>
                                                        <th class="px-4 py-3 text-left">Data</th>
                                                        <th class="px-4 py-3 text-left">Status</th>
                                                        <th class="px-4 py-3 text-left">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="border-t">
                                                        <td class="px-4 py-3">Amanda Alvez</td>
                                                        <td class="px-4 py-3">15/03/2025</td>
                                                        <td class="px-4 py-3">
                                                            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Em Análise</span>
                                                        </td>
                                                        <td class="px-4 py-3">
                                                            <button class="text-blue-600 hover:text-blue-800">
                                                                <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr class="border-t">
                                                        <td class="px-4 py-3">Maria Luiza</td>
                                                        <td class="px-4 py-3">14/03/2025</td>
                                                        <td class="px-4 py-3">
                                                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Concluído</span>
                                                        </td>
                                                        <td class="px-4 py-3">
                                                            <button class="text-blue-600 hover:text-blue-800">
                                                                <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                            </button>
                                                            <thead>
                                                                <tr class="bg-gray-50">
                                                                    <th class="px-4 py-3 text-left">Acusado</th>
                                                                    <th class="px-4 py-3 text-left">Data</th>
                                                                    <th class="px-4 py-3 text-left">Status</th>
                                                                    <th class="px-4 py-3 text-left">Ações</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="border-t">
                                                                    <td class="px-4 py-3">Ana Julia</td>
                                                                    <td class="px-4 py-3">15/03/2025</td>
                                                                    <td class="px-4 py-3">
                                                                        <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Em Análise</span>
                                                                    </td>
                                                                    <td class="px-4 py-3">
                                                                        <button class="text-blue-600 hover:text-blue-800">
                                                                            <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr class="border-t">
                                                                    <td class="px-4 py-3">Luiz Ferreira</td>
                                                                    <td class="px-4 py-3">14/03/2025</td>
                                                                    <td class="px-4 py-3">
                                                                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Concluído</span>
                                                                    </td>
                                                                    <td class="px-4 py-3">
                                                                        <button class="text-blue-600 hover:text-blue-800">
                                                                            <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                                        </button>
                                                                        <thead>
                                                                            <tr class="bg-gray-50">
                                                                                <th class="px-4 py-3 text-left">Acusado</th>
                                                                                <th class="px-4 py-3 text-left">Data</th>
                                                                                <th class="px-4 py-3 text-left">Status</th>
                                                                                <th class="px-4 py-3 text-left">Ações</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr class="border-t">
                                                                                <td class="px-4 py-3">Caio Renaux</td>
                                                                                <td class="px-4 py-3">15/03/2025</td>
                                                                                <td class="px-4 py-3">
                                                                                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Em Análise</span>
                                                                                </td>
                                                                                <td class="px-4 py-3">
                                                                                    <button class="text-blue-600 hover:text-blue-800">
                                                                                        <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="border-t">
                                                                                <td class="px-4 py-3">Maria Luiza</td>
                                                                                <td class="px-4 py-3">14/03/2025</td>
                                                                                <td class="px-4 py-3">
                                                                                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Concluído</span>
                                                                                </td>
                                                                                <td class="px-4 py-3">
                                                                                    <button class="text-blue-600 hover:text-blue-800">
                                                                                        <i class="fa-solid fa-eye mr-2"></i>Ver Detalhes
                                                                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       

       
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-content">
                    
                    <div class="footer-column">
                        <h3 class="footer-title">CyberDefense</h3>
                        <p class="footer-description">Apoiando a defesa justa contra acusações de bullying.</p>
                    </div>

                    
                    <div class="footer-column">
                        <h3 class="footer-title">Links Rapidos</h3>
                        <ul class="footer-links">
                            <li><a href="#">tela de inicio</a></li>
                            <li><a href="#">Enviar Evidência</a></li>
                            <li><a href="#">analisar</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>

                   
                    <div class="footer-column">
                        <h3 class="footer-title">Legal</h3>
                        <ul class="footer-links">
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Política de Cookies</a></li>
                        </ul>
                    </div>

                
                    <div class="footer-column">
                        <h3 class="footer-title">Contato</h3>
                        <ul class="footer-contact">
                            <li>
                                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12e3e5c0-7957-484a-9862-266b72810b4c" alt="Email icon" class="contact-icon">
                                <span>Email: support@cyberdefense.com</span>
                            </li>
                            <li>
                                <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6274e94d-2dba-412e-9de5-1484acf3cbb1" alt="Phone icon" class="contact-icon">
                                <span>Telefone: +81 (55) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

               
                <div class="copyright">
                    <p>© 2025 CyberDefense. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    </body>

    
  );
}

export default Admp1;
