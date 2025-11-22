
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../common/ProtectedRoute"
import RegisterPage from "../pages/RegisterPage";
import WorkoutsPage from "../pages/WorkoutPage";
import DietPage from "../pages/DietPage";
import GoalsPage from "../pages/GoalPage";
import ProfilePage from "../pages/ProfilePage";
// import NotificationPage from "../pages/NotificationPage";

import NotFoundPage from "../pages/NotFoundPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/workouts" element={<WorkoutsPage />} />
       <Route path="/diet" element={<DietPage />} />
       <Route path="/goals" element={<GoalsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="*" element={<NotFoundPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

