import React from "react";

const initialState = {
  /* Initial state for the websites parameters.
  *  all settings can be modified by the user via the GUI.
  */
  light: 40,
  volume: 0,
  animation: false,
  color: true,
  fullscreen: false,
  slideshow: false,
  posterIndex: 0,
  favorites: [0],
  showFavorites: false,
  loading: true
}


const Parameters = React.createContext({
  //Context wrapper for the website, with the initial state as described above as parameters.
  params: initialState,
  setParams: (params: any) => { },
});

export default Parameters;