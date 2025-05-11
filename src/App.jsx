import { useState } from "react";
import "./App.css";

function App() {
  const [variavel1, setVariavel1] = useState("aprendendo");

  return (
    <div>
      <h1>Olá mundo  test </h1>
      <h1>{variavel1} </h1>
      <button
        onClick={() => {
          setVariavel1("fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
