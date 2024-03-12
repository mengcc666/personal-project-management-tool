import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addProject" element={<AddProject />} />
    </Routes>
  );
}

export default App;
