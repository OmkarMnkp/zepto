import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cafe from "./Pages/Cafe/Cafe";
import All from "./Pages/All/All";
import Toys from "./Pages/Toys/Toys";
import Fresh from "./Pages/Fresh/Fresh";
import Electronics from "./Pages/Electronics/Electronics";
import Mobile from "./Pages/Mobile/Mobile";
import Fashion from "./Pages/Fashion/Fashion";
import Beauty from "./Pages/Beauty/Beauty";
import Deal from "./Pages/Deal/Deal";
import Baby from "./Pages/Baby/Baby";
import Footer from "./components/Footer/Footer";
import ThreeCard from "./components/ThreeCard/ThreeCard";
import Detail from "./components/Details/Detail";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Checkout from "./components/Checkout/Checkout";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<All />} />

        <Route path="/all" element={<All />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/baby" element={<Baby />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />

        {/* <Route path='/detail' element={<Detail/>} /> */}
        <Route path="/detail/:ID" element={<Detail />} />

       
      </Routes>
      <ThreeCard/>
      <Footer/>
    </Router>
  );
};

export default App;
