import { useAuth } from "../context/AuthContext";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const { isAuthenticated, signout } = useAuth();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="bg-gray-800 dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to={isAuthenticated ? "/tasks" : "/"}
              className="text-white font-bold text-xl"
            >
              Administrador de tareas
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-yellow-400 hover:text-yellow-300 ml-4 mr-4"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            {isAuthenticated ? (
              <>
                <Link
                  to="/add-task"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-300 ease-in-out"
                >
                  Agregar tarea
                </Link>
                <button
                  onClick={signout}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-300 ease-in-out"
                >
                  Registrarse
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Iniciar sesión
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;