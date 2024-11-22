import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Graham's TMDB Client
            </Typography>
          
          </Box>

          <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
