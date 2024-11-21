/*import { useState, useEffect } from "react";
import { getFavoriteMovies } from "../firebase"; 

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoriteMovies = await getFavoriteMovies();
        setFavorites(favoriteMovies); 
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };

    fetchFavorites(); 
  }, []); 

  return favorites; 
};

export default useFavorites; */
