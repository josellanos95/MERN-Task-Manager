import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const { isAuthenticated, signout } = useAuth();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <div className="hidden md:flex items-center">
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
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-yellow-400 hover:text-yellow-300 mr-4"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/add-task"
                  className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Agregar tarea
                </Link>
                <button
                  onClick={signout}
                  className="bg-red-500 hover:bg-red-600 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-green-500 hover:bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Registrarse
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Iniciar sesión
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;