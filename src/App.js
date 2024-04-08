import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports'; 
import Tech from './pages/Tech';

export default class App extends Component {
  render() {
    return (
      <>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home pageSize="10"/>} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
    )
  }
}


