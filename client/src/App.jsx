import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboardPage.jsx";

export default function App(){
  return (
    <BrowserRouter className="font-bold text-4xl">
      <Routes>
        <Route path="/" element={<DashboardPage />}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}