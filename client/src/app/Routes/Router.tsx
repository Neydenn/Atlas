import {createBrowserRouter} from "react-router-dom";
import {AuthPage} from "../../modules/auth/pages/AuthPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthPage />
  },
  {
    element: <ProtectedRoute />,
    children: [],
  }
])