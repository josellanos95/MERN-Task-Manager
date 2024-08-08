import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlusIcon } from '@heroicons/react/24/solid';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors: formErrors }
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.forEach((error) => {
        if (error.toLowerCase().includes("email")) {
          setError("email", { type: "manual", message: error });
        } else if (error.toLowerCase().includes("contraseña") || error.toLowerCase().includes("password")) {
          setError("password", { type: "manual", message: error });
        } else if (error.toLowerCase().includes("nombre de usuario")) {
          setError("username", { type: "manual", message: error });
        } else {
          setError("general", { type: "manual", message: error });
        }
      });
    }
  }, [registerErrors, setError]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3">
                <UserPlusIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Crea tu cuenta
            </h2>
            {formErrors.general && (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mb-4" role="alert">
                <p className="text-sm">{formErrors.general.message}</p>
              </div>
            )}
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre de usuario
                </label>
                <input
                  id="username"
                  {...register("username", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tu nombre de usuario"
                />
                {formErrors.username && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{formErrors.username.message}</p>}
              </div>
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
                  Registrarse
                </button>
              </div>
            </form>
          </div>
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              ¿Ya tienes una cuenta? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Inicia sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;