import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {AuthPage} from "./pages/AuthPage/AuthPage.tsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={<AuthPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    )
}