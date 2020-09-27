import React from "react";

const initialState = {
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
  params: initialState,
  setParams: (params: any) => { },
});

export default Parameters;