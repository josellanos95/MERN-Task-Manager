/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from "../api/task";
import { Router } from "express";
const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      if (error.response && error.response.status === 401) {
        Router.push("/login");
        
        // Manejar el error de autenticación, por ejemplo, redirigiendo al login
        // o actualizando el estado de autenticación
        

      }
    }
  };
  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

const deleteTask = async (id) => {
  try {
    await deleteTaskRequest(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  } catch (error) {
    console.error(error);
  }
};

const getTask = async (id) => {
  try {
    const task = await getTaskRequest(id);
    return task;
  } catch (error) {
    console.error("Failed to fetch task", error);
    return null;
  }
};

const updateTask = async (id, task) => {
  try {
    const res = await updateTaskRequest(id, task);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}


  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        deleteTask,
        getTasks,
        getTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
