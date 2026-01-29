import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePaste from "./assets/Components/CreatePaste";
import ViewPaste from "./assets/Components/ViewPaste";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePaste />} />
        <Route path="/paste/:id" element={<ViewPaste />} />
      </Routes>
    </Router>
  );
}
