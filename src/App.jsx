import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Monolith_Hero_banner from './compoents/Monolith_Hero_banner'
import Acoordion from './compoents/Acoordion'

function App() {

  return (
    <div className="App">
      <Monolith_Hero_banner />
      <Acoordion />
    </div>
  )
}

export default App
