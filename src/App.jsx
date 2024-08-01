import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Settings from "./Pages/DashBoadSetting/Settings";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import MainPage from "./Pages/MainPage/MainPage";
import Workspace from "./Pages/Workspace/Workspace";
import Analytics from "./Pages/Analytics/Analytics";
import LoginPage from "./Pages/LoginPage/LoginPage";
import BubbleInput from "./Pages/BubbleInputs/BubbleInput";
import Themes from "./Pages/ThemesSection/Themes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/analytics/" element={<Analytics />} />
          <Route path="/dashboard/settings/:id" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard/workspace/:id" element={<Workspace />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
