import taskModel from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated properly" });
    }
    const tasks = await taskModel
      .find({
        user: req.user.id,
      })
      .populate("user");
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTasks = async (req, res) => {
  try {
    const newTask = new taskModel({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      user: req.user.id,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id).populate("user");
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
