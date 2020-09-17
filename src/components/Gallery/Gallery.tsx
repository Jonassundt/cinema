import React, { useContext } from 'react';

import Parameters from "../../Parameters";

import styles from "./gallery.module.css"

function Thumbnail() {
    return (
        <div className={styles.Thumbnail}>
            Poster
        </div>
    )
}

function Gallery() {
    const { params, setParams } = useContext(Parameters);

    return (
        <div className={styles.Gallery}>
            {[0, 1, 2, 3, 4, 5].map((image, id) => <Thumbnail key={id} />)}
        </div>
    );
}

export default Gallery;
