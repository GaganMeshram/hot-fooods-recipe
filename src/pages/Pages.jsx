import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";
import Recipe from "./Recipe";
function pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cuisine/:type" element={<Cuisine />} />
      <Route path="/Searched/:search" element={<Searched />} />
      <Route path="/Recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default pages;
