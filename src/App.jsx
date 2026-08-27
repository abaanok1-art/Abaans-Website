import './App.css'
import Navbar from './Components/Navbar/navbar'
import Homepage from './Components/HomePage/home'
import CONTACT from './Components/Contact/contact'
import ABOUT from './Components/About/about'
import SKILLS from './Components/Skills/skilld'
import { Navigate, Route, Routes } from 'react-router-dom'
import ThemeToggle from './Components/TheneToggle.jsx/ThemeToggle'
function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/skills" element={<SKILLS />} />
        <Route path="/Skills" element={<Navigate to="/skills" replace />} />
        <Route path="/contact" element={<CONTACT />} />
      </Routes>
    </>
  )
}
export default App