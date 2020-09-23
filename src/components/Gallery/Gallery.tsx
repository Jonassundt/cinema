import React, { useContext } from 'react';

import Parameters from "../../Parameters";
import { ReactComponent as Bond } from "../Images/bond.svg";
import { ReactComponent as Interstellar } from "../Images/interstellar.svg";
import { ReactComponent as Batman } from "../Images/batman.svg";
import { ReactComponent as Inception } from "../Images/Inception.svg";

import styles from "./gallery.module.css"

function Gallery() {
    const { params, setParams } = useContext(Parameters);

    const setPosterIndex = (posterIndex: number) => setParams({ ...params, posterIndex })

    const posters = [<Bond height="400" width="300" />, <Inception height="400" width="265" />, <Interstellar height="400" width="300" />, <Batman height="400" width="265" />];

    return (
        <div className={styles.Gallery}>
            {posters.map((poster, index) =>
                <div className={styles.Thumbnail} key={index} onClick={() => setPosterIndex(index)}>
                    <div className={styles.SmallPoster}>{poster}</div>
                </div>)}
        </div>
    );
}

export default Gallery;
