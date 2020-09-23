import React, { useState, useContext, useEffect } from "react";
import styles from "./poster.module.css";

import PosterElement from "../PosterElement/PosterElement";

import posterImages from "../Images";

import Parameters from "../../Parameters";

function Poster() {
  const { params, setParams } = useContext(Parameters);

  let height = params.fullscreen ? 1500 : 800;

  const setPosterIndex = (posterIndex: number) =>
    setParams({ ...params, posterIndex });
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);

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

  const keyboardEvent = (c: Number) => {
    if (c === 37) prevPoster();
    else if (c === 39) nextPoster();
    return;
  };

    return (
        <div>
            <div className={params.fullscreen ? styles.PosterFullscreen : styles.Poster}>
                <img
                    className={params.posterIndex > 0 ? styles.ArrowButtons : styles.ArrowGrayed}
                    src="icons/leftarrow.svg"
                    alt="left arrow"
                    onClick={prevPoster}
                />
                <div className={leftAnimation ? styles.LeftAnimation : rightAnimation ? styles.RightAnimation : styles.Frame} style={{ filter: `grayscale(${params.color ? 0 : 1})` }}>
                    {posters[params.posterIndex]}
                </div>
                <img
                    className={params.posterIndex < posters.length - 1 ? styles.ArrowButtons : styles.ArrowGrayed}
                    src="icons/rightarrow.svg"
                    alt="right arrow"
                    onClick={nextPoster}
                />
            </div>
            <div className={params.fullscreen ? styles.DescriptionFullscreen : styles.Description}>
                {leftAnimation || rightAnimation ? null : <div className={styles.DescriptionText} > 
                <FetchMovie></FetchMovie>
                 </div>}    </div></div>
    );
  });

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
          onClick={prevPoster}
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
          onClick={nextPoster}
        />
      </div>
      <div
        className={
          params.fullscreen ? styles.DescriptionFullscreen : styles.Description
        }
      >
        {leftAnimation || rightAnimation ? null : (
          <div className={styles.DescriptionText}>
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default Poster;
