import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MoviePage = (props) => {
  const { id } = useParams();

  // Fetch movie details
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id }],
    getMovie
  );

  // Fetch cast details
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

  const topCast = castData.cast.slice(0, 5); // Get the top 5 actors

  return (
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
  );
};

export default MoviePage;
