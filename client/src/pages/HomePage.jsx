/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {FaTasks, FaUserShield, FaSyncAlt, FaMobileAlt } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Administra tus tareas con facilidad</h1>
          <p className="text-xl mb-8">Organiza, prioriza y completa tus tareas de manera eficiente</p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Comienza gratis
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Características principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<FaTasks className="w-12 h-12 text-blue-500" />}
              title="Gestión de Tareas"
              description="Crea, edita y organiza tus tareas con facilidad"
            />
            <FeatureCard 
              icon={<FaUserShield className="w-12 h-12 text-green-500" />}
              title="Autenticación Segura"
              description="Protege tus datos con autenticación segura y roles de usuario"
            />
            <FeatureCard 
              icon={<FaSyncAlt className="w-12 h-12 text-yellow-500" />}
              title="Sincronización en Tiempo Real"
              description="Mantén tus tareas actualizadas en todos tus dispositivos"
            />
            <FeatureCard 
              icon={<FaMobileAlt className="w-12 h-12 text-purple-500" />}
              title="Acceso Móvil"
              description="Administra tus tareas desde cualquier lugar con nuestra app móvil"
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">¿Listo para aumentar tu productividad?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Únete a miles de usuarios que ya están organizando mejor su tiempo</p>
          <Link 
            to="/register" 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Regístrate ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition duration-300 ease-in-out hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default HomePage;