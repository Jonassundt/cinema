import React from "react";

const initialState = {
    light: 30,
    volume: 0,
    animation: true,
    color: true,
    fullscreen: false,
    slideshow: false,
}

const Parameters = React.createContext({
    params: initialState, setParams: (params: any) => {
    }
});

export default Parameters;