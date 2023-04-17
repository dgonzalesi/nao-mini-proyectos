import './App.css'
import React from 'react'
import { Calculator } from './Calculator'
import { Breakout } from './Breakout'
import { Routes, Route } from 'react-router-dom'
import { Newyears } from './Newyears'
function App () {
  return (
    <>
      <nav>
        <ul className='bg-orange-500 text-white font-bold flex gap-4 h-14 justify-center p-4'>
          <li>
            <a href='/'>Calculator</a>
          </li>
          <li>
            <a href='/breakout'>Breakout</a>
          </li>
          <li>
            <a href='/scroll'>Scroll</a>
          </li>
          <li>
            <a href='/newyears'>Contador a Año Nuevo</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Calculator />}
        />
        <Route
          path='/breakout'
          element={<Breakout />}
        />
        <Route
          path='/scroll'
          element={<Newyears />}
        />
        <Route
          path='/newyears'
          element={<Newyears />}
        />
        <Route
          path='*'
          element={<div> No Page To Display </div>}
        />
      </Routes>
    </>
  )
}

export default App
