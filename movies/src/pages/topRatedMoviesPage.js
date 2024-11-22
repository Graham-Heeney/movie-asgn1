import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateMovieListPage"; 
import { useQuery } from "react-query"; 
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TopRatedMovies = (props) => {
 
  const { data, error, isLoading, isError } = useQuery("topRated", getTopRatedMovies);

  if (isLoading) {
    return <Spinner />; 
  }

  if (isError) {
    return <h1>{error.message}</h1>; 
  }

  const TopRatedMovies = data.results;

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
