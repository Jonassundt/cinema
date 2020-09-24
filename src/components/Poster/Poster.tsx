import React, { useState, useContext, useEffect } from "react";
import styles from "./poster.module.css";

import PosterElement from "../PosterElement/PosterElement";
import FetchMovie from "./fetchData";

import posterImages from "../Images";

import Parameters from "../../Parameters";

function Poster() {
  const { params, setParams } = useContext(Parameters);

  let height = params.fullscreen ? 1500 : 800;

  const setPosterIndex = (posterIndex: number) =>
    setParams({ ...params, posterIndex });
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);
  const [loading, setLoading] = useState(true);

  const posters = posterImages.map((poster) => (
    <PosterElement poster={poster} height={height} />
  ));

  const prevPoster = () => {
    if (leftAnimation || rightAnimation) return;
    if (params.posterIndex > 0) {
      setLeftAnimation(true);
      setTimeout(() => setPosterIndex(params.posterIndex - 1), 500);
      setTimeout(() => setLeftAnimation(false), 1200);
    }
  };

  const nextPoster = () => {
    if (leftAnimation || rightAnimation) return;
    if (params.posterIndex < posters.length - 1) {
      setRightAnimation(true);
      setTimeout(() => setPosterIndex(params.posterIndex + 1), 500);
      setTimeout(() => setRightAnimation(false), 1200);
    }
  };

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

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => keyboardEvent(event.keyCode),
      false
    );
    setTimeout(() => setLoading(false), 4900);
  });

  if (loading) {
    return (
      <div>
        <div className={styles.Poster} >
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
        <div
          className={styles.Description}>
          <div className={styles.DescriptionText}>
          </div>

        </div>
      </div>
    )
  }


  return (
    <div>
      <div
        className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}
      >
        <img
          className={
            params.posterIndex > 0 ? styles.ArrowButtons : styles.ArrowGrayed
          }
          src="icons/leftarrow.svg"
          alt="left arrow"
          onClick={() => { prevPoster(); playSound(); }}
        />
        <div
          className={
            leftAnimation
              ? styles.LeftAnimation
              : rightAnimation
                ? styles.RightAnimation
                : styles.Frame
          }
          style={{ filter: `grayscale(${params.color ? 0 : 1})` }}
        >
          {posters[params.posterIndex]}
        </div>
        <img
          className={
            params.posterIndex < posters.length - 1
              ? styles.ArrowButtons
              : styles.ArrowGrayed
          }
          src="icons/rightarrow.svg"
          alt="right arrow"
          onClick={() => { nextPoster(); playSound() }}
        />
      </div>
      <div
        className={
          params.fullscreen ? styles.DescriptionFullscreen : styles.Description
        }
      >
        {leftAnimation || rightAnimation ? null : (
          <div className={styles.DescriptionText}>
            <FetchMovie></FetchMovie>
          </div>
        )}
      </div>
    </div>
  );
}

export default Poster;
