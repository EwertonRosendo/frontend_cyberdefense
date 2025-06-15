import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conclusao from "./pages/conclusao.jsx";
import Login from "./pages/Login.jsx";
import Denuncia from "./pages/denuncia.jsx";
import Analise from "./pages/analise.jsx";
import Cadastro from "./pages/cadastro.jsx";
import CadastroDeCasos from "./pages/CadastroDeCasos.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ProcessResult from "./pages/ProcessResult.jsx";
import School from "./pages/School.jsx"
import Home from "./pages/Home.jsx";

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
    path: "Defesa",
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
  {
    path: "cadastrodecasos",
    element: <CadastroDeCasos />,
  },
  {
    path: "adminpage",
    element: <AdminPage />,
  },
  {
    path: "userprofile",
    element: <UserProfile />,
  },
  {
    path: "processresult",
    element: <ProcessResult />,
  },
  {
    path: "school",
    element: <School />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
