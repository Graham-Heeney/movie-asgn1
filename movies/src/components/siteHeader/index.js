import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Graham's TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ marginRight: "20px" }}>
            All you ever wanted to know about Movies!
          </Typography>
        
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/favorites")}>
            Favorites
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/top-rated")}>
            Top Rated Movies
          </Button>
          {user ? (
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
