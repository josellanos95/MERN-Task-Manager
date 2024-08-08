import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const { isAuthenticated } = useAuth();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition duration-300">
                  Inicio
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/tasks" className="hover:text-blue-400 transition duration-300">
                      Mis Tareas
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-task" className="hover:text-blue-400 transition duration-300">
                      Agregar Tarea
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="hover:text-blue-400 transition duration-300">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="hover:text-blue-400 transition duration-300">
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Columna 2: Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="mb-2">Email: jose.llanos95@gmail.com</p>
            <p className="mb-2">Teléfono: +54 9 376 4134970</p>
            <p>Dirección: Posadas, Misiones - Argentina</p>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/josellanos95" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="www.linkedin.com/in/jose-maria-llanos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/JoseLlanoss" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-gray-700 dark:border-gray-600" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Administrador de Tareas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;