import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Home from "./components/Home.js";

import AboutUs from "./components/AboutUs";
import Contact from "./components/ContackUs.jsx";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";



const App =() => {
  return (
    <Router>
      <div>
         <Header/>
         <Blog/>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/services" element={< Services/>}/> */}
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Contact/>}/>
          </Routes>
          <Footer/>
          </div>
    </Router>
  );
};

export default App;
