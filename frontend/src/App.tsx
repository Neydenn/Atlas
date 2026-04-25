import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    )
}