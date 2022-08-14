import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import ABV from './pages/ABV'
import DiluteAndBoil from './pages/DiluteAndBoil'
import Gravity from './pages/Gravity'
import Hydrometer from './pages/Hydrometer'
import StrikeWater from './pages/StrikeWater'

export default function App() {
  return (
    <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abv" element={<ABV />} />
          <Route path="/diluteandboil" element={<DiluteAndBoil />} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/hydrometer" element={<Hydrometer />} />
          <Route path="/strikewater" element={<StrikeWater />} />
        </Routes>
      <Footer />
    </div>
  )
}