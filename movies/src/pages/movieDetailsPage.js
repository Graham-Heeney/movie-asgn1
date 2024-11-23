import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";


const MoviePage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id }],
    getMovie
  );

  const { data: castData, error: castError, isLoading: castLoading } = useQuery(
    ["movieCast", { id }],
    getMovieCast
  );

  if (isLoading || castLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (castError) {
    return <h1>{castError.message}</h1>;
  }

  const topCast = castData.cast.slice(0, 5);

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
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            
            <MovieDetails movie={movie} cast = {topCast} />
           
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
    </div>
  );
};

export default MoviePage;
