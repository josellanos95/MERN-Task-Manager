import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import Navbar from "./components/Navbar.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Footer from "./components/Footer.jsx";
import 'leaflet/dist/leaflet.css';
import Contact from "./pages/Contact.jsx";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <DarkModeProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        </DarkModeProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
export default App;
