import React, { useEffect, useRef, useState } from "react";
import MovieList from "../Components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const Searchref = useRef();

  const fetchMovies = async (query, pageNumber = 1) => {
    setLoading(true);

    // fetch data
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=ec986fa0&s=${query}&page=${pageNumber}`,
    );

    const data = await res.json();
    console.log(data);

    setMovies(data.Search || []);
    setTotalResults(data.totalResults || 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("Avengers", page);
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = Searchref.current.value.trim();

    if (query) {
      setPage(1);
      fetchMovies(query, 1);
    }
  };

  const handleClear = () => {
    Searchref.current.value = ""; // input clear
    setPage(1); // first page
    fetchMovies("Avengers", 1); // default movies
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div>
      <div className="Home">
        {/* Search Bar */}
        <form onSubmit={handleSearch}>
          <input
            ref={Searchref}
            type="text"
            placeholder="Search for a movie..."
          />

          <button type="submit">Search </button>

          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </form>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <MovieList movies={movies} />
        )}

        {/* Pagination */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
