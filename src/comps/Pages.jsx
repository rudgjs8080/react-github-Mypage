import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Introduce from "./Introduce";
import Guestbook from "./portfolie/Guestbook";
import Meett from "./portfolie/Meett";
import Woo from "./portfolie/Woo";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/guestbook" element={<Guestbook />} />
      <Route path="/portfolio/meett" element={<Meett />} />
      <Route path="/portfolio/woo" element={<Woo />} />
      <Route path="/introduce" element={<Introduce />} />
    </Routes>
  );
}

export default Pages;
