import React, { useState } from "react";  
import { getNowPlayingMovies } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateMovieListPage"; 
import { useQuery } from "react-query"; 
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import backgroundImage from "../images/pexels-megha-mangal-224592-806880.jpg";
import { Pagination } from "@mui/material";


const NowPlayingMovies = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const { data, error, isLoading, isError } = useQuery(
      ['nowPlaying', currentPage], 
      () => getNowPlayingMovies(currentPage)
    );
    
    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
      }
    
      const nowPlayingMovies = data.results;
    
      const favorites = nowPlayingMovies.filter((m) => m.favorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    
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
        <div style={backgroundStyle}>
          <PageTemplate
            title="Now Playing Movies"
            movies={nowPlayingMovies}
            action={(movie) => {
              return <AddToFavoritesIcon movie={movie} />;
            }}
          />
    
          <Pagination
            style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}
            count={totalPages}
            color="secondary"
            onChange={handlePageChange}
            page={currentPage}
            size="large"
          />
        </div>
      );
    };
    
    export default NowPlayingMovies;