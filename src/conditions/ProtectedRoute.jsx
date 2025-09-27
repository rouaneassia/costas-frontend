import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { authenticated, loadingAuth, user } = useAuth();

  if (loadingAuth) return <p>Chargement...</p>; // show loader while fetching

  if (!authenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
