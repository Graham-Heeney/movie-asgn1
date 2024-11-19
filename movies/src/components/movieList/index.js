import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";

const MovieList = (props) => {
  // Ensure that props.movies is an array and not undefined
  let movieCards = (props.movies || []).map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "10px"}}>
      <Movie key={m.id} movie={m} action={props.action} />
      </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {movieCards.length > 0 ? movieCards : <p>No movies available.</p>}
    </Grid>
  );
};

export default MovieList;