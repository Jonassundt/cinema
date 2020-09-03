import React from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import Artwork from "./components/Artwork/Artwork"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

import './index.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Prosjekt 2, Gruppe 60
      </div>
      {/* TODO: Show components immediately, or display a simple welcome-page initially? */}
      <div>
        <Toolbar />
        <Artwork />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
