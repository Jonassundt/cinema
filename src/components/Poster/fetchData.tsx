import React from "react";
import styles from "./fetchData.module.css";

export default class fetchMovie extends React.Component {
  state = {
    loading: true,
    movie: {title: "", tagline: "", overview: ""},
    ID: [],
    apiKey: "4d785ede4f71452009daf3f954680323"
  };

  /* Shawshank ID : 278
  *  Batman begins ID : 272
  *  Skyfall ID : 37724
  *  Inception ID : 27205
  *  Interstellar ID : 157336
  *  Star Wars ID : 1891
  * 
  */

  async componentDidMount() {
    const url =
      `https://api.themoviedb.org/3/movie/27205?api_key=${this.state.apiKey}`;
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

/**
 * API Key (v3 auth) = 4d785ede4f71452009daf3f954680323
 * Example API request = https://api.themoviedb.org/3/movie/550?api_key=4d785ede4f71452009daf3f954680323
 * API read access token (v4 auth) = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDc4NWVkZTRmNzE0NTIwMDlkYWYzZjk1NDY4MDMyMyIsInN1YiI6IjVmNmI0ZDVlZDU1ZTRkMDAzNTZkOGU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cOWe7DI7D4JOZdIaZWnhu-8hddvqkySPZkAF6VjFvOo
 * interstellar : https://api.themoviedb.org/3/movie/157336?api_key=4d785ede4f71452009daf3f954680323
 */
