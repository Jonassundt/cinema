import React, { useState, useContext, useEffect } from "react";
import styles from "./poster.module.css";
import { ReactComponent as Bond } from "../Images/bond.svg";
import { ReactComponent as Interstellar } from "../Images/interstellar.svg";
import { ReactComponent as Batman } from "../Images/batman.svg";
import { ReactComponent as Inception } from "../Images/Inception.svg";
import { ReactComponent as Starwars } from "../Images/Starwars.svg";
import { ReactComponent as Shawshank } from "../Images/Shawshank.svg";

import Parameters from "../../Parameters";

function Poster() {
    const { params, setParams } = useContext(Parameters);

    let height = params.fullscreen ? 1500 : 800;
    let width = (height / 1.3333);

    const posters = [<Bond height={height} width={width} />, <Inception height={height} width={width} />,
         <Interstellar height={height} width={width} />, <Batman height={height} width={width} />,
         <Shawshank height={height} width={width} />, <Starwars height={height} width={width} />];

    const setPosterIndex = (posterIndex: number) => setParams({ ...params, posterIndex })
    const setRunningSlideshow = (runningSlideshow: boolean) => setParams({ ...params, runningSlideshow})
    const [leftAnimation, setLeftAnimation] = useState(false)
    const [rightAnimation, setRightAnimation] = useState(false)
    let myInterval: any = null;

    const prevPoster = () => {
        if (leftAnimation || rightAnimation) return;
        setLeftAnimation(true);
        setTimeout(() =>
            setPosterIndex((params.posterIndex + posters.length -1) % posters.length), 500); //Ensures that modulo works correctly.
        setTimeout(() => setLeftAnimation(false), 1200);
    }


    const nextPoster = () => {
        if (leftAnimation || rightAnimation) return;
        setRightAnimation(true);
            setTimeout(() =>
                setPosterIndex((params.posterIndex + 1) % posters.length), 500);
            setTimeout(() => setRightAnimation(false), 1200)
    }

    const keyboardEvent = (c: Number) => {
        if (c === 37) prevPoster();
        else if (c === 39) nextPoster();
        return;
    }

    /*
    const runSlideshow = () => {
        setRunningSlideshow(true);
        myInterval = setInterval(nextPoster, 4000);
        //console.log("runSlideshow method is called.");
    }

    const stopSlideshow = () => {
        setRunningSlideshow(false);
        clearInterval(myInterval);
        //console.log("stopSlideshow method is called.");
    }
    */


    useEffect(() => {
        document.addEventListener("keydown", event => keyboardEvent(event.keyCode), false);

        /*
        if(!params.runningSlideshow && params.slideshow){ //hvis det ikke kjøres slideshow nå, og slideshow-variabel er sann, start slideshow
            runSlideshow();
        }
        else if(params.runningSlideshow && !params.slideshow){ //hvis det kjøres slideshow nå, og slideshow-variabel er false -> stopp slideshow
            stopSlideshow();
        }
        else{
            //do nothing
        }
        */
        
        
    }, [params.slideshow]);

    return (
        <div>
            <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}>
                <img
                    className={styles.ArrowButtons}
                    src="icons/leftarrow.svg"
                    alt="left arrow"
                    onClick={prevPoster}
                />
                <div className={leftAnimation ? styles.LeftAnimation : rightAnimation ? styles.RightAnimation : styles.Frame} style={{ filter: `grayscale(${params.color ? 0 : 1})` }}>
                    {posters[params.posterIndex]}
                </div>
                <img
                    className={styles.ArrowButtons}
                    src="icons/rightarrow.svg"
                    alt="right arrow"
                    onClick={nextPoster}
                />
            </div>
            <div className={params.fullscreen ? styles.DescriptionFullscreen : styles.Description}>
                {leftAnimation || rightAnimation ? null : <div className={styles.DescriptionText} > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                 </div>}    </div></div>
    );
}

export default Poster;
