import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home.jsx"

const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default AllRouters