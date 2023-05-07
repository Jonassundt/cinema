import React from "react";

import Parameters from "../../Parameters";

import styles from "./fetchData.module.css";

//bond-skyfall, inception, interstellar, batman, shawshank, starwars
const movieIds = [37724, 27205, 157336, 272, 278, 1891];

export default class fetchMovie extends React.Component {
  /* class component that handles fetching from themoviedb API.
   *
   */
  static contextType = Parameters;

  state = {
    /* Contains:
     *Loading: Bool for not displaying data while data is not yet fetched
     * movie : relevant JSON objects fetched from API, used on the site
     * apiKEY : api key needed for access to API
     * posterIndex : index for posters, deciding which movie the API should be called for information on
     */
    loading: true,
    movie: { title: "", tagline: "", overview: "" },
    movieIds,
    //Ja, du ser rett. API-nøkkelen ligger her og lurer.
    apiKey: "4d785ede4f71452009daf3f954680323",
    posterIndex: -1,
  };

  fetchData = async () => {
    /* Async method, fetching the relevant JSON objects
     */
    const posterIndex = this.context.params.posterIndex;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieIds[posterIndex]}?api_key=${this.state.apiKey}`
    );
    const data = await response.json();
    this.setState({ movie: data, loading: false, posterIndex });
  };

  async componentDidMount() {
    /* LifeCycle method, fetching data when component is mounted
     */
    await this.fetchData();
  }

  async componentDidUpdate() {
    /* LifeCycle method, updating movie data if another movie is displayed in Poster.tsx
     */
    if (this.context.params.posterIndex !== this.state.posterIndex)
      await this.fetchData();
  }

  render() {
    /* Renders content, changes depending on which movie information is to be displayed
     */
    return (
      <div>
        {this.state.loading || !this.state.movie ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.Container}>
            <div className={styles.Tagline}>"{this.state.movie.tagline}"</div>
            <div className={styles.Title}>{this.state.movie.title}</div>
            <div className={styles.Overview}>{this.state.movie.overview}</div>
          </div>
        )}
      </div>
    );
  }
}
