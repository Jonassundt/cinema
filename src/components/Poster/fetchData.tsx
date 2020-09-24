import React from "react";
import styles from "./fetchData.module.css";

import Parameters from "../../Parameters";

//bond-skyfall, inception, interstellar, batman, shawshank, starwars
const movieIds = [37724, 27205, 157336, 272, 278, 1891];

export default class fetchMovie extends React.Component {
  static contextType = Parameters;

  state = {
    loading: true,
    movie: { title: "", tagline: "", overview: "" },
    movieIds,
    apiKey: "4d785ede4f71452009daf3f954680323",
  };

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${
      movieIds[this.context.params.posterIndex]
    }?api_key=${this.state.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ movie: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.movie ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.container}>
            <div className={styles.tagline}>"{this.state.movie.tagline}"</div>
            <div className={styles.title}>{this.state.movie.title}</div>
            <div className={styles.overview}>{this.state.movie.overview}</div>
          </div>
        )}
      </div>
    );
  }
}
