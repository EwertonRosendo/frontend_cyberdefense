import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Denuncia from "./pages/denuncia.jsx";
import Conclusao from "./pages/conclusao.jsx";
import Analise from "./pages/analise.jsx";
import Cadastro from "./pages/cadastro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "denuncia",
    element: <Denuncia />,
  },
  {
    path: "conclusao",
    element: <Conclusao />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
  {
    path: "analise",
    element: <Analise />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
