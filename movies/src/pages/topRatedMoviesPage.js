import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api"; // Import the top-rated movies API
import PageTemplate from "../components/templateMovieListPage"; // Reuse the PageTemplate component
import { useQuery } from "react-query"; // Use React Query for fetching data
import Spinner from "../components/spinner"; // Spinner component for loading state
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites"; // Add-to-favorites icon component

const TopRatedMovies = (props) => {
  // Fetch top-rated movies using React Query
  const { data, error, isLoading, isError } = useQuery("topRated", getTopRatedMovies);

  if (isLoading) {
    return <Spinner />; // Display spinner while loading
  }

  if (isError) {
    return <h1>{error.message}</h1>; // Display error message if there's an error
  }

  const TopRatedMovies = data.results;

  // Save favorite movies to local storage
  const favorites = TopRatedMovies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const addToFavorites = (movieId) => true;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={TopRatedMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default TopRatedMovies;
