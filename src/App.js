import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Navbar from "./pages/common/Navbar";
import Footer from "./pages/common/Footer";
// import Career from "./pages/Career";
import SignIn from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/career" element={<Career />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element ={<Register/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/products" element ={<Products/>} />

      </Routes>
      {/* <Home /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
