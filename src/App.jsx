import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from "../src/Pages/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <div>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
   </div>
  )
}

export default App
