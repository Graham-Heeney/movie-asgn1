import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container spacing={2} style={{ padding: "15px" }}>
      {/* Header Section */}
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>

      {/* Main Content Section (Filter + Movie List) */}
      <Grid container spacing={2}>
        {/* Left: Filter Card */}
        <Grid item xs={12} sm={4} md={3} lg={3} sx={{ padding: "10px" }}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>

        {/* Right: Movie List */}
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
