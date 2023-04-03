import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navber/Navbar'
import PriceList from './Component/PriceList/PriceList'
import Dashboard from './Component/Dashboard/Dashboard'
import PhoneBar from './Component/PhoneBar/PhoneBar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className='mt-4 font-medium  bg-red-300'>Hello from Tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
