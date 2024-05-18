import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Order from "./pages/Order/Order";
import Landing from "./pages/Landing/Landing";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/order" element={<Order />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
