import React, { useState, useContext } from "react";
import styles from "./poster.module.css";
import { ReactComponent as Bond } from "../Images/bond.svg";
import TestImage from "../Images/testimage.jpg"

import Parameters from "../../Parameters";


const posters = [<Bond height="1000" width="750" />, <img src={TestImage} alt="image" height="1000" width="750" />];

function Poster() {
    const { params, setParams } = useContext(Parameters);
    const setFullscreen = () => setParams({ ...params, fullscreen: !params.fullscreen })

    const [posterIndex, setPosterIndex] = useState(0)

    if (params.fullscreen) {
        return (
            <div>
                <div className={styles.Poster} />
                <div className={styles.PosterFullscreen}>
                    <div className={styles.Icon} onClick={() => setFullscreen()}>
                        x
                    </div>
                    <div className={styles.Frame}></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.Poster}>
                <img
                    className={styles.ArrowButtons}
                    src="icons/leftarrow.svg"
                    alt="left arrow"
                    onClick={() => posterIndex > 0 && setPosterIndex(posterIndex - 1)}
                />
                <div className={styles.Frame} style={{ filter: `grayscale(${params.color ? 0 : 1})` }}>
                    {posters[posterIndex]}
                </div>
                <img
                    className={styles.ArrowButtons}
                    src="icons/rightarrow.svg"
                    alt="right arrow"
                    onClick={() => posterIndex < posters.length - 1 && setPosterIndex(posterIndex + 1)}
                />
            </div>
            <div className={styles.Description}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
       </div> </div>
    );
}

export default Poster;
