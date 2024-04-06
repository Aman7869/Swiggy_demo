import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'

const App = () => {
  return (
    <Routes>
    <Route path="/*" element={<DefaultLayout />}>
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
  )
}

export default App