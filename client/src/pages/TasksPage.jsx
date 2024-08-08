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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">No hay tareas pendientes</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">¡Es un buen momento para empezar a organizar tus actividades!</p>
          <img 
            src="/backgrounds.jpg" 
            alt="Lista de tareas vacía" 
            className="w-64 h-70 mx-auto mb-6"
          />
          <Link 
            to="/add-task" 
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Crear nueva tarea
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Mis Tareas</h1>
        <div className="flex flex-wrap -mx-2 justify-center">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/add-task" 
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Crear nueva tarea
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TasksPage