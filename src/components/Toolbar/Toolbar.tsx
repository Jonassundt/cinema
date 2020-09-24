import React, { useContext } from 'react';

import styles from './toolbar.module.css';

import Parameters from "../../Parameters";

function Toolbar() {
    const { params, setParams } = useContext(Parameters);
    const setLight = (light: Number) => setParams({ ...params, light })
    const setVolume = (volume: Number) => setParams({ ...params, volume })
    const setAnimation = () => setParams({ ...params, animation: !params.animation })
    const setColor = () => setParams({ ...params, color: !params.color })
    const setFullscreen = () => setParams({ ...params, fullscreen: !params.fullscreen })
    const toggleSlideshow = () => setParams({ ...params, slideshow: !params.slideshow });

    return (
        <div>
            <div className={params.fullscreen ? styles.ToolbarFullscreen : styles.Toolbar}>
                {/* Lyssetting */}
                <div>
                    <img className={styles.Icon} src={"/icons/brightness.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.light < 60 && setLight(params.light + 5)}>+</div>
                        <div onClick={() => params.light > 30 && setLight(params.light - 5)}>-</div>
                    </div></div>
                <div>
                    {/* Volum */}
                    <img className={styles.Icon} src={"/icons/volume.svg"} alt="" />
                    <div className={styles.Group}>
                        <div onClick={() => params.volume < 9 && setVolume(params.volume + 1)}>+</div>
                        <div onClick={() => params.volume > 0 && setVolume(params.volume - 1)}>-</div>
                    </div>
                </div>
                {/* Animasjoner */}
                <div className={styles.Button} onClick={setAnimation}>Animasjon</div>
                {/* Sort-hvitt */}
                <div className={styles.Button} onClick={setColor}>Fargefilm</div>
                {/* Slideshow */}
                <div className={styles.Button} onClick={toggleSlideshow}>Slideshow</div>
                {/* Fullskjerm */}
                <div className={styles.Button} onClick={setFullscreen}>Fullskjerm</div>
                {/* Favoritt */}
                <div className={styles.Row}>
                    <div className={styles.Toggle}>Lagre favoritt</div>
                    {/* Favoritter */}
                    <div className={styles.Toggle}>Se favoritter</div>
                </div>
            </div>
            <div className={styles.SpotRow} style={{ opacity: params.light < 45 ? 0 : 1 }}>
                <div className={styles.Spotlight} />
                <div className={styles.Spotlight} />
            </div>
        </div>
    );
}

export default Toolbar;
