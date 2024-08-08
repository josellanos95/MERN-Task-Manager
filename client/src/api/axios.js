import axios from "axios";

const instance = axios.create({
    baseURL: "https://mern-task-project.vercel.app/",
    withCredentials: true,
})

export default instance;