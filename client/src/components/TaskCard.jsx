/* eslint-disable react/prop-types */
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const { deleteTask } = useTask();

  return (
    <div className="bg-yellow-100 dark:bg-yellow-700 rounded-lg shadow-md p-4 m-2 w-64 h-64 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1">
      <div>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 truncate">
          {task.title}
        </h2>
        <p
          className="text-sm text-gray-600 dark:text-gray-300 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {task.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(task.date)}</span>
        <div className="flex">
          <Link 
            to={`/tasks/${task._id}`}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold py-1 px-2 rounded-md mr-2 transition duration-300 ease-in-out"
          >
            Editar
          </Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white text-xs font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;