import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import 'animate.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Hero />
       <About />
       <Footer />
    </>
  )
}
export default App
