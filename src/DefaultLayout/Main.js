import React from 'react'
import { Navbar } from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Restaurant from '../Pages/Restaurant/Restaurant';
import ItemStore from '../Pages/ItemStore/ItemStore'
import { useSelector } from 'react-redux';

const Main = () => {
  // const itemData = useSelector((store)=>store.cart.items );
  // console.log('itemData: ', itemData);
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
    <Route path="/item-store/" element={<ItemStore />} />
  </Routes>
  )
}

export default Main