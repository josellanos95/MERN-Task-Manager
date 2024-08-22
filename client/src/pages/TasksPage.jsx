import { useEffect } from 'react'
import { useTask } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router-dom'

function TasksPage() {
  const { getTasks, tasks } = useTask()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">No hay tareas pendientes</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">¡Es un buen momento para empezar a organizar tus actividades!</p>
          <img 
            src="/backgrounds.jpg" 
            alt="Lista de tareas vacía" 
            className="w-full max-w-xs mx-auto mb-6"
          />
          <Link 
            to="/add-task" 
            className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Crear nueva tarea
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Mis Tareas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/add-task" 
            className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Crear nueva tarea
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TasksPage