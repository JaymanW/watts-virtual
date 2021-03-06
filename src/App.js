import React, { useState, useEffect } from 'react'
import './App.scss';

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // useEffect(() => {
  //   console.log(windowWidth)
  // }, [windowWidth])

  const updateWindowWidth = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
    // setNewBurgerStyle(!newBurgerStyle);
  }
  
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} onBurger={handleOpen} windowWidth={windowWidth}/>
      <Header windowWidth={windowWidth} onBurger={handleOpen} isOpen={isOpen} />
      <Landing />
      <About />
      <Services />
      <Work />
      <Contact windowWidth={windowWidth} />
      <Footer />
    </div>
  );
}

export default App;
