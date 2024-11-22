import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; 

const Header = (props) => {
  const title = props.title;
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        backgroundColor: theme.palette.primary.main, 
        padding: "10px", 
      }}
    >
      <IconButton
        aria-label="go back"
        onClick={() => navigate(-1)}
        sx={{ color: "white" }}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          color: "white", 
          textAlign: "center",
          flex: 1,
        }}
      >
        {title}
      </Typography>

      <IconButton
        aria-label="go forward"
        onClick={() => navigate(+1)}
        sx={{ color: "white" }} 
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
