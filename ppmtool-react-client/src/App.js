import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addProject" element={<AddProject />} />
      </Routes>
    </Provider>
  );
}

export default App;
