import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import "./denuncia.css";
import axios from "axios";


function Denuncia() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const userId = Cookies.get("userId");
  const userToken = Cookies.get("userToken");
  const school = Cookies.get("userSchool");

  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [formData,setFormData] = ([]);
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [instituicao, setInstituicao] = useState(true);

  const [respostas, setRespostas] = useState({});
  const [respostasdescrit, setRespostasdescrit] = useState({});
  
  
  const handleDenuncia = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("case[user_id]", userId);
    formData.append("case[description]", description);
    files.forEach((file) => {
      formData.append("case[images][]", file);
    });

    try {
      const response = await axios.post(`${apiUrl}/cases.json`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        navigate("/conclusao");
        
      }
    } catch (error) {
      console.error("Erro ao enviar denúncia:", error);
      alert("Erro ao enviar denúncia. Tente novamente.");
    }
    handleEnviarRespostas()
  };

    
  // Função para buscar as perguntas
  const get_questions = async () => {
  try {
    const response = await axios.get(`${apiUrl}/school_questions/${school}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    
    setQuestions(response.data || []);  // Garante array
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
  } finally {
    setLoading(false);
  }
};

const get_resposta = async () => {
  try {
    const response = await axios.get(`${apiUrl}/user_answers/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    
    setRespostas(response.data || []);  // Garante array
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
  } finally {
    setLoading(false);
  }
};

const get_respostasdescrit = async () => {
  try {
    const response = await axios.get(`${apiUrl}/case_by_user/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    
    setRespostasdescrit(response.data || []);  // Garante array
    console.log(response.data)
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
  } finally {
    setLoading(false);
  }
};

// Executa a função quando o componente monta
useEffect(() => {
  get_respostasdescrit();
  get_questions();
  get_resposta();
}, []);

// Função de renderização das imagens enviadas
const renderImages = (imagens) => {
  if (!imagens || imagens.length === 0) {
    return <p>Sem imagens para exibir.</p>;
  }
  return imagens.map((image,index) => (
    <img
  src={image}
  alt="Imagem de exemplo"
  className="minha-classe"
/>
));
};
// Função de renderização das html de upload de imagem
const renderHtml = (setFiles) => {
  return (
    <div className="upload-area">
      <div className="upload-instructions">
        <p>
          Para fazer Upload da Evidência arraste e solte seus arquivos
          aqui ou clique para procurar.
        </p>
        <label htmlFor="file-upload" className="select-files-button">
          Selecionar arquivos
        </label>
      </div>
      <input
        required
        type="file"
        id="file-upload"
        className="file-upload"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
      />
      <p className="supported-formats">
        Formatos suportados: PNG, JPG, PDF, DOC
      </p>
    </div>
  );
};



// Função de renderização
const renderAnswers = (respostas) => {
 
  if (!respostas || respostas.length === 0) {
    return <p></p>;
  }


  return respostas.map((resposta, index) => (
    <div className="case-description" id={`question-${resposta.id}`} key={resposta.id}>
      <p className="questionstyle">{resposta.question.question}</p>        
      <textarea
        disabled
       
        placeholder="Sua resposta..."
        rows="3"
        style={{ width: '100%', marginTop: '8px' }}
        value={resposta.answer}        
      />
    </div>
  ));
};




// Função de renderização
const renderQuestions = (questions) => {
  if (!questions || questions.length === 0) {
    return <p></p>;
  }

  return questions.map((question, index) => (
    <div className="case-description" id={`question-${question.id}`} key={question.id}>
      <p className="questionstyle">{question.question}</p>

      <textarea
        name={`question-${question.id}`}
        placeholder="Sua resposta..."
        rows="3"
        style={{ width: '100%', marginTop: '8px' }}        
        onChange={(e) => {
          setRespostas({
            ...respostas,
            [question.id]: e.target.value
          });
        }}
      />
    </div>
  ));
};

const handleEnviarRespostas = async () => {
  const school_answers = Object.entries(respostas).map(([question_id, answer]) => ({
    user_id: userId,
    question_id: Number(question_id),
    answer
  }));

  try {
    const response = await axios.post(`${apiUrl}/school_answers.json`, {
      school_answers
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json'
      }
    });

    
    alert("Respostas enviadas com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar respostas:", error);
    alert("Erro ao enviar respostas. Tente novamente.");
  }
};


  


  return (
    <div>
      <div>
        <header>
          <div className="header-content">
            <div className="logo-container">
              <img
                src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                alt="Shield Icon"
                className="shield-icon"
              />
              <span className="portal-name">CyberDefense</span>
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
          <section className="case-status-section">
            <div className="case-status-container">
              <h2 className="case-status-title">Case Status</h2>
              <div className="status-steps">
                <div className="status-step">
                  <div className="status-icon completed"></div>
                  <span className="status-text">Evidência Recebida</span>
                </div>
                <div className="status-bar">
                  <div className="status-bar-filled"></div>
                </div>
                <div className="status-step">
                  <div className="status-icon"></div>
                  <span className="status-text">Em Análise</span>
                </div>
                <div className="status-bar"></div>
                <div className="status-step">
                  <div className="status-icon"></div>
                  <span className="status-text">Enviado a Instituição</span>
                </div>
              </div>
            </div>
          </section>

          <section className="evidence-section">

            
            <div className="evidence-container">
              <h2 className="evidence-title">Envie sua evidência</h2>

                

                {respostasdescrit ? renderImages(respostasdescrit.images) : renderHtml(setFiles)}       

                {/*loadin é true? carrega perguntas se não, temos respostas? renderiza se tiver e não renderiza perguntas */}
                {/*renderHtml(setFiles)  esse renderiza o html de upload*/}

                {/*renderImages(respostasdescrit.images)*/}

              {/* esse aqui é o html da area
              
              <div className="upload-area">
                <div className="upload-instructions">
                  <p>
                    Para fazer Upload da Evidência arraste e solte seus arquivos
                    aqui ou clique para procurar.
                  </p>
                  <label htmlFor="file-upload" type="file"
                  id="file-upload" className="select-files-button" multiple
                  onChange={(e) => setFiles(Array.from(e.target.files))}
                  accept=".png,.jpg,.jpeg,.pdf,.doc,.docx">
                    Selecionar arquivos
                  </label>
                </div>
                <input
                  required
                  type="file"
                  id="file-upload"
                  className="file-upload"
                  multiple
                  onChange={(e) => setFiles(Array.from(e.target.files))}
                  accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                />
                <p className="supported-formats">
                  Formatos suportados: PNG, JPG, PDF, DOC
                </p>
              </div>*/}

              <div className="case-description">
                <label htmlFor="case-description">Descreva seu caso</label>
                  {
                    respostasdescrit ? 
                    <textarea
                      id="case-description"
                      value= {respostasdescrit.description}
                      disabled                    
                      
                    ></textarea>:
                    <textarea
                      id="case-description"
                      placeholder="Por favor, forneça um contexto sobre o seu caso..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  }                
              </div>
                <div>
                  
                  <p className="schoolname">
                    {loading ? "Perguntas da sua instituição" : "Sua Instituição não possui perguntas extras"}
                  </p>
                </div>
              <div>
                
                
                {loading ? <p> Carregando perguntas...</p> : (respostas ? renderAnswers(respostas.questions) : renderQuestions(questions))}
                {/*loadin é true? carrega perguntas se não, temos respostas? renderiza se tiver e não renderiza perguntas */}
                
              </div>

                {
                  respostas ?<></>:
                  <button
                
                    onClick={handleDenuncia}
                    className="submit-case-button"
                    id="submit-case"
                  >
                    Enviar Caso
                  </button>
                }
                <button
                
                    onClick={handleDenuncia}
                    className="submit-case-button"
                    id="submit-case"
                  >
                    Enviar Caso
                  </button>
              

              <p className="data-security">
                Seus dados são seguros e confidenciais.
              </p>
            </div>
          </section>

          <section className="review-process-section">
            <div className="review-process-container">
              <div className="review-process-nav">
                <button className="nav-button active">
                  Como funciona o processo de revisão?
                </button>
                <button className="nav-button">Seus direitos</button>
                <button className="nav-button">
                  O que acontece após o envio?
                </button>
              </div>
              <div className="review-process-content">
                <h2 className="review-process-title">Processo de Revisão</h2>
                <p className="review-process-description">
                  Nossa equipe analisa cuidadosamente todas as evidências
                  enviadas dentro de 48 horas. Garantimos um processo de
                  avaliação justo e minucioso, mantendo rigorosos padrões de
                  confidencialidade.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-content">
              <nav className="footer-nav">
                <a href="#" className="footer-link">
                  Termos de Uso
                </a>
                <a href="#" className="footer-link">
                  Política de Privacidade
                </a>
                <a href="#" className="footer-link">
                  Contato
                </a>
                <a href="#" className="footer-link">
                  Ajuda
                </a>
              </nav>
              <button className="report-button">
                <span>Reportar problema</span>
                <img
                  src="https://raw.githubusercontent.com/EwertonRosendo/frontend_cyberdefense/refs/heads/main/src/pages/img/logo.jpg"
                  alt="Report icon"
                  className="report-icon"
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Denuncia;
