import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyAD-wlX0eppKNHuOY5M5HLUczeO4ejVuzA",
  authDomain: "webappasgn1-firebase.firebaseapp.com",
  projectId: "webappasgn1-firebase",
  storageBucket: "webappasgn1-firebase.firebasestorage.app",
  messagingSenderId: "692993198858",
  appId: "1:692993198858:web:484321a5156ab5ff7f08f3",
  measurementId: "G-YXN0J1SFYL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

/*export const saveFavoriteMovie = async (movie) => {
  const user = auth.currentUser;
  if (!user) {
    console.log("No user is logged in");
    return;
  }

  const userFavoritesRef = collection(db, "favorites", user.uid);
  
  await setDoc(doc(userFavoritesRef, movie.id.toString()), movie);
};

export const getFavoriteMovies = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.log("No user is logged in");
    return [];
  }

  const userFavoritesRef = collection(db, "favorites", user.uid);
  
  const snapshot = await getDocs(userFavoritesRef);
  const favoriteMovies = snapshot.docs.map(doc => doc.data());

  return favoriteMovies;
};*/
