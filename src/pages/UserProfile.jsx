import { useEffect } from "react";
/*import "./admp1.css"; // Ensure the CSS file is imported*/
import "./userprofile.css"; // Ensure the CSS file is imported

const UserProfile = () => {
  useEffect(() => {
    const pictureInput = document.getElementById("pictureInput");
    const headerPicture = document.getElementById("headerProfilePicture");
    const sidebarPicture = document.getElementById("sidebarProfilePicture");

    const savedImage = localStorage.getItem("profilePicture");
    if (savedImage) {
      headerPicture.src = savedImage;
      sidebarPicture.src = savedImage;
    }

    pictureInput.addEventListener("change", function (e) {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageData = e.target.result;
          headerPicture.src = imageData;
          sidebarPicture.src = imageData;
          localStorage.setItem("profilePicture", imageData);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        const currentTheme =
          document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);

        const isDark = newTheme === "dark";
        sunIcon.style.display = isDark ? "none" : "block";
        moonIcon.style.display = isDark ? "block" : "none";

        localStorage.setItem("darkMode", isDark);
      });
    }

    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const userNameDisplay = document.getElementById("userName");
    const sidebarPictureName = document.querySelector("#profile-sidebar span");

    function updateNameDisplay() {
      const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
      userNameDisplay.textContent = fullName;
      if (sidebarPictureName) sidebarPictureName.textContent = fullName;
    }

    firstNameInput.addEventListener("input", updateNameDisplay);
    lastNameInput.addEventListener("input", updateNameDisplay);

    // Update logo on load
    updateNameDisplay();

    const saveButton = document.querySelector("button.text-white");
    const verifyDate = document.getElementById("verifyDate");

    saveButton.addEventListener("click", function () {
      const now = new Date();
      const options = { day: "2-digit", month: "long", year: "numeric" };
      const formattedDate = now.toLocaleDateString("pt-BR", options);
      verifyDate.textContent = formattedDate;
    });

    return () => {
      // Cleanup event listeners on component unmount
      pictureInput.removeEventListener("change", () => {});
      firstNameInput.removeEventListener("input", updateNameDisplay);
      lastNameInput.removeEventListener("input", updateNameDisplay);
      saveButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div lang="pt-BR" data-theme="light">
      <header className="header">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 justify-center w-full">
              <a href="index.html" className="text-2xl font-bold text-blue-600">
                CyberDefense
              </a>
              <nav className="hidden md:flex space-x-4">
                <a
                  href="index.html"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Início
                </a>
                <a
                  href="biblioteca.html"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Biblioteca
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Portal de defensoria
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contato
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
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
              <div className="flex items-center space-x-2">
                <img
                  id="headerProfilePicture"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
                  alt="Foto de Perfil"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span id="userName" className="text-sm font-medium">
                  Usuário
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="container mx-auto px-4 py-8">
        <section
          id="welcome-section"
          className="bg-blue-50 text-blue-800 py-8 px-4 rounded-lg mb-8 border-b border-blue-100"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl mb-2">Olá Alex!</h1>
            <h2 className="text-2xl font-semibold mb-2">Bem-vindo, ADM</h2>
            <p className="text-blue-700">
              Use esta página para atualizar as informações da sua conta e
              gerenciar as configurações do perfil.
            </p>
          </div>
        </section>

        <div
          id="profile-container"
          className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div id="profile-sidebar" className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden relative group">
                <img
                  id="sidebarProfilePicture"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
                  alt="Foto de Perfil"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs cursor-pointer transition"
                  onClick={() =>
                    document.getElementById("pictureInput").click()
                  }
                >
                  Alterar
                </div>
              </div>
              <span className="ml-4 text-neutral-800">Alex Morgan</span>
            </div>
            <nav className="space-y-2">
              <span className="block py-2 text-neutral-900 border-l-4 border-neutral-900 pl-3 cursor-pointer">
                Informações básicas
              </span>
              <span className="block py-2 text-neutral-600 pl-4 hover:text-neutral-900 cursor-pointer">
                Informações profissionais
              </span>
              <span className="block py-2 text-neutral-600 pl-4 hover:text-neutral-900 cursor-pointer">
                <a
                  href="resultado do processo.html"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Informações do caso
                </a>
              </span>
              <span className="block py-2 text-neutral-600 pl-4 hover:text-neutral-900 cursor-pointer">
                Segurança
              </span>
              <span className="block py-2 text-neutral-600 pl-4 hover:text-neutral-900 cursor-pointer">
                Notificações
              </span>
            </nav>
          </div>

          <div id="profile-form" className="md:col-span-3">
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 flex items-start">
              <i className="fa-solid fa-triangle-exclamation text-blue-600 mt-1 mr-3"></i>
              <p className="text-sm text-blue-700">
                Por favor, verifique seu e-mail para garantir que você receba
                atualizações importantes do caso.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl text-neutral-800 mb-6 border-b pb-2">
                Contact information
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-neutral-700 mb-1"
                    htmlFor="first_name"
                  >
                    Nome
                  </label>
                  <input
                    className="w-full border border-neutral-300 rounded p-2.5"
                    id="first_name"
                    type="text"
                    defaultValue="Alex"
                  />
                </div>
                <div>
                  <label
                    className="block text-neutral-700 mb-1"
                    htmlFor="last_name"
                  >
                    Sobrenome
                  </label>
                  <input
                    className="w-full border border-neutral-300 rounded p-2.5"
                    id="last_name"
                    type="text"
                    defaultValue="Morgan"
                  />
                </div>
                <div>
                  <label
                    className="block text-neutral-700 mb-1"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="w-full border border-neutral-300 rounded p-2.5"
                    id="email"
                    type="email"
                    defaultValue="alex.morgan@example.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-neutral-700 mb-1"
                    htmlFor="phone"
                  >
                    Telefone
                  </label>
                  <input
                    className="w-full border border-neutral-300 rounded p-2.5"
                    id="phone"
                    type="tel"
                    defaultValue="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 mb-1" htmlFor="city">
                    Cidade
                  </label>
                  <p className="text-sm text-neutral-600 mb-1">
                    Digite sua cidade e selecione da lista.
                  </p>
                  <input
                    className="w-full border border-neutral-300 rounded p-2.5"
                    id="city"
                    type="text"
                    defaultValue="San Francisco, California, United States"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl text-neutral-800 mb-4 border-b pb-2">
                Forma de contato preferida
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="contact_email"
                    name="contact_method"
                    className="mr-3"
                    defaultChecked
                  />
                  <label htmlFor="contact_email" className="text-neutral-700">
                    E-mail
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="contact_phone"
                    name="contact_method"
                    className="mr-3"
                  />
                  <label htmlFor="contact_phone" className="text-neutral-700">
                    Telefone
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="contact_both"
                    name="contact_method"
                    className="mr-3"
                  />
                  <label htmlFor="contact_both" className="text-neutral-700">
                    Ambos
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl text-neutral-800 mb-4 border-b pb-2">
                Verificação de identidade
              </h2>
              <div className="bg-neutral-100 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-id-card text-yellow-500 text-xl mr-3"></i>
                  <div>
                    <p className="text-yellow-500">
                      Verificação de identidade complete
                    </p>
                    <p className="text-sm text-yellow-500">
                      Verificado em:{" "}
                      <span id="verifyDate">12 de May de 2025</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                style={{ backgroundColor: "#4CAF50" }}
                className="text-white px-6 py-2.5 rounded-lg hover:bg-green-600"
              >
                Salvar alterações
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer id="footer" className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 text-neutral-600">
              <span className="hover:text-neutral-900 cursor-pointer">
                Terms of Use
              </span>
              <span className="hover:text-neutral-900 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-neutral-900 cursor-pointer">
                Contact
              </span>
              <span className="hover:text-neutral-900 cursor-pointer">
                Help
              </span>
            </div>
            <button className="flex items-center text-neutral-600 hover:text-neutral-900">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              Report an issue
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile;
