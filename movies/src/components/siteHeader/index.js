import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { auth } from "../../firebase"; 
import { signOut, onAuthStateChanged } from "firebase/auth"; 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null); 
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
    });
    
    
    return () => unsubscribe();
  }, []);

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Top Rated Movies", path: "/movies/top-rated" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorEl(null); 
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    signOut(auth) // Sign out the user
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
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {menuOptions.map((opt) => (
              <MenuItem key={opt.label} onClick={() => handleMenuSelect(opt.path)}>
                {opt.label}
              </MenuItem>
            ))}
            {user ? (
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem> 
            ) : (
              <>
                <MenuItem onClick={() => navigate("/signup")}>Sign Up</MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Sign In</MenuItem> 
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
