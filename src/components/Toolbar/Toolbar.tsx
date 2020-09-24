import React, { useContext, useState, useEffect } from 'react';

import posterImages from "../Images";

import Parameters from "../../Parameters";

import styles from './toolbar.module.css';

function Toolbar() {
    const { params, setParams } = useContext(Parameters);
    const setLight = (light: Number) => setParams({ ...params, light })
    const setVolume = (volume: Number) => setParams({ ...params, volume })
    const setAnimation = () => setParams({ ...params, animation: !params.animation })
    const setColor = () => setParams({ ...params, color: !params.color })
    const setFullscreen = () => setParams({ ...params, fullscreen: !params.fullscreen })
    const toggleSlideshow = () => setParams({ ...params, slideshow: !params.slideshow });
    const [slideShowIntervalId, setSlideShowIntervalId] = useState(0);
    const [slideshowBar, setSlideshowBar] = useState(0);

    const slideshow = () => {
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
    }, [params.slideshow, slideShowIntervalId])

    return (
        <div>
            <div className={params.fullscreen ? styles.ToolbarFullscreen : styles.Toolbar}>
                {/* Lyssetting */}
                <div>
                    <img className={styles.Icon} src={"/icons/brightness.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.light < 70 && setLight(params.light + 5)}>+</div>
                        <div>{(params.light - 40) * 3}</div>
                        <div onClick={() => params.light > 40 && setLight(params.light - 5)}>-</div>
                    </div></div>
                <div>
                    {/* Volum */}
                    <img className={styles.Icon} src={"/icons/volume.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.volume < 9 && setVolume(params.volume + 1)}>+</div>
                        <div>{params.volume * 10}</div>
                        <div onClick={() => params.volume > 0 && setVolume(params.volume - 1)}>-</div>
                    </div>
                </div>
                {/* Animasjoner */}
                <div className={styles.Button} onClick={setAnimation}>Animasjon</div>
                {/* Sort-hvitt */}
                <div className={styles.Button} onClick={setColor}>Fargefilm</div>
                {/* Slideshow */}
                <div className={styles.ButtonBar} onClick={slideshow}>
                    <div className={styles.SlideBar} style={{ width: `${(slideshowBar / 15) * 100}%` }}>
                        <div className={styles.SlideText}>{!params.slideshow ? "Slideshow" :
                            <div>Neste: <strong>{posterImages[(params.posterIndex + 1) % posterImages.length].props.name}</strong></div>}
                        </div>
                    </div>
                </div>
                {/* Fullskjerm */}
                <div className={styles.Button} onClick={setFullscreen}>Fullskjerm</div>
                {/* Favoritt */}
                <div className={styles.Row}>
                    <div className={styles.Toggle}>Lagre favoritt</div>
                    {/* Favoritter */}
                    <div className={styles.Toggle}>Se favoritter</div>
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
