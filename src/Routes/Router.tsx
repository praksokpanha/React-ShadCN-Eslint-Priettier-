import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/DashBoard";
import { LoginPage } from "@/pages/auth/Login";
import { SignupPage } from "@/pages/auth/Signup";
import HomePage from "@/pages/HomePage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashborad" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
