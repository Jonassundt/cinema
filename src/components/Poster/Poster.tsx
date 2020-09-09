import React from "react";
import styles from "./poster.module.css";

interface PosterProps {
  changeFullscreen: Function;
  fullscreen: boolean;
}

function Poster(props: PosterProps) {
  if (props.fullscreen) {
    return (
      <div>
        <div className={styles.Poster} />
        <div className={styles.PosterFullscreen}>
          <div className={styles.Icon} onClick={() => props.changeFullscreen()}>
            x
          </div>
          <div className={styles.Frame}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Poster}>
      <img
        className={styles.ArrowButtons}
        src="icons/leftarrow.svg"
        alt="left arrow"
      ></img>

      <div className={styles.Frame}>
        <img className={styles.Image} src="/images/testimage.jpg" alt="image" />
      </div>

      <img
        className={styles.ArrowButtons}
        src="icons/rightarrow.svg"
        alt="right arrow"
      />
    </div>
  );
}

export default Poster;
