import React from 'react'
import { Navbar } from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Restaurant from '../Pages/Restaurant/Restaurant'

const Main = () => {
  return (
    <Routes>
    <Route path="/Swiggy_demo" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
  )
}

export default Main