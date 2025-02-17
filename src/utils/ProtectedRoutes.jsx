import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const hasToken = localStorage.getItem("token");
  return hasToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
