import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { Outline } from "../Pages/Style";

function Rouremain() {
  return (
    <Outline>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Outline>
  );
}

export default Rouremain;
