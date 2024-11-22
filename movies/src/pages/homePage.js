import React, { useState } from "react";  
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";
import { Pagination } from "@mui/material";

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const { data, error, isLoading, isError } = useQuery(
    ['discover', currentPage], 
    () => getMovies(currentPage)  
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  const handlePageChange = (event, page) => {
    setCurrentPage(page);  
  };

  const totalPages = Math.ceil(data.total_results / 20); 

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <>
      <div style={backgroundStyle}>
        <PageTemplate
          title="Discover Movies"
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />;
          }}
        />
      </div>

      <Pagination
        style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        color="secondary"
        onChange={handlePageChange} 
        page={currentPage}
        size="large"
      />
    </>
  );
};

export default HomePage;
