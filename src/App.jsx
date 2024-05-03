import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Shop } from './components/Shop';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>


        <Footer />


      </div>
    </>
  )
}

export default App
