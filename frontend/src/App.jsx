import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminAddQuestionsPage from "./components/AdminAddQuestionsPage";
import AdminQuestionsPage from "./components/AdminQuestionsPage";
import UserQuestionsPage from "./components/UserQuestionsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/add-questions" element={<AdminAddQuestionsPage />} />
        <Route path="/admin/questions" element={<AdminQuestionsPage />} />
        <Route path="/user/questions" element={<UserQuestionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;