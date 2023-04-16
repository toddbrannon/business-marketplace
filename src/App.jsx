import React from 'react'

import './App.css'
import HiMom from './components/HiMom.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import TopRow from './components/TopRow/TopRow.jsx';
import Hero from './components/Hero/Hero.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';


function App() {

  return (
    <div className="App">
      <NavBar />
      <TopRow />
      <Hero />
      <HowItWorks />
      <HiMom />
    </div>
  )
}

export default App
