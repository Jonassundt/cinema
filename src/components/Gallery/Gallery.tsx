import React from 'react';

import styles from "./gallery.module.css"

function Thumbnail() {
    return (
        <div className={styles.Thumbnail}>
            Poster
        </div>
    )
}

function Gallery() {
    return (
        <div className={styles.Gallery}>
            {[0, 1, 2, 3].map((image, id) => <Thumbnail key={id} />)}
            <p>
                TODO: Show all posters here, for the user to hover and click
            </p>
        </div>
    );
}

export default Gallery;
