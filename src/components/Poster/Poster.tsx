import React from 'react';

import styles from './poster.module.css';

interface PosterProps {
    changeFullscreen: Function,
    fullscreen: boolean
}

function Poster(props: PosterProps) {
    if (props.fullscreen) {
        return (
            <div>
                <div className={styles.Poster} />
                <div className={styles.PosterFullscreen}>
                    <div className={styles.Icon} onClick={() => props.changeFullscreen()}>x</div>
                    <div className={styles.Frame}>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.Poster}>
            <div className={styles.Frame}>
            </div>
        </div>
    );
}

export default Poster;
