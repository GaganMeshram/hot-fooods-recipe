import React from "react";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";
import { Route, Routes } from "react-router-dom";

/* Pages */
import ItemDetails from "./pages/ItemDetails";
import Italian from "./pages/Italian";
import Chinese from "./pages/Chinese";
import American from "./pages/American";
import Indian from "./pages/Indian";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ItemDetails />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/american" element={<American />} />
        <Route path="/italian" element={<Italian />} />
        <Route path="/indian" element={<Indian />} />
        <Route path="/Cuisine/:type" element={<Italian />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/Recipe/:name" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
