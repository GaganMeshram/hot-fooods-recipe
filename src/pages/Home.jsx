import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import CategoryCards from "../components/CategoryCards/CategoryCards";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
      </div>
      <Search />
      <CategoryCards/>
      <div><Footer/></div>
    </div>
  
  );
}

export default Home;
