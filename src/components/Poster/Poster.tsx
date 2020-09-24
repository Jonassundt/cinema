import React, { useState, useContext, useEffect } from "react";
import styles from "./poster.module.css";

import PosterElement from "../PosterElement/PosterElement";
import FetchMovie from "./fetchData";

import posterImages from "../Images";

import Parameters from "../../Parameters";

function Poster() {
  const { params, setParams } = useContext(Parameters);

  let height = params.fullscreen ? 1500 : 800;

  const posters = posterImages.map((poster) => (
    <PosterElement poster={poster} height={height} />
  ));

  const setPosterIndex = (posterIndex: number) => setParams({ ...params, posterIndex });
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slideshowId, setSlideshowId] = useState(0);

  const prevPoster = () => {
    if (leftAnimation || rightAnimation) return;
    setLeftAnimation(true);
    setTimeout(() =>
      setPosterIndex((params.posterIndex + posters.length - 1) % posters.length), 400); //Ensures that modulo works correctly.
    setTimeout(() => setLeftAnimation(false), 800);
  }

  const nextPoster = () => {
    if (leftAnimation || rightAnimation) return;
    setRightAnimation(true);
    setTimeout(() =>
      setPosterIndex((params.posterIndex + 1) % posters.length), 400);
    setTimeout(() => setRightAnimation(false), 800)
  }

  const playSound = () => {
    let number = Math.random();
    let url;
    if (number < 0.1) {
      number = number * 10;
      if (number > 0.6) {
        url = "/sounds/Villager.mp3";
      }
      else if (number > 0.3) {
        url = "/sounds/O.mp3"
      }
      else {
        url = "/sounds/Pig.mp3";
      }
      const audio = new Audio(url);
      audio.load();
      audio.play();
      audio.volume = 0.5;
    }
  }

  const keyboardEvent = (c: Number) => {
    if (c === 37) prevPoster();
    else if (c === 39) nextPoster();
    return;
  };

  // const runSlideshow = () => {
  //   const id = setInterval(nextPoster, 2000);
  //   setSlideshowId(parseInt(id.toString()));
  // }

  // const stopSlideshow = () => {
  //   clearInterval(slideshowId);
  //   setSlideshowId(0);
  // }

  const startSlideshow = () => {
    const id = setTimeout(nextPoster, 2000);
    setSlideshowId(parseInt(id.toString()));
    continueSlideshow();
  }

  const continueSlideshow = () => {
    clearInterval(slideshowId);
    setSlideshowId(0);
  }

  const stopSlideshow = () => {
    clearInterval(slideshowId);
    setSlideshowId(0);
  }

  useEffect(() => {
    document.addEventListener("keydown", event => keyboardEvent(event.keyCode), false);

    console.log(params.slideshow)
    if (loading) {
      setTimeout(() => setLoading(false), 4900);
    }
    if (params.slideshow && !slideshowId) { //hvis det ikke kjøres slideshow nå, og slideshow-variabel er sann, start slideshow
      startSlideshow();
    }
    else if (!params.slideshow && slideshowId) { //hvis det kjøres slideshow nå, og slideshow-variabel er false -> stopp slideshow
      continueSlideshow();
    }
    else if (!params.slideshow) { //hvis det kjøres slideshow nå, og slideshow-variabel er false -> stopp slideshow
      stopSlideshow();
    }
  }, [params, startSlideshow, slideshowId]);

  if (loading) {
    return (
      <div>
        <div className={styles.Poster} onClick={() => setLoading(false)} >
          <div className={styles.Frame} >
            <div className={styles.Loader}>
              <div className={styles.Circle1}></div>
              <div className={styles.Circle2}></div>
              <div className={styles.Niddle}></div>
              <div className={styles.Number}>
                {["5", "4", "3", "2", "1"].map((number) => <div key={number}>{number}</div>)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Description}>
          <div className={styles.DescriptionText}>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}>
        <img
          className={styles.ArrowButtons}
          src="icons/leftarrow.svg"
          alt="left arrow"
          onClick={() => { prevPoster(); playSound(); }}
        />
        <div className={leftAnimation ? styles.LeftAnimation : rightAnimation ? styles.RightAnimation : styles.Frame} style={{ filter: `grayscale(${params.color ? 0 : 1})` }}>
          {posters[params.posterIndex]}
        </div>
        <img
          className={styles.ArrowButtons}
          src="icons/rightarrow.svg"
          alt="right arrow"
          onClick={() => { nextPoster(); playSound() }}
        />
      </div>
      <div className={params.fullscreen ? styles.DescriptionFullscreen : styles.Description}>
        {leftAnimation || rightAnimation ? null : (
          <div className={styles.DescriptionText}>
            <FetchMovie />
          </div>
        )}
      </div>
    </div>
  );
}

export default Poster;
