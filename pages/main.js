import React, { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../components/Seo";

export default function Main() {
  const [movies, setMovies] = useState();
  useEffect(async () => {
    const response = await axios.get(`api/movies`);
    const movieList = await response.data.results;
    setMovies(movieList);
  }, []);
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        {movies ? (
          movies.map((movie) => {
            return (
              <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>{movie.original_title}</h4>
              </div>
            );
          })
        ) : (
          <h4>Loading...</h4>
        )}
        <style jsx>
          {`
            .container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              padding: 20px;
              gap: 20px;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie img:hover {
              transform: scale(1.05);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
}
