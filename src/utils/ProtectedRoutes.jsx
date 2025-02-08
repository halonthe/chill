import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ logined }) => {
  return logined ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
