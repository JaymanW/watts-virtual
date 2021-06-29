import React, { useState, useEffect } from 'react'
import './App.scss';

import Header from './components/Header'

function App() {
  const [windowWidth, setWindowWidth] = useState(null);

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
  
  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
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
