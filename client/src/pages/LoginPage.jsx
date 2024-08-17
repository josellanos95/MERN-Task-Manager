import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/24/solid';

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors: formErrors }
  } = useForm();
  
  const { signin, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (loginErrors.length > 0) {
      loginErrors.forEach((error) => {
        if (error.toLowerCase().includes("email")) {
          setError("email", { type: "manual", message: error });
        } else if (error.toLowerCase().includes("contraseña") || error.toLowerCase().includes("password")) {
          setError("password", { type: "manual", message: error });
        } else {
          setError("general", { type: "manual", message: error });
        }
      });
    }
  }, [loginErrors, setError]);

  const onSubmit = handleSubmit(async (values) => {
    await signin(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 py-8">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3">
                <LockClosedIcon className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Inicia sesión
            </h2>
            {formErrors.general && (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mb-4" role="alert">
                <p className="text-sm">{formErrors.general.message}</p>
              </div>
            )}
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Este campo es requerido",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El email no es válido"
                    }
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="tu@ejemplo.com"
                />
                {formErrors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{formErrors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", { 
                    required: "Este campo es requerido",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres"
                    }
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="••••••"
                />
                {formErrors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{formErrors.password.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              ¿No tienes una cuenta? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Regístrate</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;