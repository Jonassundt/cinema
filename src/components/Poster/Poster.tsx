import React, { useState, useContext, useEffect } from "react";
import styles from "./poster.module.css";
import { ReactComponent as Bond } from "../Images/bond.svg";
import { ReactComponent as Interstellar } from "../Images/interstellar.svg";
import { ReactComponent as Batman} from "../Images/batman.svg";
import { ReactComponent as Inception} from "../Images/Inception.svg";

import Parameters from "../../Parameters";

function Poster() {
    const { params } = useContext(Parameters);

    let height = params.fullscreen ? 1500 : 800;
    let width = (height / 1.3333);

    const posters = [<Bond height={height} width={width} />, <Inception height={height} width={width} />, <Interstellar height={height} width={width} />, <Batman height={height} width={width} />];

    const [posterIndex, setPosterIndex] = useState(0)
    const [leftAnimation, setLeftAnimation] = useState(false)
    const [rightAnimation, setRightAnimation] = useState(false)

    const prevPoster = () => {
        if (leftAnimation || rightAnimation) return;
        if (posterIndex > 0) {
            setPosterIndex(posterIndex - 1);
            setRightAnimation(true);
            setTimeout(() => setRightAnimation(false), 1000)
        }
    }

    const nextPoster = () => {
        if (leftAnimation || rightAnimation) return;
        if (posterIndex < posters.length - 1) {
            setPosterIndex(posterIndex + 1);
            setLeftAnimation(true);
            setTimeout(() => setLeftAnimation(false), 1000)
        }
    }

    const keyboardEvent = (c: Number) => {
        if (c === 37) prevPoster();
        else if (c === 39) nextPoster();
        return;
    }

    useEffect(() => {
        document.addEventListener("keydown", event => keyboardEvent(event.keyCode), false);
    });

    return (
        <div>
            <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}>
                <img
                    className={styles.ArrowButtons}
                    src="icons/leftarrow.svg"
                    alt="left arrow"
                    onClick={prevPoster}
                />
                {/* <div style={{ filter: `grayscale(${params.color ? 0 : 1})` }}> */}
                {leftAnimation ? <div className={styles.LeftAnimationFrame}>
                    {posters[posterIndex - 1]}
                </div>
                    : null}
                <div className={styles.Frame}>
                    {posters[posterIndex]}
                </div>
                {rightAnimation ? <div className={styles.RightAnimationFrame}>
                    {posters[posterIndex + 1]}
                </div> : null}
                {/* </div> */}
                <img
                    className={styles.ArrowButtons}
                    src="icons/rightarrow.svg"
                    alt="right arrow"
                    onClick={nextPoster}
                />
            </div>
            <div className={params.fullscreen ? styles.DescriptionFullscreen : styles.Description}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
       </div> </div>
    );
}

export default Poster;
