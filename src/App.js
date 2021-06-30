import React, { useState, useEffect } from 'react'
import './App.scss';

import Sidebar from './components/Sidebar'
import Header from './components/Header'

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
      <Sidebar isOpen={isOpen} onBurger={handleOpen} />
      <Header windowWidth={windowWidth} onBurger={handleOpen} isOpen={isOpen} />
      {/* LANDING */}
      {/* ABOUT */}
      {/* SERVICES */}
      {/* OUR WORK */}
      {/* CONTACT */}
      {/* FOOTER */}
    </div>
  );
}

export default App;
