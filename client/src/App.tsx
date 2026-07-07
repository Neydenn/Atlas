import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage.tsx";
import {AuthPage} from "./pages/Auth/AuthPage.tsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<AuthPage />} />
    </Routes>
  )
}