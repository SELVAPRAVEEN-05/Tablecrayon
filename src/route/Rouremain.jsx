import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTable from "../Pages/HomeTable";

function Rouremain() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<HomeTable />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default Rouremain;
