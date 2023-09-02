import React from 'react'
import Navbar from './components/Navbar';
import './index.css'
import Home from './components/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='md:ml-[40px] md:mr-[40px] ml-[10px] mr-[10px] mt-[20px] text-white overflow-x-hidden'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;