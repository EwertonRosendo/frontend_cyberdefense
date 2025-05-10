import "./Denuncia.css";

function Denuncia() {
  return (
    <body>
    <div class="container">
        <header>
            <div class="header-content">
                <div class="logo-container">
                    <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d2545bd-49a2-4c6d-b3d3-0a13b69d7277" alt="Shield Icon" class="shield-icon">
                    <span class="portal-name">CyberDefense</span>
                </div>
                
                <!-- Botão de tema -->
                <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema">
                    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: none;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
            </div>
        </header>

        <main>
            <!-- Case Status Section -->
            <section class="case-status-section">
                <div class="case-status-container">
                    <h2 class="case-status-title">Case Status</h2>
                    <div class="status-steps">
                        <div class="status-step">
                            <div class="status-icon completed"></div>
                            <span class="status-text">Evidência Recebida</span>
                        </div>
                        <div class="status-bar">
                            <div class="status-bar-filled"></div>
                        </div>
                        <div class="status-step">
                            <div class="status-icon"></div>
                            <span class="status-text">Em Análise</span>
                        </div>
                        <div class="status-bar"></div>
                        <div class="status-step">
                            <div class="status-icon"></div>
                            <span class="status-text">Enviado a Instituição</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Evidence Upload Section -->
            <section class="evidence-section">
                <div class="evidence-container">
                    <h2 class="evidence-title">Envie sua evidência</h2>
                    <div class="upload-area">
                        <div class="upload-instructions">
                            <p>Para fazer Upload da Evidência Arraste e solte seus arquivos aqui ou clique para procurar.</p>
                            <button class="select-files-button">Selecionar arquivos</button>
                        </div>
                        <input type="file" id="file-upload" class="file-upload" multiple />
                        <p class="supported-formats">Formatos suportados: PNG, JPG, PDF, DOC</p>
                    </div>
                    <div class="case-description">
                        <label for="case-description">Descreva seu caso</label>
                        <textarea id="case-description" placeholder="Por favor, forneça um contexto sobre o seu caso..."></textarea>
                    </div>
                    <button class="submit-case-button" id="submit-case">Enviar Caso</button>
                    <p class="data-security">Seus dados são seguros e confidenciais.</p>
                </div>
            </section>

            <!-- Review Process Section -->
            <section class="review-process-section">
                <div class="review-process-container">
                    <div class="review-process-nav">
                        <button class="nav-button active">Como funciona o processo de revisão?</button>
                        <button class="nav-button">Seus direitos</button>
                        <button class="nav-button">O que acontece após o envio?</button>
                    </div>
                    <div class="review-process-content">
                        <h2 class="review-process-title">Processo de Revisão</h2>
                        <p class="review-process-description">
                            Nossa equipe analisa cuidadosamente todas as evidências enviadas dentro de 48 horas. 
                            Garantimos um processo de avaliação justo e minucioso, mantendo rigorosos padrões de confidencialidade.
                        </p>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-content">
                    <nav class="footer-nav">
                        <a href="#" class="footer-link">Termos de Uso</a>
                        <a href="#" class="footer-link">Política de Privacidade</a>
                        <a href="#" class="footer-link">Contato</a>
                        <a href="#" class="footer-link">Ajuda</a>
                    </nav>
                    <button class="report-button">
                        <span>Reportar problema</span>
                        <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12394095-55c4-46fa-9768-1571b7b0403d" alt="Report icon" class="report-icon">
                    </button>
                </div>
            </div>
        </footer>
    </div>

    <script src="js/denuncia.js"></script>
</body>
  );
}

export default Denuncia;
