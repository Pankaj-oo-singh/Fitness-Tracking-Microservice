// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminRequired = false }) {
    
    // Get token
    const token = localStorage.getItem("token");

    // Get user object (saved during login)
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;

    // If no token → user not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If admin route required but user is not admin
    if (adminRequired && user?.role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    // Everything OK → show the protected page
    return children;
}
