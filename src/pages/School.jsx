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
  const [users, setUsers] = useState([]);
  const [userFilter, setUserFilter] = useState("");

  // Buscar perguntas
  useEffect(() => {
    axios
      .get(`${apiUrl}/school_questions/${school}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error("Erro ao buscar perguntas:", err));
    axios
      .get(`${apiUrl}/users/school/${school}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(userFilter.toLowerCase())
  );
  // Deletar pergunta
  const deleteQuestion = (id) => {
    axios
      .delete(`${apiUrl}/questions/${id}`)
      .then(() => setQuestions((prev) => prev.filter((q) => q.id !== id)))
      .catch((err) => console.error("Erro ao deletar pergunta:", err));
  };

  // Criar pergunta
  const createQuestion = () => {
    if (!newQuestion.trim()) return;

    axios
      .post(`${apiUrl}/questions.json`, {
        question: {
          question: newQuestion,
          school: school,
        },
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
    if (!string) return "";
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
          </div>
        </header>

        <main>
          <div lang="pt-BR" style={{ width: "100%" }}>
            <main className="school-container">
              <div className="school-top">
                <h3 className="school-title">
                  {capitalizeFirstLetter(school)}
                </h3>
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
              </div>

              <div className="question-and-answers"></div>
            </main>

            <div className="questions-and-answers">
              {/*aqui é onde temos a coluna da direita*/}
              <div className="questions">
                <div className="school-header" style={{paddingLeft:"50px", paddingBottom:"20px"}}>
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
                          type="submit"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="answers">
                <div className="school-header" style={{paddingLeft:"50px", paddingBottom:"20px"}}>
                  <h3>Perguntas da sua instituição:</h3>
                </div>
                <div className="users-section">
                  <input
                    type="text"
                    placeholder="Buscar por email..."
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                    className="user-search-input"
                  />

                  {filteredUsers.map((user) => (
                    <div key={user.id} className="user-card">
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p>
                        <strong>Tipo:</strong>{" "}
                        {capitalizeFirstLetter(user.kind)}
                      </p>

                      {/* Respostas às perguntas da escola */}
                      {user.school_answers && user.school_answers.length > 0 ? (
                        <ul className="answers-list">
                          {user.school_answers.map((answer) => (
                            <li key={answer.id} className="answer-item">
                              <p>
                                <strong>Pergunta:</strong>{" "}
                                {answer.question.question}
                              </p>
                              <p>
                                <strong>Resposta:</strong> {answer.answer}
                              </p>
                              <p className="answer-date">
                                <em>
                                  {new Date(answer.created_at).toLocaleString()}
                                </em>
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>
                          <em>
                            Este usuário ainda não respondeu a nenhuma pergunta.
                          </em>
                        </p>
                      )}

                      {/* Casos do usuário */}
                      {user.cases && user.cases.length > 0 ? (
                        <div className="cases-section">
                          <h4>Casos:</h4>
                          {user.cases.map((caso) => (
                            <div key={caso.id} className="case-item">
                              <p>
                                <strong>Descrição:</strong>{" "}
                                {caso.description || <em>(sem descrição)</em>}
                              </p>
                              <p className="case-date">
                                <em>
                                  {new Date(caso.created_at).toLocaleString()}
                                </em>
                              </p>

                              {/* Imagens do caso */}
                              {caso.images && caso.images.length > 0 ? (
                                <div className="case-images">
                                  {caso.images.map((imgUrl, index) => (
                                    <img
                                      style={{ width: 200 }}
                                      key={index}
                                      src={imgUrl}
                                      alt={`Imagem do caso ${caso.id}`}
                                      className="case-image"
                                    />
                                  ))}
                                </div>
                              ) : (
                                <p>
                                  <em>Sem imagens associadas.</em>
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>
                          <em>Este usuário ainda não criou nenhum caso.</em>
                        </p>
                      )}
                    </div>
                  ))}

                  {filteredUsers.length === 0 && (
                    <p className="no-answers">
                      Nenhum usuário encontrado com esse email.
                    </p>
                  )}
                </div>
              </div>
            </div>

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
