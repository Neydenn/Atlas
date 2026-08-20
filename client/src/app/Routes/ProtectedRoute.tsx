import {useTokenStore} from "../store/TokenStore.ts";
import {Outlet, Navigate} from "react-router-dom";

export function ProtectedRoute() {
  const token = useTokenStore((state) => state.token);
  if (!token) {
    return <Navigate to='/auth/login' replace />;
  }

  return <Outlet />;
}
