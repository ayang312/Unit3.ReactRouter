import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Yellow from "./Yellow";  // New Component
import Green from "./Green";    // New Component

const MainContent = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
      </Routes>
    </div>
  );
};

export default MainContent;
