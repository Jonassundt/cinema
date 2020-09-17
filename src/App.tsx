import React, { useState, useMemo } from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import Poster from "./components/Poster/Poster"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

import Parameters from "./Parameters";

import './index.css';

function App() {
  const [params, setParams] = useState({
    light: 30,
    volume: 0,
    animation: true,
    color: true,
    fullscreen: false,
    slideshow: false,
  });

  const providerValue = useMemo(() => ({ params, setParams }), [params, setParams])

  return (
    <Parameters.Provider value={providerValue}>
      <div className="Background" style={{ backgroundColor: `rgb(0,0,${params.light})` }}>
        <div className="App">
          <div className="App-header">
            Prosjekt 2, Gruppe 60
      </div>
          {/* TODO: Show components immediately, or display a simple welcome-page initially? */}
          <div>
            <Toolbar />
            <Poster />
            <Gallery />
            <Footer />
          </div>
        </div>
      </div></Parameters.Provider>
  );
}

export default App;
