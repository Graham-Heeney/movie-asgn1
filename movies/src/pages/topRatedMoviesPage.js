import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateMovieListPage"; 
import { useQuery } from "react-query"; 
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";


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

  const backgroundStyle = {
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (<div style={backgroundStyle}>
    <PageTemplate
      title="Top Rated Movies"
      movies={TopRatedMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
    </div>
  );
};

export default TopRatedMovies;
