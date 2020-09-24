import React, { useContext } from "react";

import posterImages from "../Images";

import Parameters from "../../Parameters";

import styles from "./gallery.module.css";

function Gallery() {
  const { params, setParams } = useContext(Parameters);

  const setPosterIndex = (posterIndex: number) => {
    setParams({ ...params, posterIndex, slideshow: false });
  }

  return (
    <div className={styles.Gallery}>
      {posterImages.map((poster, index) => (
        <div
          className={styles.Thumbnail}
          key={index}
          onClick={() => setPosterIndex(index)}
        >
          <div className={styles.SmallPoster}>{poster}</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
