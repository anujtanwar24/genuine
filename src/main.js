import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import About from "./pages/about";
import Shorts from "./pages/shorts";
import Home from "./pages/home";
import Blog from "./pages/blog";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default Main;
