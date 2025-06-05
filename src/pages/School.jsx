import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./School.css";

const School = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const school = Cookies.get("userSchool");

  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [newText, setNewText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  // Buscar perguntas
  useEffect(() => {
    axios
      .get(`${apiUrl}/school_questions/${school}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error("Erro ao buscar perguntas:", err));
  }, []);

  // Deletar pergunta
  const deleteQuestion = (id) => {
    axios
      .delete(`/api/perguntas/${id}`)
      .then(() =>
        setQuestions((prev) => prev.filter((q) => q.id !== id))
      )
      .catch((err) => console.error("Erro ao deletar pergunta:", err));
  };

  // Criar pergunta
  const createQuestion = () => {
    if (!newQuestion.trim()) return;

    axios
      .post(`${apiUrl}/questions.json`, {
        question:{
        question: newQuestion,
        school: school
    }
      })
      .then((res) => {
        setQuestions((prev) => [res.data, ...prev]);
        setNewQuestion("");
      })
      .catch((err) => console.error("Erro ao criar pergunta:", err));
  };

  // Atualizar pergunta
  const updateQuestion = () => {
    if (!selectedQuestion) return;

    axios
      .put(`${apiUrl}/questions/${selectedQuestion.id}`, {
        question: { question: newText },
      })
      .then((res) => {
        const updated = res.data;
        setQuestions((prev) =>
          prev.map((q) => (q.id === updated.id ? updated : q))
        );
        closeModal();
      })
      .catch((err) => console.error("Erro ao atualizar pergunta:", err));
  };

  const openModal = (question) => {
    setSelectedQuestion(question);
    setNewText(question.question);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedQuestion(null);
    setNewText("");
  };

    const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
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
           <div lang="pt-BR" style={{width:"100%"}}>
      <main className="school-container">
        <h3 className="school-title">{capitalizeFirstLetter(school)}</h3>

        <div className="form-container">
          <h2 className="form-title">Adicionar nova pergunta</h2>
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Digite sua pergunta..."
            className="question-textarea"
          />
          <button onClick={createQuestion} className="submit-button">
            Enviar
          </button>
        </div>
        <div className="school-header">
            <h3>Perguntas da sua instituição:</h3>
        </div>
        <div className="questions-list">
          {questions.map((q) => (
            <div key={q.id} className="question-card">
              <p>{q.question}</p>
              <div className="actions">
                <button
                  onClick={() => openModal(q)}
                  className="update-button"
                >
                  Atualizar
                </button>
                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="delete-button"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Editar Pergunta</h2>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="modal-textarea"
            />
            <div className="modal-actions">
              <button onClick={closeModal} className="cancel-button">
                Cancelar
              </button>
              <button onClick={updateQuestion} className="save-button">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
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
};

export default School;
