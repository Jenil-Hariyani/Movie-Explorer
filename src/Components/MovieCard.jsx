import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      {/* Movie Cards */}

      <div className="movie-card">
        <img
          src={movie.Poster}
          alt={movie.Title}
          onError={(e) => {
            e.target.src =
              "https://dummyimage.com/300x450/000/fff&text=No+Image";
          }}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>Details</Link>{" "}
      </div>
    </div>
  );
}

export default MovieCard;
