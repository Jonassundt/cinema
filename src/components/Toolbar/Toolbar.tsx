import React, { useContext, useState, useEffect } from 'react';

import posterImages from "../Images";

import Parameters from "../../Parameters";

import styles from './toolbar.module.css';

function Toolbar() {
    /* Hooks to handle the parameters given in the toolbar element.
    *The parameters controls how the website is to be displayed.
    * Parameters control brightness, volume, animations, colours, fullscreenmode, slideshowmode and if the user wishes to only see his/her favourite posters.
    */
    const { params, setParams } = useContext(Parameters);
    const setLight = (light: Number) => { sessionStorage.setItem("light", (light).toString()); setParams({ ...params, light }) };
    const setVolume = (volume: Number) => setParams({ ...params, volume });
    const setAnimation = () => { sessionStorage.setItem("animation", (!params.animation).toString()); setParams({ ...params, animation: !params.animation }) };
    const setColor = () => { sessionStorage.setItem("color", (!params.color).toString()); setParams({ ...params, color: !params.color }) };
    const setFullscreen = () => { sessionStorage.setItem("fullscreen", (!params.fullscreen).toString()); setParams({ ...params, fullscreen: !params.fullscreen }) };
    const toggleSlideshow = () => setParams({ ...params, slideshow: !params.slideshow });
    const toggleFavorites = () => {
        sessionStorage.setItem("showFavorites", (!params.showFavorites).toString());
        window.scroll({
            top: 4000,
            behavior: 'smooth'
        }); setParams({ ...params, showFavorites: !params.showFavorites })
    };
    const [slideShowIntervalId, setSlideShowIntervalId] = useState(0);
    const [slideshowBar, setSlideshowBar] = useState(0);
    const setFavorite = () => setParams({ ...params, favorites: toggleIndexFavorite() });
    const setMood = () => { sessionStorage.setItem("mood", (!params.mood).toString()); setParams({ ...params, mood: !params.mood }) };

    const toggleIndexFavorite = () => { //Legge til movieIndex hvis den eksisterer i params.favorites,
        // Eller fjerne den fra lista om den allerede eksisterer.
        let filteredArray: number[] = [];
        if (params.favorites.includes(params.posterIndex)) { //Remove if movie already in favorites
            filteredArray = params.favorites.filter(movie => movie !== params.posterIndex);
        }
        else { //Hvis den ikke er i lista, gjør den til favoritt.
            filteredArray = params.favorites;
            filteredArray.push(params.posterIndex);
        }
        localStorage.setItem("favorites", JSON.stringify(filteredArray));
        return filteredArray;
    }

    const slideshow = () => {
        //Method to initiate slideshow mode
        if (!params.slideshow) {
            const id = setInterval(() => setSlideshowBar(prev => (prev + 0.1) % 15), 100)
            setSlideShowIntervalId(parseInt(id.toString()));
        }
        else {
            clearInterval(slideShowIntervalId);
            setSlideShowIntervalId(0);
            setSlideshowBar(0)
        }
        toggleSlideshow();
    }

    useEffect(() => {
        if (!params.slideshow) {
            clearInterval(slideShowIntervalId);
            setSlideShowIntervalId(0);
            setSlideshowBar(0)
        }

    }, [params, slideShowIntervalId])

    if (params.loading) {
        return (
            <div className={params.fullscreen ? styles.ToolbarFullscreen : styles.Toolbar}>
            </div>
        )
    }

    return (
        <div style={{ display: "unset" }}>
            <div className={params.fullscreen ? styles.ToolbarFullscreen : styles.Toolbar}>
                {/* Lyssetting */}
                <div>
                    <img className={styles.Icon} src={"/icons/brightness.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.light < 77 && setLight(params.light + 4)}>+</div>
                        <div>{(params.light - 40) * 2.5}</div>
                        <div onClick={() => params.light > 40 && setLight(params.light - 4)}>-</div>
                    </div>
                </div>
                {/* Volum */}
                <div>
                    <img className={styles.Icon} src={"/icons/volume.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.volume < 10 && setVolume(params.volume + 1)}>+</div>
                        <div>{params.volume * 10}</div>
                        <div onClick={() => params.volume > 0 && setVolume(params.volume - 1)}>-</div>
                    </div>
                </div>
                {/* Animasjoner */}
                <div className={styles.Button} onClick={setAnimation}>Animasjon</div>
                {/* Sort-hvitt */}
                <div className={styles.Button} onClick={setColor}>Fargefilm</div>
                {/* Stemning */}
                <div className={styles.Button} onClick={setMood}>Stemning</div>
                {/* Fullskjerm */}
                <div className={styles.Button} onClick={setFullscreen}>{params.fullscreen ? "Vanlig skjerm" : "Fullskjerm"}</div>
                {/* Slideshow */}
                <div className={styles.ButtonBar} onClick={slideshow}>
                    <div className={styles.SlideBar} style={{ width: `${(slideshowBar / 15) * 100}%` }}>
                        <div className={styles.SlideText}>{!params.slideshow ? "Rullering" :
                            <div>Neste: <strong>{posterImages[(params.posterIndex + 1) % posterImages.length].props.name}</strong></div>}
                        </div>
                    </div>
                </div>
                {/* Favoritt */}
                <div className={styles.Row}>
                    <div className={styles.Toggle} onClick={setFavorite}>{params.favorites.includes(params.posterIndex) ? "Fjern" : "Lagre"} favoritt</div>
                    {/* Favoritter */}
                    {params.fullscreen ? null :
                        <div className={styles.Toggle} onClick={toggleFavorites}>{params.showFavorites ? "Se alle" : "Se favoritter"}</div>}
                </div>
            </div>
            <div className={styles.SpotRow} style={{ opacity: params.light < 55 ? 0 : 1 }}>
                <div className={styles.Spotlight} />
                <div className={styles.Spotlight} />
            </div>
        </div>
    );
}

export default Toolbar;
