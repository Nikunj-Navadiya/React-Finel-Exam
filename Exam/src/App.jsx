import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import View from './pages/View'
import Add from './pages/Add'
import Edit from './pages/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
