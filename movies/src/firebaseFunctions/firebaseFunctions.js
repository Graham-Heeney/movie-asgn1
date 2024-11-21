/* /import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, getDocs } from "firebase/firestore";

const db = getFirestore();

export const saveFavoriteMovie = async (movie) => {
  const user = getAuth().currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid, "favorites", movie.id.toString()); 
    try {
      await setDoc(userRef, movie, { merge: true }); 
      console.log("Movie added to favorites!");
    } catch (error) {
      console.error("Error adding movie to favorites: ", error);
      throw new Error("Failed to add movie to favorites"); 
    }
  } else {
    console.error("User is not authenticated");
    throw new Error("User is not authenticated"); 
  }
};

export const getFavoriteMovies = async () => {
  const user = getAuth().currentUser;
  if (user) {
    const userFavoritesRef = collection(db, "users", user.uid, "favorites");
    try {
      const snapshot = await getDocs(userFavoritesRef);
      const favoriteMovies = snapshot.docs.map(doc => doc.data()); 
      return favoriteMovies;
    } catch (error) {
      console.error("Error fetching favorite movies: ", error);
      throw new Error("Failed to fetch favorite movies"); 
    }
  } else {
    console.error("User is not authenticated");
    throw new Error("User is not authenticated"); 
  }
}; */
