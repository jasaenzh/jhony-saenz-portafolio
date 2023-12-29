import { globalStore } from "../src/store/global.store";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated, loading } = globalStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
  }))

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <Outlet />
  )

}

export { ProtectedRoute }