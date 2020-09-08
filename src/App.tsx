import React, { useState } from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import Poster from "./components/Poster/Poster"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

import './index.css';

function App() {
  const [light, setLight] = useState(50);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="Background" style={{ backgroundColor: `rgb(0,0,${light})` }}>
      <div className="App">
        <div className="App-header">
          Prosjekt 2, Gruppe 60
      </div>
        {/* TODO: Show components immediately, or display a simple welcome-page initially? */}
        <div>
          <Toolbar changeLight={(increase: boolean) => setLight(increase ? (light < 100 ? light + 5 : light) : (light > 50 ? light - 5 : light))} changeFullscreen={() => setFullscreen(!fullscreen)} />
          <Poster fullscreen={fullscreen} changeFullscreen={() => setFullscreen(false)} />
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
