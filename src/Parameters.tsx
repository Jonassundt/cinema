import React from "react";

const initialState = {
  light: 0,
  volume: 0,
  animation: false,
  color: false,
  fullscreen: false,
  slideshow: false,
  posterIndex: 0,
  favorites: [0],
  showFavorites: false,
  loading: false,
  mood: true
}


const Parameters = React.createContext({
  //Context wrapper for the website, with the initial state as described above as parameters.
  params: initialState,
  setParams: (params: any) => { },
});

export default Parameters;