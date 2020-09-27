import React, { useState, useContext, useEffect } from "react";

import PosterElement from "../PosterElement/PosterElement";
import FetchMovie from "./fetchData";

import posterImages from "../Images";

import Parameters from "../../Parameters";

import styles from "./poster.module.css";


function Poster() {
  const { params, setParams } = useContext(Parameters);

  let height = params.fullscreen ? 1500 : 800;

  const posters = posterImages.map((poster) => (
    <PosterElement poster={poster} height={height} />
  ));

  const setPosterIndex = (posterIndex: number) => setParams({ ...params, posterIndex });
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);
  const doneLoading = () => setParams({ ...params, loading: false })
  const [slideshowId, setSlideshowId] = useState(0);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  const prevPoster = () => {
    if (leftAnimation || rightAnimation) return;
    setLeftAnimation(true);
    setTimeout(() =>
      setPosterIndex((params.posterIndex + posters.length - 1) % posters.length), 400); //Ensures that modulo works correctly.
    setTimeout(() => setLeftAnimation(false), 800);
    sessionStorage.setItem("posterIndex", ((params.posterIndex + posters.length - 1) % posters.length).toString());
  }

  const nextPoster = (slideshowIndex: number = -1) => {
    if (leftAnimation || rightAnimation) return;
    setRightAnimation(true);
    setTimeout(() =>
      slideshowIndex >= 0 ? setPosterIndex(slideshowIndex) : setPosterIndex((params.posterIndex + 1) % posters.length), 400);
    setTimeout(() => setRightAnimation(false), 800)
    sessionStorage.setItem("posterIndex", ((params.posterIndex + 1) % posters.length).toString());
  }

  const playSound = () => {
    let number = Math.random();
    let url;
    if (number < 0.1) {
      number = number * 10;
      if (number > 0.6) {
        url = "/sounds/villager.mp3";
      }
      else if (number > 0.3) {
        url = "/sounds/o.mp3"
      }
      else {
        url = "/sounds/pig.mp3";
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

  const startSlideshow = () => {
    setSlideshowIndex((params.posterIndex + 1) % posters.length);
    const id = setInterval(() => { setSlideshowIndex(prev => (prev + 1) % posters.length); }, 15000);
    setSlideshowId(parseInt(id.toString()));
  }

  const stopSlideshow = () => {
    clearInterval(slideshowId);
    setSlideshowId(0);
    setSlideshowIndex(-1);
  }

  useEffect(() => {
    document.addEventListener("keydown", event => keyboardEvent(event.keyCode), false);

    if (params.loading) {
      setTimeout(() => doneLoading(), 4900);
    }
    else if (params.slideshow && !slideshowId) { //hvis det ikke kjøres slideshow nå, og slideshow-variabel er sann, start slideshow
      startSlideshow();
    }
    else if (!params.slideshow && slideshowId) { //hvis det kjøres slideshow nå, og slideshow-variabel er false -> stopp slideshow
      stopSlideshow();
    }
    else if (params.slideshow && slideshowIndex > -1) {
      nextPoster(slideshowIndex);
    }
  }, [params.slideshow, params.posterIndex, slideshowId, slideshowIndex, setSlideshowIndex]);

  if (params.loading) {
    return (
      <div>
        <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster} onClick={doneLoading} >
          <div className={styles.Frame} >
            <div className={styles.Loader} style={params.fullscreen ? { height: "1500px", width: "100%" } : { height: "800px", width: "1300px" }}>
              <div className={styles.Circle1}></div>
              <div className={styles.Circle2}></div>
              <div className={styles.Niddle}></div>
              <div className={styles.Number}>
                {["5", "4", "3", "2", "1"].map((number) => <div key={number}>{number}</div>)}
              </div>
            </div>
          </div>
        </div>
        {params.fullscreen ? null :
          <div className={styles.Description}>
            <div className={styles.DescriptionText}>
            </div>
          </div>}
      </div>
    )
  }

  return (
    <div>
      <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}>
        {params.slideshow ? <div /> :
          <img
            className={styles.ArrowButtons}
            src="icons/leftarrow.svg"
            alt="left arrow"
            onClick={() => { prevPoster(); playSound(); }}
          />}
        <div className={leftAnimation ? styles.LeftAnimation : rightAnimation ? styles.RightAnimation : styles.Frame} style={{ filter: `grayscale(${params.color ? 0 : 1})` }}>
          {posters[params.posterIndex]}
        </div>
        {params.slideshow ? <div /> :
          <img
            className={styles.ArrowButtons}
            src="icons/rightarrow.svg"
            alt="right arrow"
            onClick={() => { nextPoster(); playSound() }}
          />}
      </div>
      {params.fullscreen ? null :
        <div className={styles.Description}>
          {leftAnimation || rightAnimation ? null : (
            <div className={styles.DescriptionText}>
              <FetchMovie />
            </div>
          )}
        </div>}
    </div>
  );
}

export default Poster;
