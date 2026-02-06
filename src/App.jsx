import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

import 'animate.css';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Routes>

       <Footer />

    </BrowserRouter>
  )
}
export default App
