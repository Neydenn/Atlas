import {Route, Routes} from "react-router-dom";
import {AuthPage} from "../modules/auth/pages/AuthPage.tsx";

export function App() {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthPage />} />
      <Route path='/test' element={<div>test</div>} />
    </Routes>
  )
}
