import React from 'react'
import Nav from './components/Nav'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Footer from './components/Footer'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
      </Routes>
      
    
      

    </div>
  )
}

export default App