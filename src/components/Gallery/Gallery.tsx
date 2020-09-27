import React, { useContext } from "react";

import Parameters from "../../Parameters";
import posters from "../Images";

import posterImages from "../Images";

import styles from "./gallery.module.css";

interface indexes {
  [key: string]: any;
}

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
      {posterImages.filter((poster, index) => params.favorites.includes(index) || !params.showFavorites).map((poster, index) => (
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
