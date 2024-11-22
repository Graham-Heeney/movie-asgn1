import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";


const MovieReviewPage = (props) => {
  let location = useLocation();
  const {movie, review} = location.state;

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
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
    </div>
  );
};

export default MovieReviewPage;