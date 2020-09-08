import React from 'react';

import styles from './toolbar.module.css';

interface ToolbarProps {
    changeLight: Function,
    changeFullscreen: Function
}

function Toolbar(props: ToolbarProps) {
    return (
        <div className={styles.Toolbar}>
            {/* Lyssetting */}
            <div>
                <img className={styles.Icon} src={"/icons/brightness.svg"} alt="" />
                <div className={styles.Group}>
                    <div onClick={() => props.changeLight(true)}>+</div>
                    <div onClick={() => props.changeLight(false)}>-</div>
                </div></div>
            <div>
                {/* Volum */}
                <img className={styles.Icon} src={"/icons/volume.svg"} alt="" />
                <div className={styles.Group}>
                    <div onClick={() => { }}>+</div>
                    <div onClick={() => { }}>-</div>
                </div>
            </div>
            {/* Animasjoner */}
            <div className={styles.Button}>Animasjon</div>
            {/* Bakgrunnslys */}
            <div className={styles.Button}>Ambilight</div>
            {/* Sort-hvitt */}
            <div className={styles.Button}>Fargefilm</div>
            {/* Auto-scroll */}
            <div className={styles.Button}>Veksle</div>
            {/* Full meny */}
            <div className={styles.Button}>Bibliotek</div>
            {/* Fullskjerm */}
            <div className={styles.Button} onClick={() => props.changeFullscreen(true)}>Fullskjerm</div>
        </div>
    );
}

export default Toolbar;
