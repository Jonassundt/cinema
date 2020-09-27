import React, { useContext } from "react";

import Parameters from "../../Parameters";

import posterImages from "../Images";

import styles from "./gallery.module.css";

function Gallery() {
  const { params, setParams } = useContext(Parameters);

  const setPosterIndex = (posterIndex: number) => {
    if (params.loading) return;
    sessionStorage.setItem("posterIndex", posterIndex.toString());
    setParams({ ...params, posterIndex, slideshow: false });
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.Gallery}>
      {posterImages.map((poster, index) => (
        (params.favorites.includes(index) || !params.showFavorites) ?
          <div
            className={styles.Thumbnail}
            key={index}
            onClick={() => setPosterIndex(index)}
          >
            <div className={styles.SmallPoster}>{poster}</div>
          </div> : null
      ))}
    </div>
  );
}

export default Gallery; 
