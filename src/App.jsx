import { useState } from 'react'
import backimg from './assets/image.png'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Homepage from './Components/HomePage/home'
import CONTACT from './Components/Contact/contact'
import ABOUT from './Components/About/about'
import SKILLS from './Components/Skills/skilld'
import EXP from './Components/Expereince/exp'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<ABOUT/>}/>
      <Route path='/Skills' element={<SKILLS/>}/>
      <Route path='/experience' element={<EXP/>}/>
      <Route path='/contact' element={<CONTACT/>}/>
    </Routes>
    </>
  )
 


}

export default App
