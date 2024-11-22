import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  let movieCards = (props.movies || []).map((m) => (
    <Grid item key={m.id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "10px" }}>
      <Movie movie={m} action={props.action} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {/* Movie Cards Section - takes 12 columns on xs, 9 on md+ screens */}
      <Grid item xs={12} md={12}>  {/* Take full width here */}
        <Grid container spacing={2}>
          {movieCards.length > 0 ? movieCards : <p>No movies available.</p>}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieList;
