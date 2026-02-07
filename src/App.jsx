import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import CardMachines from './pages/CardMachines'
import OnlinePayments from './pages/OnlinePayments'
import Epos from './pages/Epos'
import Funding from './pages/Funding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/card-machines' element={<CardMachines />} />
        <Route path='/online-payments' element={<OnlinePayments />} />
        <Route path='/epos' element={<Epos />} />
        <Route path='/murchant-funding' element={<Funding />} />
      </Routes>
    </div>
  )
}

export default App
