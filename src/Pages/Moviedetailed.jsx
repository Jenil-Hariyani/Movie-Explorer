import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Moviedetailed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=ec986fa0&i=${id}`,
      );
      const data = await res.json();
      setMovie(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <div className="loader"></div>;

  return (
    <div>
      <div className="movie-detailed">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Moviedetailed;